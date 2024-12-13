import  { useState, useEffect } from "react";
import Img1 from "../img/IMG1.png";
import Img2 from "../img/IMG2.png";
import Img3 from "../img/IMG3.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
    const images = [Img1,Img2,Img3,];
    
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // 自動播放效果
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 3 秒切換一次
  
      return () => clearInterval(interval); // 清理定時器
    }, [images.length]);
  
    // 切換到上一張
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    // 切換到下一張
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="relative h-[700px] overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
            <img key={index} src={img} alt={`Slide ${index + 1}`} className="object-cover" />
              </div>
          ))}
        </div>
        {/* 左右切換按鈕 */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
        >
         <IoIosArrowForward />
        </button>
        {/* 底部指示點 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    );
  };

export default Carousel