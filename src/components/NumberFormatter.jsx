import React from "react";

const NumberFormatter = ({ number }) => {
  const formattedNumber = number.toLocaleString('en-US').replace(/,/g, ' ');

  return (
    <div>
      <p>{formattedNumber}</p>
    </div>
  );
};

export default NumberFormatter