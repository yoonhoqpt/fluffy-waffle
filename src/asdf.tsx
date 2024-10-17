// src/JobListing.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// Styled components
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

const ContentWrapper = styled.div`
   width: 50%; /* 80% of the parent's width */
  display: flex;
  padding: 2rem;
  margin: 0 auto;
`;

const FilterSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

const SearchBar = styled.input`
  padding: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const FiltersContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-top: 1rem;
  margin-bottom: 2rem;  // Add more space below the filters
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;


const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const JobList = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 2rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
  width: 400px;  // Set a fixed width
`;

const JobItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const JobDetails = styled.div`
  flex: 2;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
  width: 100%;  // Prevent content from stretching the width
  word-wrap: break-word;  // Handle long descriptions without overflowing
`;

const JobTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const JobDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const JobLocation = styled.p`
  margin-bottom: 0.5rem;
`;

const JobSalary = styled.p`
  margin-bottom: 1rem;
`;

const JobListing: React.FC = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Google', salary: '$200,000', location: 'New York, NY', description: 'Develop and maintain software applications.', postedDaysAgo: 10 },
{ id: 2, title: 'Data Analyst', company: 'Facebook (Meta)', salary: '$150,000', location: 'San Francisco, CA', description: 'Analyze and interpret complex data sets.', postedDaysAgo: 5 },
{ id: 3, title: 'Product Manager', company: 'Amazon', salary: '$180,000', location: 'Austin, TX', description: 'Lead product development and strategy.', postedDaysAgo: 1 },
{ id: 4, title: 'UX/UI Designer', company: 'Apple', salary: '$160,000', location: 'Los Angeles, CA', description: 'Design user-friendly interfaces and experiences.', postedDaysAgo: 20 },
{ id: 5, title: 'DevOps Engineer', company: 'Netflix', salary: '$170,000', location: 'Seattle, WA', description: 'Implement and manage CI/CD pipelines.', postedDaysAgo: 30 },
{ id: 6, title: 'Marketing Specialist', company: 'Stripe', salary: '$130,000', location: 'Chicago, IL', description: 'Develop marketing strategies and campaigns.', postedDaysAgo: 15 },
{ id: 7, title: 'Business Analyst', company: 'Uber', salary: '$140,000', location: 'Miami, FL', description: 'Analyze business processes and provide solutions.', postedDaysAgo: 8 },
{ id: 8, title: 'Full Stack Developer', company: 'Airbnb', salary: '$160,000', location: 'Boston, MA', description: 'Build and maintain web applications across the stack.', postedDaysAgo: 3 },
{ id: 9, title: 'Network Engineer', company: 'Microsoft', salary: '$190,000', location: 'Dallas, TX', description: 'Manage and optimize network infrastructure.', postedDaysAgo: 12 },
{ id: 10, title: 'System Administrator', company: 'Tesla', salary: '$150,000', location: 'Denver, CO', description: 'Maintain and support IT systems and servers.', postedDaysAgo: 4 },
{ id: 11, title: 'Data Scientist', company: 'Palantir', salary: '$180,000', location: 'San Jose, CA', description: 'Build predictive models and algorithms.', postedDaysAgo: 9 },
{ id: 12, title: 'Sales Executive', company: 'Salesforce', salary: '$120,000', location: 'Houston, TX', description: 'Drive sales and client relationships.', postedDaysAgo: 7 },
{ id: 13, title: 'Graphic Designer', company: 'Pinterest', salary: '$110,000', location: 'Philadelphia, PA', description: 'Create visual content for branding.', postedDaysAgo: 6 },
{ id: 14, title: 'Web Developer', company: 'Snap Inc.', salary: '$140,000', location: 'Portland, OR', description: 'Develop and optimize web applications.', postedDaysAgo: 2 },
{ id: 15, title: 'Cybersecurity Analyst', company: 'CrowdStrike', salary: '$160,000', location: 'Phoenix, AZ', description: 'Protect systems from cyber threats.', postedDaysAgo: 11 },

    // ...other jobs
  ];

  const [selectedJob, setSelectedJob] = useState<{ title: string; company: string; salary: string; location: string; description: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleJobClick = (job: { title: string; company: string; salary: string; location: string; description: string }) => {
    setSelectedJob(job);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSalaryFilter(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationFilter(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCompanyFilter(event.target.value);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (salaryFilter === '' || job.salary === salaryFilter) &&
    (locationFilter === '' || job.location === locationFilter) &&
    (companyFilter === '' || job.company === companyFilter)
  );

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <div style={{ flex: 1 }}>
          <Title>Job Listings</Title>
          <FilterSearchWrapper>
            <SearchBar
              type="text"
              placeholder="Search jobs"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FilterButton onClick={() => setFilterVisible(!isFilterVisible)}>
              {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
            </FilterButton>
          </FilterSearchWrapper>
          <FiltersContainer isVisible={isFilterVisible}>
            <div>
              <FilterLabel htmlFor="salary-filter">Salary:</FilterLabel>
              <FilterSelect id="salary-filter" value={salaryFilter} onChange={handleSalaryChange}>
                <option value="">All</option>
                <option value="$100,000">$100,000</option>
                <option value="$80,000">$80,000</option>
                {/* other salary options */}
              </FilterSelect>
            </div>
            <div>
              <FilterLabel htmlFor="location-filter">Location:</FilterLabel>
              <FilterSelect id="location-filter" value={locationFilter} onChange={handleLocationChange}>
                <option value="">All</option>
                <option value="New York, NY">New York, NY</option>
                <option value="San Francisco, CA">San Francisco, CA</option>
                {/* other locations */}
              </FilterSelect>
            </div>
            <div>
              <FilterLabel htmlFor="company-filter">Company:</FilterLabel>
              <FilterSelect id="company-filter" value={companyFilter} onChange={handleCompanyChange}>
                <option value="">All</option>
                <option value="Tech Corp">Tech Corp</option>
                <option value="Data Inc">Data Inc</option>
                {/* other companies */}
              </FilterSelect>
            </div>
          </FiltersContainer>
          <div style={{ display: 'flex' }}>
            <JobList>
              {filteredJobs.map(job => (
                <JobItem key={job.id} onClick={() => handleJobClick(job)}>
                  <JobTitle>{job.title}</JobTitle>
                  <JobCompany>{job.company}</JobCompany>
                  <JobLocation>{job.location}</JobLocation>
                  <JobSalary>{job.salary}</JobSalary>
                </JobItem>
              ))}
            </JobList>
            {selectedJob && (
              <JobDetails>
                <JobTitle>{selectedJob.title}</JobTitle>
                <JobCompany>{selectedJob.company}</JobCompany>
                <JobLocation>{selectedJob.location}</JobLocation>
                <JobSalary>{selectedJob.salary}</JobSalary>
                <JobDescription>{selectedJob.description}</JobDescription>
              </JobDetails>
            )}
          </div>
        </div>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default JobListing;
