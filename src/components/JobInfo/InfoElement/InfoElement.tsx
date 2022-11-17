import React from "react";

type InfoElementProps = {
  backColor: string;
  textColor: string;
  borderColor: string;
  text: string;
};

const InfoElement: React.FC<InfoElementProps> = (props) => {
  const { backColor, textColor, borderColor, text } = props;
  return (
    <div
      className={`font-bold text-base mr-3 mb-3 border-2 rounded-lg opacity-80 py-5 w-32 md:w-56 ${backColor} ${textColor} ${borderColor}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default InfoElement;
