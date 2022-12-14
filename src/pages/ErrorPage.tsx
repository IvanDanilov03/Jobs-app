import React from "react";

type ErrorPageProps = {
  httpError: string;
};

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { httpError } = props;
  return (
    <section className="flex flex-col items-center">
      <div className="w-screen h-20 bg-blue-900" />
      <h1 className="font-bold text-4xl mt-4">Ooops!</h1>
      <p className="font-medium text-lg mt-2">{httpError}</p>
      <div className="mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.998" height="23">
          <path
            fill="#E2574C"
            d="M25.913 8.143c-.438-4.563-4.237-8.143-8.914-8.143-3.619 0-6.718 2.148-8.146 5.23-.43-.136-.878-.23-1.353-.23-2.485 0-4.5 2.016-4.5 4.5 0 .494.099.961.246 1.404-1.933 1.127-3.246 3.197-3.246 5.595 0 3.59 2.91 6.5 6.5 6.5v.001h17.999v-.001c4.143 0 7.499-3.357 7.499-7.5 0-3.657-2.62-6.694-6.085-7.356zm-5.303 9.466c-.472.473-1.236.473-1.708 0l-2.425-2.424-2.394 2.395c-.471.47-1.232.47-1.703 0-.47-.471-.47-1.232 0-1.703l2.394-2.394-2.424-2.424c-.472-.473-.472-1.237 0-1.709.472-.473 1.236-.473 1.708 0l2.424 2.425 2.426-2.426c.471-.471 1.232-.471 1.703 0s.471 1.233 0 1.703l-2.426 2.426 2.425 2.424c.473.471.473 1.237 0 1.707z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ErrorPage;
