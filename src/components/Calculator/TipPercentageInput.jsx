import React from "react";
import { useState } from "react";

export const TipPercentageInput = ({ onTipPercentageChange }) => {
  const [customPercentage, setCustomPercentage] = useState("");

  const handleTipPercentageClick = (percentage) => {
    onTipPercentageChange(percentage);
    setCustomPercentage("");
  };

  const handleCustomPercentageChange = (e) => {
    const value = e.target.value;
    setCustomPercentage(value);

    if (!isNaN(value)) {
      onTipPercentageChange(parseFloat(value));
    }
  };
  return (
    <div>
      <label className="text-text mb-1 text-sm block" htmlFor="tipPercentage">
        Select Tip %
      </label>

      <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3">
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button
            key={percentage}
            className="block bg-accent text-white py-2 px-6 rounded active:bg-primary active:text-accent focus:outline-none focus:outline-1 focus:outline-primary hover:bg-hover hover:text-accent"
            onClick={() => handleTipPercentageClick(percentage)}
          >
            {percentage}%
          </button>
        ))}

        <div>
          <input
            className=" text-right text-lg py-2 px-6 w-full rounded bg-inputBackground block placeholder-text focus:outline-none focus:outline-1 focus:outline-primary"
            type="text"
            placeholder="Custom"
            value={customPercentage}
            onChange={handleCustomPercentageChange}
          />
        </div>
      </div>
    </div>
  );
};
