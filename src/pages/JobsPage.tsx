import React, { useState, useEffect, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Jobs } from "../jobs.model";
import Loader from "../components/Loader/Loader";
import JobsList from "../components/JobsList/JobsList";
import { useParams } from "react-router-dom";
import PaginationMUI from "../components/Pagination/PaginationMUI";
import ErrorPage from "./ErrorPage";

const JobsPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pageNumber =
    typeof params.pageNumber === "undefined"
      ? 1
      : parseInt(params.pageNumber, 10);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedJobs, setLoadedJobs] = useState<Jobs[]>([]);
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
  }, [setIsLoading, setHttpError, pageNumber]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (Number.isNaN(pageNumber)) {
    return <Navigate to="/jobs/1" />;
  }

  const handlePageNumberChange = (newPageNumber: number) => {
    navigate(`/jobs/${newPageNumber}`);
  };

  if (httpError) {
    return <ErrorPage httpError={httpError} />;
  }

  return (
    <div className="bg-slate-200">
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <JobsList jobs={loadedJobs} />
            <PaginationMUI
              pageNumber={pageNumber}
              onPageNumberChange={handlePageNumberChange}
            />
          </>
        )}
      </ul>
    </div>
  );
};

export default JobsPage;

// https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu
