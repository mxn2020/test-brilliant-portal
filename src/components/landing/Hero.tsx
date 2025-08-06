import React from 'react';
import { Container, Div, H1, P, Button } from '@/lib/dev-container';
import { Link } from 'react-router-dom';

interface HeroProps {
  /** 
   * Optional flag used by the Landing page to trigger entrance animations.
   * When true, the component will apply a fade‑in transition.
   */
  mounted?: boolean;
}

/**
 * Hero section for the landing page.
 * Displays the main headline, supporting copy and a primary call‑to‑action.
 */
export default function Hero({ mounted = false }: HeroProps) {
  return (
    <Container componentId="landing-hero">
      <Div
        devId="hero-wrapper"
        className={\`flex flex-col items-center justify-center text-center py-20 px-4 
          bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500
          ${mounted ? 'opacity-0 translate-y-4 animate-fadeIn' : ''}\`}
      >
        <H1 devId="hero-title" className="text-5xl font-extrabold text-white tracking-tight">
          Empower Your Business with GeneralApp
        </H1>
        <P devId="hero-subtitle" className="mt-4 text-lg text-gray-100 max-w-2xl">
          A flexible, all‑in‑one solution that streamlines workflows, boosts productivity and grows with you.
        </P>

        <Div devId="hero-cta" className="mt-8">
          <Link to="/register">
            <Button devId="hero-cta-button" variant="primary" className="px-8 py-3 text-base">
              Get Started
            </Button>
          </Link>
        </Div>
      </Div>
    </Container>
  );
}