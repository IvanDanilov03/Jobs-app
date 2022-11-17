import React from "react";
import { Pagination } from "@mui/material";

export interface PaginationMUIProps {
  pageNumber: number;
  onPageNumberChange: (pageNumber: number) => void;
}


const PaginationMUI: React.FC<PaginationMUIProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.onPageNumberChange(value);
  };
  
  return (
    <div className="flex justify-center mt-6 pb-6">
      <Pagination
        count={18}
        page={props.pageNumber}
        shape="rounded"
        onChange={handleChange}
        className="bg-white rounded-lg"
      />
    </div>
  );
};

export default PaginationMUI;
