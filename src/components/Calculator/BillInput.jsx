import React from "react";
import dollarIcon from "../../assets/images/icon-dollar.svg";

export const BillInput = () => {
  return (
    <div>
      <label className="block mb-1 text-text text-sm" htmlFor="billAmount">
        Bill
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img className="w-2 h-auto" src={dollarIcon} alt="icon-dollar" />
        </div>
        <input
          className="bg-inputBackground rounded-md text-right py-2 px-3 ps-10 block w-full"
          type="text"
          id="billAmount"
          placeholder="0"
        />
      </div>
    </div>
  );
};
