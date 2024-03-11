import React from "react";
import { BillInput } from "./BillInput";
import { TipPercentageInput } from "./TipPercentageInput";
import { NumberOfPeopleInput } from "./NumberOfPeopleInput";
import { ResultDisplay } from "./ResultDisplay";

export const CalculatorContainer = () => {
  return (
    <div className="bg-containerBackground rounded-xl flex items-center justify-evenly flex-wrap py-2 px-2 w-[1200px] h-[600px] ">
      <div>
        <BillInput />
        <TipPercentageInput />
        <NumberOfPeopleInput />
      </div>

      <div>
        <ResultDisplay />
      </div>
    </div>
  );
};
