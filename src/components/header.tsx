import React from "react";
import UPLOGO from "../images/logo2.svg";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchInput } from "./search-input";

export const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={UPLOGO} className="w-10" alt="UP Incubator" />
        </Link>
        UP 실험실
        <span className="text-xs">
          <Link to="/my">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </Link>
        </span>
      </div>
    </header>
  );
};
