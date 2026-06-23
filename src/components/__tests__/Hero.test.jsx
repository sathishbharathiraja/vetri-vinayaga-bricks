import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

// Mock framer-motion to skip animations during tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      // Remove framer-motion specific props that might cause React warnings
      const { initial, animate, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    img: ({ src, alt, className, ...props }) => {
       const { initial, animate, transition, ...rest } = props;
       return <img src={src} alt={alt} className={className} {...rest} />;
    }
  }
}));

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    const headline = screen.getByText(/Strong, Reliable Bricks for Your Dream Project/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders the primary call to action button', () => {
    render(<Hero />);
    const ctaButton = screen.getByText(/Get a Direct Quote/i);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.tagName).toBe('A');
    expect(ctaButton).toHaveAttribute('href', '#contact');
  });
});
