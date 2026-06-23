import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import LeadForm from '../LeadForm';

describe('LeadForm Component', () => {
  it('renders all form fields correctly', () => {
    render(<LeadForm />);
    
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Material Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estimated Quantity/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Request/i })).toBeInTheDocument();
  });

  it('allows user to type in input fields', async () => {
    const user = userEvent.setup();
    render(<LeadForm />);
    
    const nameInput = screen.getByLabelText(/Full Name/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    
    await user.type(nameInput, 'Sathish Bharathi');
    await user.type(phoneInput, '9876543210');
    
    expect(nameInput).toHaveValue('Sathish Bharathi');
    expect(phoneInput).toHaveValue('9876543210');
  });

  it('allows user to select material type', async () => {
    const user = userEvent.setup();
    render(<LeadForm />);
    
    const materialSelect = screen.getByLabelText(/Material Type/i);
    await user.selectOptions(materialSelect, 'Hollow Bricks');
    
    expect(materialSelect).toHaveValue('Hollow Bricks');
  });
});
