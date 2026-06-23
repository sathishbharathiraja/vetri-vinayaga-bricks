import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders the brand logo', () => {
    render(<Navbar />);
    const logo = screen.getByText(/VETTRI VINAYAGA/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('A');
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Our Products/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request Quote/i })).toBeInTheDocument();
  });
});
