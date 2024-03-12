import React from "react";

export const TipPercentageInput = () => {
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
          >
            {percentage}%
          </button>
        ))}

        <div>
          <input
            className=" text-right text-lg py-2 px-6 w-full rounded bg-inputBackground block placeholder-text focus:outline-none focus:outline-1 focus:outline-primary"
            type="text"
            placeholder="Custom"
          />
        </div>
      </div>
    </div>
  );
};
