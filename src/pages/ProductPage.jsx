import Carousel from "../components/Carousel";
import { IoIosArrowForward } from "react-icons/io";
import ProductCart from "../components/ProductCart";
import Brand from "../components/Brand";
import ProductDetails from "../components/ProductDetails";
import ShippingInfo from "../components/ShippingInfo";

const ProductPage = () => {
  return (
    <div className="w-[90%] mx-auto mt-[4%] ">
      <div className=" flex py-1 items-center ">
        <div className="p-3 text-[#2e90b7] text-sm">包包提袋</div>
        <IoIosArrowForward className="text-[#515156]" />
        <div className="p-3 text-[#2e90b7] text-sm">日常包款</div>
        <IoIosArrowForward className="text-[#515156]" />
        <div className="p-3 text-[#2e90b7] text-sm">
          側背包/斜背包 其他人造纖維
        </div>
      </div>
      <div className="w-[100%] flex">
        <div className="w-[60%]">
          <Carousel />
          <ProductDetails />
          <ShippingInfo />
        </div>
        <div className="w-[50%]">
          <ProductCart />
          <Brand />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
