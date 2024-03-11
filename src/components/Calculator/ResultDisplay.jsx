import React from "react";

export const ResultDisplay = () => {
  return (
    <div className="bg-accent rounded-xl py-5 px-5 w-96">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-white">Tip Amount</p>
          <span className="text-text2 text-sm">/ person</span>
        </div>

        <h3 className="text-primary text-2xl">$0.00</h3>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-white">Total</p>
          <span className="text-text2 text-sm">/ person</span>
        </div>

        <h3 className="text-primary text-2xl">$0.00</h3>
      </div>

      <button className="w-full block bg-primary text-accent uppercase rounded">
        reset
      </button>
    </div>
  );
};
