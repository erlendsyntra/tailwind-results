import { useState, useEffect } from "react";
import IconReaction from "./IconReaction";

const SummaryItem = ({ liColor, text, textColor, score }) => {
  return (
    <li
      className={
        liColor ? `${liColor} rounded-xl flex md:p-3` : `rounded-xl flex md:p-3`
      }
    >
      <IconReaction />
      <p
        className={textColor ? `${textColor} ml-3 font-bold` : `ml-3 font-bold`}
      >
        {text}
      </p>
      <p className="ml-auto text-pro-dark-grayblue">
        {score} <span className="text-pro-dark-grayblue/70">/ 100</span>
      </p>
    </li>
  );
};
export default SummaryItem;
