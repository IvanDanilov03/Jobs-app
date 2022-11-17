import React from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";

export interface JobsItemProps {
  key: string;
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
}

const JobsItem: React.FC<JobsItemProps> = (props) => {

  const {
    createdAt,
    id,
    name,
    pictures,
    title,
  } = props;

  const propcreatedDate = createdAt;
  const [clearDate] = (propcreatedDate.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)) || [];
  const currentDate = new Date();
  const createdDate = new Date(clearDate)
  const postedAgo = Math.floor((currentDate.getTime()-createdDate.getTime())/(24*3600*1000))

  return (
    <section className="mb-4 w-auto mt-4 mx-4 flex flex-row rounded-lg bg-slate-100 shadow-sm md:bg-white md:mx-20 ">
      <div className="relative ml-4 w-16 h-16 self-center md:self-start md:mt-5">
        <img
          className="rounded-full border border-gray-100 shadow-sm h-full w-full object-cover object-center object-cover"
          src={pictures[0]}
          alt={name}
        />
      </div>

      <div className="mx-4 my-4 w-9/12 flex flex-col md:flex-row md:w-11/12 md:">
        <div className="flex flex-row my-2 md:flex-col md:order-1 md:w-2/5 md:pl-10 md:ml-auto md:my-3">
          <div className="hidden md:contents md:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto hover:fill-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
          <Stars />
          <h3 className="ml-auto text-slate-500 md:mt-auto max-[405px]:pl-3">
            {`Posted ${postedAgo} days ago`}
          </h3>
        </div>

        <div className="md:w-3/5">
          <Link to={`/job/${id}`}>
            <h2 className="font-medium">{title.split('.')}</h2>
          </Link>
          <h3 className="text-slate-500">
            {`${name} • Allgemeines Krankenhaus der Stadt Wien - AKH`}
          </h3>

          <div className="flex flex-row my-2">
            <div>
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                  fill="#878D9D"
                />
              </svg>
            </div>
            <h3 className="ml-1 text-slate-500">Vienna, Austria</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsItem;
