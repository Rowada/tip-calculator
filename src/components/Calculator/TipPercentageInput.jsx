import React from "react";

export const TipPercentageInput = () => {
  return (
    <div>
      <label className="text-text mb-1 text-sm block" htmlFor="tipPercentage">
        Select Tip %
      </label>

      <div className="flex flex-wrap mb-6 gap-3">
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button
            key={percentage}
            className="block bg-accent text-white py-1 px-6 w-36 md:w-20 rounded active:bg-primary active:text-accent"
          >
            {percentage}%
          </button>
        ))}

        <div className="w-36 md:w-20">
          <input
            className=" text-right text-md py-1 px-6 w-full rounded bg-inputBackground block placeholder-text"
            type="text"
            placeholder="Custom"
          />
        </div>
      </div>
    </div>
  );
};
