// src/ContactUs.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack elements vertically */
  min-height: 100vh; /* Full height */
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  text-align: center; /* Center the title */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Allow the content to grow */
  display: flex; /* Use flexbox for horizontal layout */
  justify-content: space-between; /* Space between the two sections */
  padding: 2rem; /* Add some padding */
  max-width: 1200px; /* Optional: limit max width */
  margin: 0 auto; /* Center horizontally */
`;

const ContactInfo = styled.div`
  flex: 1; /* Allow contact info to grow */
  margin-right: 2rem; /* Space between the two sections */
  text-align: left; /* Align text to the left */
`;

const Form = styled.form`
  flex: 1; /* Allow form to grow */
  max-width: 600px;
  margin-left: 2rem; /* Space between the two sections */

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444;
    }
  }
`;

const ContactUs: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Title>Contact Us</Title>
      <ContentWrapper>
        <ContactInfo>
          <h2>Contact Information</h2>
          <p>
            Email: info@q-squared.com<br />
            Phone: (123) 456-7890<br />
            Address: 123 Main St, Vancouver, Canada<br />
          </p>
        </ContactInfo>
        <Form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows={5} placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </Form>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default ContactUs;
