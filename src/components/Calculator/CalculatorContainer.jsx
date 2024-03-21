// @ts-nocheck
import { useRef } from "react";
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

  const tipPercentageRef = useRef(null);

  const handleReset = () => {
    setBillAmount("");
    setNumberOfPeople("");
    setTipPercentage(0);
    setTipAmount(0);
    setTotalPerPerson(0);
    setBillError("");
    setNumberPeopleError("");

    if (tipPercentageRef.current) tipPercentageRef.current.handleReset();
  };

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
    if (
      billAmount === "" ||
      isNaN(billAmount) ||
      parseFloat(billAmount) === 0
    ) {
      setBillError(
        billAmount === ""
          ? "Can't be empty"
          : isNaN(billAmount)
          ? "Can't be letters"
          : "Can't be zero"
      );
      return;
    }

    if (
      numberOfPeople === "" ||
      isNaN(numberOfPeople) ||
      parseFloat(numberOfPeople) === 0
    ) {
      setNumberPeopleError(
        numberOfPeople === ""
          ? "Can't be empty"
          : isNaN(numberOfPeople)
          ? "Can't be letters"
          : "Can't be zero"
      );
      return;
    }

    const bill = parseFloat(billAmount);
    const tipPercentageDecimal = tipPercentage / 100;
    const tip = bill * tipPercentageDecimal;
    const total = bill + tip;
    const tipTotalPerPerson = tip / numberOfPeople;
    const totalPerPersonValue = total / numberOfPeople;

    setTipAmount(tipTotalPerPerson);
    setTotalPerPerson(totalPerPersonValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTip();
  };

  return (
    <div className="bg-containerBackground rounded-3xl flex items-center justify-center md:justify-evenly flex-wrap py-6 px-6 md:w-156 md:h-96">
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
            ref={tipPercentageRef}
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
        <ResultDisplay
          tipAmount={tipAmount}
          totalPerPerson={totalPerPerson}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
};
