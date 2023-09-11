"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import BackImage from "@/assets/image/presales/back.png";
import AvatarImage from "@/assets/image/presales/avatar.png";

const PresalesDetails = () => {
  return (
    <div className="min-h-[1340px] flex flex-row gap-[30px]">
      <div className="flex-auto w-[892px]">
        <div className="bg-[#1B1B1B] rounded-[16px] relative">
          <Image src={BackImage} alt="back" />
          <Image
            src={AvatarImage}
            alt="avatar"
            className="absolute top-[147px] left-[60px] w-auto h-auto"
          />

          <div></div>
        </div>
      </div>

      <div className="flex-auto w-[631px]"></div>
    </div>
  );
};

export default PresalesDetails;
