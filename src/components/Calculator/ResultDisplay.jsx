import React from "react";

export const ResultDisplay = () => {
  return (
    <div className="bg-accent rounded-xl py-5 px-5 md:py-10 md:px-8 h-full flex flex-col justify-between">
      <div>
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
      </div>
      <button className="w-full block bg-primary text-accent uppercase rounded py-2">
        reset
      </button>
    </div>
  );
};
