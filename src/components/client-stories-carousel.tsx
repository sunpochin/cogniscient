'use client';

import Slider from 'react-slick';
import ClientStoryComponent from './client-story-component';
import type { FC } from 'react';

/**
 * 客戶案例輪播元件
 * 使用 react-slick 來展示多個 ClientStoryComponent。
 */
const ClientStoriesCarousel: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 一次顯示一張
    slidesToScroll: 1, // 一次滾動一張
    arrows: true, // 顯示左右箭頭
    adaptiveHeight: true, // 高度自適應
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {/* react-slick 要求每個 slide 都是一個直接子元素，通常是 div */}
        <div>
          <ClientStoryComponent />
        </div>
        <div>
          <ClientStoryComponent />
        </div>
        <div>
          <ClientStoryComponent />
        </div>
        <div>
          <ClientStoryComponent />
        </div>
      </Slider>
    </div>
  );
};

export default ClientStoriesCarousel;
