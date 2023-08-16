"use client";

import React, { useState } from "react";

import HeaderNavItem from "./NavItem";

//! import icons
import View from "@/assets/icons/view.svg";
import AllPresales from "@/assets/icons/all-presales.svg";
import Contributions from "@/assets/icons/contributions.svg";
import Favorites from "@/assets/icons/favorites.svg";
import Alarms from "@/assets/icons/alarms.svg";
import CreatedPresales from "@/assets/icons/created-presales.svg";

import Active_View from "@/assets/icons/active-view.svg";
import Active_AllPresales from "@/assets/icons/active-all-presales.svg";
import Active_Contributions from "@/assets/icons/active-contributions.svg";
import Active_Favorites from "@/assets/icons/active-favorites.svg";
import Active_Alarms from "@/assets/icons/active-alarms.svg";
import Active_CreatedPresales from "@/assets/icons/active-created-presales.svg";

const HeaderNav = () => {
  const [active, setActive] = useState(1);

  const navItem = [
    {
      text: "Quick View",
      icon: View,
      active_icon: Active_View,
      key: 1,
    },
    {
      text: "All Presales",
      icon: AllPresales,
      active_icon: Active_AllPresales,
      key: 2,
    },
    {
      text: "My Contributions",
      icon: Contributions,
      active_icon: Active_Contributions,
      key: 3,
    },
    {
      text: "My Favorites",
      icon: Favorites,
      active_icon: Active_Favorites,
      key: 4,
    },
    {
      text: "My Alarms",
      icon: Alarms,
      active_icon: Active_Alarms,
      key: 5,
    },
    {
      text: "My Created Presales",
      icon: CreatedPresales,
      active_icon: Active_CreatedPresales,
      key: 6,
    },
  ];
  return (
    <div className="flex gap-x-4 w-[1554px] h-[61px] rounded-[12px] bg-[#1B1B1B] px-7 py-3 items-center">
      {navItem.map((item) => (
        <HeaderNavItem
          icon={item.icon}
          active_icon={item.active_icon}
          text={item.text}
          active={active === item.key && true}
          key={item.key}
          index={item.key}
          onClick={(index) => setActive(index)}
        />
      ))}
    </div>
  );
};

export default HeaderNav;
