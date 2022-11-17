import React, { useState, useCallback, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import JobInfo from "../components/JobInfo/JobInfo";
import Loader from "../components/Loader/Loader";

type Job = {
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
};

const JobDetailsPage: React.FC = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedJobs, setLoadedJobs] = useState<Job[]>([]);
  const [httpError, setHttpError] = useState("");

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    setHttpError("");
    try {
      const response = await fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setLoadedJobs(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError((error as Error).message);
    }
  }, [setIsLoading, setHttpError]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const job: Job | undefined = loadedJobs.find((job) => job.id === jobId);

  if (typeof job === "undefined") {
    navigate("/jobs/1");
    return null;
  }

  const {
    address,
    benefits,
    createdAt,
    description,
    email,
    employment_type,
    id,
    location,
    name,
    phone,
    pictures,
    salary,
    title,
    updatedAt,
  } = job;

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  if (typeof jobId === "undefined") {
    return <Navigate to="/jobs/1" />;
  }

  return (
    <div className="bg-white min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <JobInfo
            address={address}
            benefits={benefits}
            createdAt={createdAt}
            description={description}
            email={email}
            employment_type={employment_type}
            id={id}
            location={location}
            name={name}
            phone={phone}
            pictures={pictures}
            salary={salary}
            title={title}
            updatedAt={updatedAt}
          />
          <div className="md:ml-10 max-[768px]:hidden my-20">
            <GoBackButton/>
          </div>
        </section>
      )}
    </div>
  );
};

export default JobDetailsPage;
