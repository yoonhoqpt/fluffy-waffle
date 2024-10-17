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
  width: 50%;
  display: flex;
  padding: 2rem;
  margin: 0 auto;
  gap: 2rem; /* Add gap between job list and job description */
`;

const FilterSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

const SearchBar = styled.input`
  padding: 0.5rem; /* Reduce vertical padding for a narrower height */
  width: 400px; /* Increase width for a longer horizontal length */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FilterButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0.5rem 1rem; /* Add horizontal padding to match the search bar */
  height: 2.0rem; /* Set a fixed height to match the search bar height */
  display: flex; /* Center the button text vertically */
  align-items: center; /* Center the button text vertically */
  justify-content: center; /* Center the button text horizontally */

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;


const FiltersContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-top: 1rem;
  margin-bottom: 2rem;
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
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 590px; /* Match height of JobList */
  overflow-y: scroll; /* Make the job list scrollable */
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
  height: 590px; /* Match height of JobList */
  overflow-y: auto; /* Make job details scrollable */
  width: 100%;
  word-wrap: break-word;
`;

const DealbreakerList = styled.ul`
  margin-top: 1rem;
  list-style-type: disc;
  padding-left: 20px;
`;

const DealbreakerItem = styled.li`
  color: red; /* Optional: To visually emphasize the dealbreakers */
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const JobListing: React.FC = () => {
  // Dummy job data
  const jobs = [
    {
      id: 1,
      title: 'Staff Software Engineer',
      company: 'Google',
      salary: '$200,000',
      location: 'New York, NY',
      description: 'Design, develop, test, deploy, maintain, and enhance large-scale software solutions.',
      postedDaysAgo: 10,
      dealbreaker: ['10+ years experience in software engineering', 'Expertise in distributed systems'],
      credits: 15,
    },
    {
      id: 2,
      title: 'Software Engineer, Machine Learning',
      company: 'Meta',
      salary: '$150,000',
      location: 'San Francisco, CA',
      description: 'Meta is embarking on the most transformative change to its business and technology in company history, and our Machine Learning Engineers are at the forefront of this evolution.',
      postedDaysAgo: 5,
      dealbreaker: ['3+ years experience in machine learning', 'Proficiency in Python and TensorFlow'],
      credits: 8,
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Amazon',
      salary: '$180,000',
      location: 'Austin, TX',
      description: 'Lead product development and strategy.',
      postedDaysAgo: 1,
      dealbreaker: ['5+ years in product management', 'Experience with e-commerce platforms'],
      credits: 20,
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'Apple',
      salary: '$160,000',
      location: 'Los Angeles, CA',
      description: 'Design user-friendly interfaces and experiences.',
      postedDaysAgo: 20,
      dealbreaker: ['Portfolio of previous design work', '3+ years experience in UX/UI design'],
      credits: 12,
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Netflix',
      salary: '$170,000',
      location: 'Seattle, WA',
      description: 'Implement and manage CI/CD pipelines.',
      postedDaysAgo: 30,
      dealbreaker: ['Experience with AWS and Kubernetes', 'Strong knowledge of CI/CD tools'],
      credits: 10,
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Stripe',
      salary: '$130,000',
      location: 'Chicago, IL',
      description: 'Develop marketing strategies and campaigns.',
      postedDaysAgo: 15,
      dealbreaker: ['3+ years in digital marketing', 'Proven track record in campaign management'],
      credits: 7,
    },
    {
      id: 7,
      title: 'Business Analyst',
      company: 'Uber',
      salary: '$140,000',
      location: 'Miami, FL',
      description: 'Analyze business processes and provide solutions.',
      postedDaysAgo: 8,
      dealbreaker: ['Experience with SQL and data analysis', '3+ years in business analysis'],
      credits: 18,
    },
    {
      id: 8,
      title: 'Full Stack Developer',
      company: 'Airbnb',
      salary: '$160,000',
      location: 'Boston, MA',
      description: 'Build and maintain web applications across the stack.',
      postedDaysAgo: 3,
      dealbreaker: ['Proficiency in React and Node.js', '5+ years in full stack development'],
      credits: 14,
    },
    {
      id: 9,
      title: 'Network Engineer',
      company: 'Microsoft',
      salary: '$190,000',
      location: 'Dallas, TX',
      description: 'Manage and optimize network infrastructure.',
      postedDaysAgo: 12,
      dealbreaker: ['CCNA or equivalent certification', '5+ years in network engineering'],
      credits: 16,
    },
    {
      id: 10,
      title: 'System Administrator',
      company: 'Tesla',
      salary: '$150,000',
      location: 'Denver, CO',
      description: 'Maintain and support IT systems and servers.',
      postedDaysAgo: 4,
      dealbreaker: ['Proficiency in Linux administration', 'Experience with virtualization tools'],
      credits: 9,
    },
    {
      id: 11,
      title: 'Data Scientist',
      company: 'Palantir',
      salary: '$180,000',
      location: 'San Jose, CA',
      description: 'Build predictive models and algorithms.',
      postedDaysAgo: 9,
      dealbreaker: ['3+ years in data science', 'Experience with Python and SQL'],
      credits: 13,
    },
    {
      id: 12,
      title: 'Sales Executive',
      company: 'Salesforce',
      salary: '$120,000',
      location: 'Houston, TX',
      description: 'Drive sales and client relationships.',
      postedDaysAgo: 7,
      dealbreaker: ['5+ years in sales', 'Experience in SaaS sales'],
      credits: 5,
    },
    {
      id: 13,
      title: 'Graphic Designer',
      company: 'Pinterest',
      salary: '$110,000',
      location: 'Philadelphia, PA',
      description: 'Create visual content for branding.',
      postedDaysAgo: 6,
      dealbreaker: ['Portfolio of past work', 'Proficiency in Adobe Creative Suite'],
      credits: 6,
    },
    {
      id: 14,
      title: 'Web Developer',
      company: 'Snap Inc.',
      salary: '$140,000',
      location: 'Portland, OR',
      description: 'Develop and optimize web applications.',
      postedDaysAgo: 2,
      dealbreaker: ['4+ years in front-end development', 'Proficiency in JavaScript and React'],
      credits: 11,
    },
    {
      id: 15,
      title: 'Cybersecurity Analyst',
      company: 'CrowdStrike',
      salary: '$160,000',
      location: 'Phoenix, AZ',
      description: 'Protect systems from cyber threats.',
      postedDaysAgo: 11,
      dealbreaker: ['Experience with threat detection tools', '3+ years in cybersecurity'],
      credits: 17,
    }
  ];
  

  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Calculate jobs for the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handleJobClick = (job: { id: number; title: string; company: string; salary: string; location: string; description: string; postedDaysAgo: number; dealbreaker: string[]; credits: number}) => {
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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
              {isFilterVisible ? 'Hide Filters' : 'Filters'}
            </FilterButton>
          </FilterSearchWrapper>
          <FiltersContainer isVisible={isFilterVisible}>
            <div>
              <FilterLabel htmlFor="salary-filter">Salary:</FilterLabel>
              <FilterSelect id="salary-filter" value={salaryFilter} onChange={handleSalaryChange}>
              <option value="">All</option>
              <option value="$200,000">$200,000</option>
              <option value="$180,000">$180,000</option>
              <option value="$170,000">$170,000</option>
              <option value="$160,000">$160,000</option>
              <option value="$150,000">$150,000</option>
              <option value="$140,000">$140,000</option>
              <option value="$130,000">$130,000</option>
              <option value="$120,000">$120,000</option>
              <option value="$110,000">$110,000</option>
              </FilterSelect>
            </div>
            <div>
              <FilterLabel htmlFor="location-filter">Location:</FilterLabel>
              <FilterSelect id="location-filter" value={locationFilter} onChange={handleLocationChange}>
              <option value="">All</option>
              <option value="New York, NY">New York, NY</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="Austin, TX">Austin, TX</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Seattle, WA">Seattle, WA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Miami, FL">Miami, FL</option>
              <option value="Boston, MA">Boston, MA</option>
              <option value="Dallas, TX">Dallas, TX</option>
              <option value="Denver, CO">Denver, CO</option>
              <option value="San Jose, CA">San Jose, CA</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Philadelphia, PA">Philadelphia, PA</option>
              <option value="Portland, OR">Portland, OR</option>
              <option value="Phoenix, AZ">Phoenix, AZ</option>
              </FilterSelect>
            </div>
            <div>
              <FilterLabel htmlFor="company-filter">Company:</FilterLabel>
              <FilterSelect id="company-filter" value={companyFilter} onChange={handleCompanyChange}>
              <option value="">All</option>
                <option value="Google">Google</option>
                <option value="Meta">Meta</option>
                <option value="Amazon">Amazon</option>
                <option value="Apple">Apple</option>
                <option value="Netflix">Netflix</option>
                <option value="Stripe">Stripe</option>
                <option value="Uber">Uber</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Tesla">Tesla</option>
                <option value="Palantir">Palantir</option>
                <option value="Salesforce">Salesforce</option>
                <option value="Pinterest">Pinterest</option>
                <option value="Snap Inc.">Snap Inc.</option>
                <option value="CrowdStrike">CrowdStrike</option>
              </FilterSelect>
            </div>
          </FiltersContainer>
          <div style={{ display: 'flex', gap: '20px' }}>
            <JobList>
              {currentJobs.map((job) => (
                <JobItem key={job.id} onClick={() => handleJobClick(job)}>
                  <JobTitle>{job.title}</JobTitle>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.salary}</p>
                </JobItem>
              ))}
              <PaginationContainer>
                <PaginationButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                  Previous
                </PaginationButton>
                <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </PaginationButton>
              </PaginationContainer>
            </JobList>
            {selectedJob && (
              <JobDetails>
                <JobTitle>{selectedJob.title}</JobTitle>
                <p>{selectedJob.company}</p>
                <p>{selectedJob.location}</p>
                <p>{selectedJob.salary}</p>
                <h4>Number of credits required to apply: {selectedJob.credits}</h4>
                <h3>Dealbreakers:</h3>
                <DealbreakerList>
                {selectedJob.dealbreaker.map((dealbreaker, index) => (
                  <DealbreakerItem key={index}>{dealbreaker}</DealbreakerItem>
                ))}
              </DealbreakerList>
              <p>{selectedJob.description}</p>
              
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
