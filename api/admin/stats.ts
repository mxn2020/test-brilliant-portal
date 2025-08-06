import { Handler } from '@netlify/functions';
import { MongoClient } from 'mongodb';

export const handler: Handler = async (event, _context) => {
  const origin = event.headers.origin || 'http://localhost:8889';

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: '',
    };
  }

  const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/geenius-template';
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    const db = client.db();

    // Simple aggregation for demonstration
    const totalUsers = await db.collection('user').estimatedDocumentCount();
    const activeSessions = await db.collection('session').countDocuments({
      expiresAt: { $gt: new Date() },
    });
    const recentActivities = await db
      .collection('AuditLog')
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    const stats = {
      totalUsers,
      activeSessions,
      recentActivities: recentActivities.map((a: any) => ({
        id: a._id.toString(),
        description: a.action,
      })),
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(stats),
    };
  } catch (error: any) {
    console.error('Admin stats API error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({ error: error.message }),
    };
  } finally {
    await client.close();
  }
};