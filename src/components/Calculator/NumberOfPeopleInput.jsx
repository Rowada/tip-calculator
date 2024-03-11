import React from "react";
import personIcon from "../../assets/images/icon-person.svg";

export const NumberOfPeopleInput = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="block mb-1 text-text text-sm" htmlFor="numberOfPeople">
        Number Of People
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img className="w-2 h-auto" src={personIcon} alt="person-icon" />
        </div>
        <input
          className="bg-inputBackground rounded-md text-right py-2 px-3 ps-10 block w-full"
          type="text"
          id="numberOfPeople"
          placeholder="0"
        />
      </div>
    </div>
  );
};
