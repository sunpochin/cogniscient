'use client';

import Image from 'next/image';
import type { FC } from 'react';

const imageTops = ['0rem', '77.389rem', '154.778rem', '232.167rem'];

/**
 * 頁面右側的滾動裝飾圖案。
 * 使用 fixed 和 right-0 來確保它始終緊貼在視窗的右側。
 */
const SideDecoration: FC = () => {
  return (
    <>
      {imageTops.map((top) => (
        <Image
          key={top}
          className={`fixed top-[${top}] right-0 w-[34.333rem] h-[77.389rem] overflow-hidden z-10`}
          width={618}
          height={1393}
          sizes="100vw"
          alt="Side Decoration"
          src="/layer-2.svg"
        />
      ))}
    </>
  );
};

export default SideDecoration;
