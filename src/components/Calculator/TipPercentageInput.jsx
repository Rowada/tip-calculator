import React from "react";

export const TipPercentageInput = () => {
  return (
    <div>
      <label className="text-text mb-1 text-sm block" htmlFor="tipPercentage">
        Select Tip %
      </label>

      <div className="flex flex-wrap max-w-80">
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button
            key={percentage}
            className="block bg-accent text-white py-1 px-6 mr-2 mb-2 w-20 rounded active:bg-primary active:text-accent"
          >
            {percentage}%
          </button>
        ))}

        <div>
          <input
            className=" text-center py-1 mr-2 mb-2 w-20 rounded bg-inputBackground block placeholder-text"
            type="text"
            placeholder="Custom"
          />
        </div>
      </div>
    </div>
  );
};
