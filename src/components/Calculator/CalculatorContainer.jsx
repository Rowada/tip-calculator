// @ts-nocheck
import React from "react";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import { Inputs } from "./Inputs";
import { ResultDisplay } from "./ResultDisplay";
import { TipPercentageInput } from "./TipPercentageInput";
import { useState } from "react";

export const CalculatorContainer = () => {
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [billError, setBillError] = useState("");
  const [numberPeopleError, setNumberPeopleError] = useState("");

  const handleBillAmountChange = (amount) => {
    setBillAmount(amount);
    setBillError("");
  };

  const handleNumberOfPeopleChange = (number) => {
    setNumberOfPeople(number);
    setNumberPeopleError("");
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
  };

  const calculateTip = () => {
    if (billAmount === "") {
      setBillError("Can't be zero");
    }

    if (isNaN(billAmount)) {
      setBillError("Can't be letters");
    }
    if (isNaN(numberOfPeople)) {
      setNumberPeopleError("Can't be letters");
    }

    if (numberOfPeople === "") {
      setNumberPeopleError("Can't be zero");
    }

    if (!isNaN(billAmount) && !isNaN(numberOfPeople) && tipPercentage) {
      const bill = parseFloat(billAmount);
      console.log(tipPercentage);
      const tipPercentageDecimal = tipPercentage / 100;
      const tip = bill * tipPercentageDecimal;
      const total = bill + tip;
      const tipTotalPerPerson = tip / numberOfPeople;
      const totalPerPersonValue = total / numberOfPeople;

      setTipAmount(tipTotalPerPerson);
      setTotalPerPerson(totalPerPersonValue);
    } else {
      setTipAmount(0);
      setTotalPerPerson(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTip();
  };

  return (
    <div className="bg-containerBackground rounded-xl flex items-center justify-center md:justify-evenly flex-wrap py-6 px-6 md:h-96">
      <div className="w-full md:w-1/2 md:pr-5">
        <form onSubmit={handleSubmit}>
          <Inputs
            id="billAmount"
            label="Bill"
            icon={dollarIcon}
            value={billAmount}
            onChange={handleBillAmountChange}
            error={billError}
          />
          <TipPercentageInput
            onTipPercentageChange={handleTipPercentageChange}
          />

          <Inputs
            id="numberOfPeople"
            label="Number Of People"
            icon={personIcon}
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            error={numberPeopleError}
          />

          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <ResultDisplay tipAmount={tipAmount} totalPerPerson={totalPerPerson} />
      </div>
    </div>
  );
};
