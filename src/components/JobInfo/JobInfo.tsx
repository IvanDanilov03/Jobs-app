import React from "react";
import Contacts from "../Contacts/Contacts";
import SaveList from "../SaveList/Savelis";
import Share from "../Share/Share";
import ApplyNowButton from "./ApplyNowButton/ApplyNowButton";
import InfoElement from "./InfoElement/InfoElement";

type JobInfoProps = {
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

const JobInfo: React.FC<JobInfoProps> = (props) => {
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
  } = props;

  // clearing salary data
  const salarySplit = salary.split("-");
  const minSalary = salarySplit[0].split("k")[0];
  const maxSalary = salarySplit[1].split("k")[0];
  const salaryInterval = "€ " + minSalary + " 000" + "-" + maxSalary + " 000";

  // clearing date data
  const [clearDate] = createdAt.match(/(\d{4})\-(\d{1,2})\-(\d{1,2})/) || [];
  const currentDate = new Date();
  const createdDate = new Date(clearDate);
  const postedAgo = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / (24 * 3600 * 1000)
  );

  // clearing description data
  const re =
    /\b(?=\w)(?!(?:Responsopilities|Compensation & Benefits)\b).*?(?=\s+(?:Responsopilities|Compensation & Benefits)\b|\s*$)/gi;
  const [descriptionPart, responsopilitiesPart, benefitsPart] =
    description.match(re) || [];
  let benefitSplit = benefitsPart
    .split(". ")
    .map((i) => i.replace(/\.*$/, "."));

  return (
    <section className="flex min-h-max flex-col mx-5 mb-4 md:items-start md:justify-center md:flex-row md:mx-20 mt-6 md:mt-12">
      <div className="md:w-3/5 md:mr-3">
        <header className="flex flex-col md:flex-row">
          <h1 className="font-bold text-2xl">Job Details</h1>
          <hr className="my-4 min-[768px]:hidden h-px bg-gray-200 border-0 "></hr>
          <div className="flex flex-row md:ml-auto md:mr-10">
            <div className="self-center">
              <SaveList />
            </div>
            <div className="ml-4 self-center">
              <Share />
            </div>
          </div>
        </header>

        <hr className="my-4 max-[768px]:hidden h-px bg-gray-200 border-0 "></hr>

        <div className="max-[768px]:hidden my-7">
          <ApplyNowButton />
        </div>

        {/* mobile version of head part */}
        <div className="max-[768px]:my-7 md:hidden">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex flex-row mt-2">
            <p className="text-slate-500 self-center pr-4">{`Posted ${postedAgo} days ago`}</p>
            <div className="flex flex-col ml-auto">
              <p className="text-2xl font-bold order-1">{salaryInterval}</p>
              <p className="">Brutto, per year</p>
            </div>
          </div>
        </div>

        {/* pc version of head part */}
        <div className="max-[768px]:hidden">
          <div className="flex flex-row">
            <h1 className="text-2xl font-bold w-7/12 pr-4">{title}</h1>
            <div className="flex flex-col w-fit ml-auto">
              <p className="text-2xl font-bold">{salaryInterval}</p>
              <p className="">Brutto, per year</p>
            </div>
          </div>
          <p className="text-slate-500 mt-4">{`Posted ${postedAgo} days ago`}</p>
        </div>

        <div>
          <p className="mt-7">{descriptionPart}</p>
          <h2 className="font-bold mt-10 mb-4">Responsopilities</h2>
          <p>{responsopilitiesPart}</p>
          <h2 className="font-bold mt-10 mb-4">Compensation & Benefits</h2>
          <p>Our physicians enjoy a wide range of benefits, including:</p>
          <ul className="list-disc marker:text-gray-500 max-[768px]:list-inside">
            {benefitSplit.map((resp) => (
              <li key={Math.random()} className="list-square ">
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-start mt-7 md:mt-10">
          <ApplyNowButton />
        </div>

        <div className="flex flex-col mt-12">
          <div className="md:order-1">
            <h1 className="font-bold text-2xl">Attached images</h1>
            <hr className="my-4 h-px bg-gray-200 border-0 "></hr>
            <div className="flex flex-row overflow-x-scroll md:overflow-x-hidden md:flex-wrap">
              {pictures.map((pic) => (
                <img
                  key={Math.random()}
                  src={pic}
                  className="mr-3 w-max w-auto h-48 mb-3 rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h1 className="font-bold text-2xl">Additional info</h1>
            <hr className="my-4 h-px bg-gray-200 border-0 "></hr>
            <h2 className="mb-3">Employment type</h2>
            <div className="flex flex-row overflow-x-scroll md:overflow-x-hidden md:flex-wrap text-center">
              {employment_type.map((type) => (
                <InfoElement
                  key={type + Math.random()}
                  backColor={"bg-blue-200"}
                  textColor={"text-blue-600"}
                  borderColor={"border-blue-600"}
                  text={type}
                />
              ))}
            </div>

            <h2 className="mb-3">Benefits</h2>
            <div className="flex flex-row overflow-x-scroll md:overflow-x-hidden md:flex-wrap text-center">
              {benefits.map((benefit) => (
                <InfoElement
                  key={benefit + Math.random()}
                  backColor={"bg-yellow-100"}
                  textColor={"text-yellow-600"}
                  borderColor={"border-yellow-600"}
                  text={benefit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-10 mb-5">
        <h1 className="font-bold text-2xl md:hidden">Contacts</h1>
        <hr className="my-4 h-px bg-gray-200 border-0 md:hidden"></hr>
        <Contacts
          address={address}
          email={email}
          location={location}
          name={name}
          phone={phone}
        />
      </div>
    </section>
  );
};

export default JobInfo;
