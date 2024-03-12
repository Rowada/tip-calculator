import React from "react";
import { BillInput } from "./BillInput";
import { TipPercentageInput } from "./TipPercentageInput";
import { NumberOfPeopleInput } from "./NumberOfPeopleInput";
import { ResultDisplay } from "./ResultDisplay";

export const CalculatorContainer = () => {
  return (
    <div className="bg-containerBackground rounded-xl flex items-center justify-center md:justify-evenly flex-wrap py-6 px-6 md:h-96">
      <div className="w-full md:w-1/2 md:pr-5">
        <BillInput />
        <TipPercentageInput />
        <NumberOfPeopleInput />
      </div>

      <div className="w-full md:w-1/2 h-full">
        <ResultDisplay />
      </div>
    </div>
  );
};
