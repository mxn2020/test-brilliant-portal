import React from 'react';
import { Container, Div, Card, CardHeader, CardTitle, CardContent, Avatar, AvatarImage, AvatarFallback } from '@/lib/dev-container';

const testimonials = [
  {
    quote: 'GeneralApp transformed the way we work – everything is faster and more organized.',
    author: 'Jane Doe',
    role: 'Product Manager',
    avatar: '/images/avatars/jane.png',
  },
  {
    quote: 'The analytics dashboard gave us instant insights we needed to scale.',
    author: 'John Smith',
    role: 'CTO',
    avatar: '/images/avatars/john.png',
  },
  {
    quote: 'Security features let us sleep well at night, knowing data is safe.',
    author: 'Emily Chen',
    role: 'Founder',
    avatar: '/images/avatars/emily.png',
  },
];

export default function Testimonials() {
  return (
    <Container componentId="landing-testimonials">
      <Div devId="testimonials-section" className="py-16 bg-white">
        <Div devId="testimonials-grid" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="p-6 flex flex-col items-center text-center">
              <CardContent className="text-gray-800 italic mb-4">“{t.quote}”</CardContent>
              <Div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={t.avatar} alt={t.author} />
                  <AvatarFallback>{t.author[0]}</AvatarFallback>
                </Avatar>
                <Div className="text-left">
                  <CardTitle className="font-semibold">{t.author}</CardTitle>
                  <CardHeader className="text-sm text-gray-600">{t.role}</CardHeader>
                </Div>
              </Div>
            </Card>
          ))}
        </Div>
      </Div>
    </Container>
  );
}