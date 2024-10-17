// src/EmployerLandingPage.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// Import images
import candidateImg from './assets/images/candidate.jpg';
import transparentProcessImg from './assets/images/handshake.jpg';
import salaryTransparencyImg from './assets/images/contract.jpg';
import timelyResponseImg from './assets/images/stopwatch.jpg';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  text-align: center;
  background-color: #f7f7f7;
  height: 100vh;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15%;
  height: 100%;
  background-color: #f7f7f7;
`;

const WelcomeText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 5rem;
    margin: 0;
    color: #000;
  }

  p {
    font-size: 1.75rem;
    color: #666;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Section = styled.section`
  padding: 2rem 0;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem; /* Adds space between cards */
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text */
`;

const FeatureImage = styled.img`
  width: 100%; /* Responsive width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Match card's border radius */
  margin-bottom: 1rem; /* Space below the image */
`;

const FeatureTitle = styled.h3`
  color: #000;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const AdditionalContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left; /* Align text to the left for better readability */

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6; /* Improve readability */
    font-size: 1.125rem; /* Slightly larger font size */
  }
`;

const EmployerLandingPage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <WelcomeText>
          <h1>Streamline Your Hiring Process.</h1>
          <p>Connecting employers with exceptional talent effortlessly.</p>
          <Button>Get Started</Button>
        </WelcomeText>
      </HeroSection>
      <Section>
        <h2>Why Choose Q-Squared?</h2>
        <FeatureList>
          <FeatureCard>
            <FeatureImage src={transparentProcessImg} alt="Transparent Process" />
            <FeatureTitle>Transparent Process</FeatureTitle>
            <FeatureDescription>
              Clearly defined interview processes for every job posting.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage src={salaryTransparencyImg} alt="Salary Transparency" />
            <FeatureTitle>Salary Transparency</FeatureTitle>
            <FeatureDescription>
              Know the salary upfront for every job to avoid mismatches.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage src={timelyResponseImg} alt="Timely Responses" />
            <FeatureTitle>Timely Responses</FeatureTitle>
            <FeatureDescription>
              Employers must respond within one week, ensuring you are never left in the dark.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage src={candidateImg} alt="High-Quality Candidates" />
            <FeatureTitle>High-Quality Candidates</FeatureTitle>
            <FeatureDescription>
              Apply with a credit system that encourages quality over quantity.
            </FeatureDescription>
          </FeatureCard>
        </FeatureList>
      </Section>
      <AdditionalContent>
        <h2>Our Mission</h2>
        <p>
          At Q-Squared, our mission is to revolutionize the hiring process by
          creating a transparent and efficient platform that connects qualified
          candidates with employers seeking top talent. We believe in the power of
          data-driven insights to streamline recruitment, fostering an environment
          where both candidates and employers can thrive.
        </p>
        <h2>Our Values</h2>
        <p>
          Integrity, transparency, and innovation are at the core of everything we
          do. We strive to build a community that values honesty and fairness in
          the hiring process, ensuring that every candidate has an equal
          opportunity to succeed.
        </p>
        <h2>How It Works</h2>
        <p>
          Our platform simplifies the hiring process for both candidates and
          employers. Candidates can easily browse job postings, apply with
          confidence, and receive timely feedback. Employers benefit from a
          streamlined recruitment process, ensuring they find the right fit for
          their team quickly and efficiently.
        </p>
        <h2>Join Us Today!</h2>
        <p>
          Ready to take the next step in your hiring process? Join Q-Squared today and
          experience a new standard in recruitment. Whether you are an employer seeking
          exceptional talent or a candidate looking for your dream job, we are here
          to help you succeed.
        </p>
      </AdditionalContent>
      <Footer />
    </Container>
  );
};

export default EmployerLandingPage;
