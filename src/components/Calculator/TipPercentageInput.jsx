// @ts-nocheck
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";

export const TipPercentageInput = forwardRef(
  ({ onTipPercentageChange }, ref) => {
    const [selectedPercentage, setSelectedPercentage] = useState("");
    const [customPercentage, setCustomPercentage] = useState("");

    const handleReset = () => {
      setSelectedPercentage("");
      setCustomPercentage("");
    };

    useImperativeHandle(ref, () => ({
      handleReset,
    }));

    const handlePercentageChange = (percentage) => {
      setCustomPercentage("");
      setSelectedPercentage(percentage);
      onTipPercentageChange(percentage);
    };

    const handleCustomPercentageChange = (e) => {
      const value = e.target.value;
      setCustomPercentage(value);

      const parsedPercentage = parseFloat(value);

      if (!isNaN(parsedPercentage)) {
        onTipPercentageChange(parsedPercentage);
      } else {
        onTipPercentageChange(0);
      }
    };

    return (
      <div>
        <label className="text-text mb-1 text-sm block" htmlFor="tipPercentage">
          Select Tip %
        </label>

        <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <button
              type="button"
              key={percentage}
              className={`block bg-accent text-white py-2 px-6 rounded focus:outline-none focus:outline-1 focus:outline-primary hover:bg-hover hover:text-accent ${
                selectedPercentage === percentage && !customPercentage
                  ? "text-accent bg-primary"
                  : ""
              }`}
              onClick={() => handlePercentageChange(percentage)}
            >
              {percentage}%
            </button>
          ))}

          <div>
            <input
              className=" text-right text-lg py-2 px-6 w-full rounded bg-inputBackground block placeholder-text focus:outline-none focus:outline-1 focus:outline-primary"
              type="text"
              placeholder="Custom"
              onChange={handleCustomPercentageChange}
              value={customPercentage}
            />
          </div>
        </div>
      </div>
    );
  }
);

TipPercentageInput.displayName = "TipPercentageInput";
