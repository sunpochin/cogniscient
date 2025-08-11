import type { FC } from "react";
import { Box, Typography } from "@mui/material";

export type ClientStoryComponentType = {
  className?: string;
};

/**
 * 單一客戶案例的顯示元件。
 * 採用 Flexbox 佈局，使其成為一個獨立且響應式的區塊。
 */
const ClientStoryComponent: FC<ClientStoryComponentType> = ({
  className = "",
}) => {
  return (
    <Box
      className={`bg-[#7b8eb5] w-[30.911rem] h-[19.222rem] flex flex-col justify-center items-center text-center text-white ${className}`}
    >
      <div className="font-semibold text-[2rem] font-[Montserrat]">
        <Typography className="!m-0" variant="inherit">
          Client
        </Typography>
        <Typography className="!m-0" variant="inherit">
          Story
        </Typography>
      </div>
    </Box>
  );
};

export default ClientStoryComponent;

