import React from "react";
import JobsItem from "../JobsItem/JobsItem";

export interface JobsListProps {
  jobs: {
    address: string;
    benefits: string[];
    createdAt: string;
    description: string;
    email: string;
    employment_type: string[];
    id: string;
    location: {
      lat: number;
      long: number;
    };
    name: string;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt: string;
  }[];
}

const JobsList: React.FC<JobsListProps> = (props) => {  
  return (
    <div className="pt-4">
      {props.jobs.map((job) => (
        <JobsItem
          key={job.id}
          address={job.address}
          benefits={job.benefits}
          createdAt={job.createdAt}
          description={job.description}
          email={job.email}
          employment_type={job.employment_type}
          id={job.id}
          location={job.location}
          name={job.name}
          phone={job.phone}
          pictures={job.pictures}
          salary={job.salary}
          title={job.title}
          updatedAt={job.updatedAt}
        />
      ))}
    </div>
  );
};

export default JobsList;
