import React, { useState } from 'react';
import { Container, Div, Card, CardHeader, CardTitle, CardContent, Icon } from '@/lib/dev-container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'What is GeneralApp?',
    answer: 'GeneralApp is a modular SaaS platform that helps teams manage projects, track analytics and collaborate securely.',
  },
  {
    question: 'Do I need a credit card to start?',
    answer: 'No. You can sign up for a free tier without providing payment details. Upgrade anytime.',
  },
  {
    question: 'Is my data safe?',
    answer: 'We use industry‑standard encryption, role‑based access control and regular security audits to protect your data.',
  },
  {
    question: 'Can I self‑host the solution?',
    answer: 'Yes – the codebase is open source and can be deployed on your own infrastructure with full feature parity.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container componentId="landing-faq">
      <Div devId="faq-section" className="py-16 bg-gray-100">
        <Div devId="faq-grid" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqItems.map((item, idx) => (
            <Card key={idx} className="p-4 cursor-pointer" onClick={() => toggle(idx)}>
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium">{item.question}</CardTitle>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </CardHeader>
              {openIndex === idx && (
                <CardContent className="mt-2 text-gray-700">{item.answer}</CardContent>
              )}
            </Card>
          ))}
        </Div>
      </Div>
    </Container>
  );
}