// src/SignIn.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  text-align: center;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    padding: 1rem; /* Padding inside the input */
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Ensure padding is included in width */
  }

  button {
    width: 100%;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444;
    }
  }

  a {
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: #007BFF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  // Additional styling for sign up link
  .signup-link {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #333;

    a {
      color: #007BFF;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SignIn: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Title>Sign In</Title>
      <FormWrapper>
        <Form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
          <a href="#">Forgot Password?</a>
          <div className="signup-link">
            <span>Don't have an account? </span>
            <a href="/signup">Sign up here</a>
          </div>
        </Form>
      </FormWrapper>
      <Footer />
    </Container>
  );
};

export default SignIn;
