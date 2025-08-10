/**
 * @deprecated
 * 單一客戶案例的顯示元件。
 * 注意：這個元件目前使用絕對定位，是舊版設計的殘留，可能需要重構。
 */
"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type ClientStoryComponentType = {
  className?: string;

  /** Style props */
  groupBoxLeft?: CSSProperties["left"];
};

const ClientStoryComponent: NextPage<ClientStoryComponentType> = ({
  className = "",
  groupBoxLeft,
}) => {
  const groupBoxStyle: CSSProperties = useMemo(() => {
    return {
      left: groupBoxLeft,
    };
  }, [groupBoxLeft]);

  return (
    <Box
      className={`absolute top-[0rem] left-[0rem] w-[30.911rem] h-[19.222rem] text-center text-[2rem] text-[#fff] font-[Montserrat] ${className}`}
      style={groupBoxStyle}
    >
      <Box className="absolute top-[0rem] left-[0rem] w-[30.911rem] h-[19.222rem]">
        <Box className="absolute top-[0rem] left-[0rem] bg-[#7b8eb5] w-[30.911rem] h-[19.222rem]" />
        <div className="absolute top-[7.167rem] left-[5.722rem] font-semibold inline-block w-[19.444rem] h-[4.889rem]">
          <Typography className="!m-0" variant="inherit">
            Client
          </Typography>
          <Typography className="!m-0" variant="inherit">
            Story
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ClientStoryComponent;
