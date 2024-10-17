// src/AboutUs.tsx
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
  justify-content: center; /* Center the content */
  padding: 2rem; /* Add some padding */
  max-width: 1200px; /* Optional: limit max width */
  margin: 0 auto; /* Center horizontally */
`;

const AboutContent = styled.div`
  flex: 1; /* Allow about content to grow */
  text-align: left; /* Align text to the left */
  max-width: 800px; /* Optional: limit max width */
`;

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Title>About Us</Title>
      <ContentWrapper>
        <AboutContent>
          <h2>Who We Are</h2>
          <p>
            Q-Squared is dedicated to providing innovative solutions that drive success and efficiency for our clients.
            Our mission is to empower organizations by leveraging cutting-edge technology and exceptional service.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We adhere to the highest standards of ethics and transparency.</li>
            <li>Collaboration: We believe in the power of teamwork to achieve remarkable outcomes.</li>
            <li>Innovation: We embrace change and continuously seek new ideas and solutions.</li>
          </ul>
          <h2>Our Team</h2>
          <p>
            Our team is comprised of experienced professionals with diverse backgrounds, bringing a wealth of knowledge and expertise
            to every project. We are passionate about what we do and committed to delivering the best results for our clients.
          </p>
        </AboutContent>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default AboutUs;