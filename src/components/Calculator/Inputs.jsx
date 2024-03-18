// @ts-nocheck
import React from "react";
import { useState } from "react";

export const Inputs = ({ id, label, value, onChange, icon, error }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <label className="block mb-1 text-text text-sm" htmlFor={id}>
        {label}
      </label>
      {error && (
        <span className="text-text2 text-sm mb-1 absolute top-0 right-1">
          {error}
        </span>
      )}{" "}
      {/* Affichage de l'erreur */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img className="w-2 h-auto" src={icon} alt="icon-dollar" />
        </div>
        <input
          className="bg-inputBackground rounded-md text-right py-2 px-3 ps-10 block w-full focus:outline-none focus:outline-1 focus:outline-primary"
          type="text"
          id={id}
          value={value}
          placeholder="0"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
