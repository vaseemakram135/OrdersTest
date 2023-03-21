/** @jest-environment jsdom */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from '../src/LoginForm';
import { __esModule } from '@babel/plugin-proposal-class-properties';

jest.mock('react-router-dom', ()=>{
 const originalModule = jest.requireActual('react-router-dom')

 return{
  __esModule:true,
  useNavigate: jest.fn().mockReturnValue(true)
 }
})


describe('LoginPage', () => {
  it('renders login form', () => {

    render(<LoginPage />);
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  test('form input fields update correctly', () => {
    const { getByLabelText } = render(<LoginPage />);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const email = 'testuser@example.com';
    const password = 'testpassword';
  
    // Simulate user input
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
  
    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });
  
  test('form submission with invalid credentials', () => {
    const { getByLabelText, getByText, queryByText } = render(<LoginPage />);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const submitButton = getByText('Submit');
  
    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
  
    // Simulate form submission
    fireEvent.click(submitButton);
  
    // Check that an error message is displayed
    expect(queryByText('Invalid email or password.')).toBeInTheDocument();
  });
  test('form submission with valid credentials', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const submitButton = getByText('Submit');
  
    // Simulate user input
    fireEvent.change(emailInput, { target: { value: mockData[0].email } });
    fireEvent.change(passwordInput, { target: { value: mockData[0].password } });
  
    // Simulate form submission
    fireEvent.click(submitButton);
  
    // Check that authenticated state is true and user is redirected to the test page
    expect(localStorage.getItem('authenticated')).toBe('true');
    expect(navigate).toHaveBeenCalledWith('/test');
  });
  
}
)
