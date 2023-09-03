import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center border p-1 px-2 rounded-full w-10 h-10">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="flex justify-center w-10 h-10 items-center border rounded-full">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
