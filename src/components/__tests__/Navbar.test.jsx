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
    expect(screen.getByRole('link', { name: /Platform/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Specifications/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Enterprise/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request Quote/i })).toBeInTheDocument();
  });
});
