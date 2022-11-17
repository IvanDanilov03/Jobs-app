import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetailsPage";


const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/jobs/1`} />} />
        <Route path="/jobs" element={<Navigate replace to={`/jobs/1`} />} />
        <Route
          path={`/jobs/:pageNumber`}
          element={
            <JobsPage/>
          }
        />
        <Route
          path={`/job/:jobId`}
          element={<JobDetails/>}
        />
      </Routes>
    </div>
  );
};

export default App;

// https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu
