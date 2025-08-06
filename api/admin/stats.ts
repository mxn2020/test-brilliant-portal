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

  const mongoUri =
    process.env.MONGODB_URI ||
    process.env.DATABASE_URL ||
    'mongodb://localhost:27017/geenius-template';
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    const db = client.db();

    // Compute stats
    const totalUsers = await db.collection('UserPreference').estimatedDocumentCount();
    const activeSessions = await db
      .collection('session')
      .countDocuments({ expiresAt: { $gt: new Date() } });
    const recentActivities = await db
      .collection('AuditLog')
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    const stats = {
      totalUsers,
      activeSessions,
      recentActivities: recentActivities.map((a) => ({
        id: a._id.toString(),
        action: a.action,
        timestamp: a.createdAt,
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
    console.error('Admin stats error:', error);
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

export default handler;