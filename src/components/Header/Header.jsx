import React from "react";

import appLogo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <img className="w-20 h-auto" src={appLogo} alt="logo-app" />
    </div>
  );
};
