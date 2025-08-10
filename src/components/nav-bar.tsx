"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";

export type NavBarType = {
  className?: string;
};

const NavBar: NextPage<NavBarType> = ({ className = "" }) => {
  const onMembersTextClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 3" to the project
  }, []);

  const onArticlesTextClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 5" to the project
  }, []);

  return (
    <Box
      className={`absolute top-[3rem] left-[54.444rem] w-[34.556rem] h-[1.333rem] text-left text-[1.111rem] text-[#000] font-[Montserrat] ${className}`}
    >
      <div className="absolute top-[0%] left-[81.67%] font-semibold">
        Contact Us
      </div>
      <div
        className="absolute top-[0%] left-[39.87%] font-semibold cursor-pointer"
        onClick={onMembersTextClick}
      >
        Members
      </div>
      <div
        className="absolute top-[0%] left-[60.93%] font-semibold cursor-pointer"
        onClick={onArticlesTextClick}
      >
        Articles
      </div>
      <div className="absolute top-[0%] left-[0%] font-semibold">About Us</div>
      <div className="absolute top-[0%] left-[20.74%] font-semibold">
        Services
      </div>
    </Box>
  );
};

export default NavBar;
