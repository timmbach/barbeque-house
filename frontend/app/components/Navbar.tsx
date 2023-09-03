import React from "react";
import Link from "next/link";
import Image from "next/image";
import BbqLogo from "../../public/assets/logo/barbeque_house.png";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <Image src={BbqLogo} width={80} height={80} alt="Barbeque House Logo" />

        <UserProfile />
      </div>
      <div className="flex justify-center">
        <nav>
          <ul className="flex">
            <li>
              <Link href="/">Today's Menu</Link>
            </li>
            <li>
              <Link href="/order-history">Order History</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
