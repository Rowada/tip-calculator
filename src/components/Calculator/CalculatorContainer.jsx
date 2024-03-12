import React from "react";
import { BillInput } from "./BillInput";
import { TipPercentageInput } from "./TipPercentageInput";
import { NumberOfPeopleInput } from "./NumberOfPeopleInput";
import { ResultDisplay } from "./ResultDisplay";

export const CalculatorContainer = () => {
  return (
    <div className="bg-containerBackground rounded-xl flex items-center justify-center md:justify-evenly flex-wrap py-2 px-2">
      <div className="w-full md:w-auto">
        <BillInput />
        <TipPercentageInput />
        <NumberOfPeopleInput />
      </div>

      <div className="w-full md:w-auto">
        <ResultDisplay />
      </div>
    </div>
  );
};
