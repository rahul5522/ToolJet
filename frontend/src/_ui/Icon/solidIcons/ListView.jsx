import React from 'react';

const ListView = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 6.03906C2.5335 6.03906 1.75 6.82256 1.75 7.78906V9.78906C1.75 10.7556 2.5335 11.5391 3.5 11.5391H5.5C6.4665 11.5391 7.25 10.7556 7.25 9.78906V7.78906C7.25 6.82256 6.4665 6.03906 5.5 6.03906H3.5ZM3.5 14.0391C2.5335 14.0391 1.75 14.8226 1.75 15.7891V17.7891C1.75 18.7556 2.5335 19.5391 3.5 19.5391H5.5C6.4665 19.5391 7.25 18.7556 7.25 17.7891V15.7891C7.25 14.8226 6.4665 14.0391 5.5 14.0391H3.5ZM9.75 6.78906C9.75 6.37485 10.0858 6.03906 10.5 6.03906H16.5C16.9142 6.03906 17.25 6.37485 17.25 6.78906C17.25 7.20328 16.9142 7.53906 16.5 7.53906H10.5C10.0858 7.53906 9.75 7.20328 9.75 6.78906ZM10.5 14.0391C10.0858 14.0391 9.75 14.3748 9.75 14.7891C9.75 15.2033 10.0858 15.5391 10.5 15.5391H16.5C16.9142 15.5391 17.25 15.2033 17.25 14.7891C17.25 14.3748 16.9142 14.0391 16.5 14.0391H10.5ZM9.75 10.7891C9.75 10.3748 10.0858 10.0391 10.5 10.0391H22.5C22.9142 10.0391 23.25 10.3748 23.25 10.7891C23.25 11.2033 22.9142 11.5391 22.5 11.5391H10.5C10.0858 11.5391 9.75 11.2033 9.75 10.7891ZM10.5 18.0391C10.0858 18.0391 9.75 18.3748 9.75 18.7891C9.75 19.2033 10.0858 19.5391 10.5 19.5391H22.5C22.9142 19.5391 23.25 19.2033 23.25 18.7891C23.25 18.3748 22.9142 18.0391 22.5 18.0391H10.5Z"
      fill={fill}
    />
  </svg>
);

export default ListView;
