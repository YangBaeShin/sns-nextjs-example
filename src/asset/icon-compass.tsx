import React from "react";

const CompassIcon: React.FC = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <polygon
      fill="none"
      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
    <polygon
      fillRule="evenodd"
      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
    ></polygon>
    <circle
      cx="12.001"
      cy="12.005"
      fill="none"
      r="10.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></circle>
  </svg>
);

export default CompassIcon;
