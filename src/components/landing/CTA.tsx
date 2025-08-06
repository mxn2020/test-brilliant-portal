import React from 'react';
import { Container, Div, Button } from '@/lib/dev-container';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <Container componentId="landing-cta">
      <Div devId="cta-section" className="py-20 bg-purple-700 text-center text-white">
        <Div devId="cta-content" className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Supercharge Your Workflow?</h2>
          <p className="text-lg mb-8">
            Join thousands of teams already benefiting from the power of GeneralApp.
          </p>
          <Link to="/login">
            <Button devId="cta-button" variant="secondary" className="px-10 py-3 text-base font-medium">
              Start Now
            </Button>
          </Link>
        </Div>
      </Div>
    </Container>
  );
}