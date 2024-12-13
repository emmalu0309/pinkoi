import Img1 from "../img/Brand1.png";
import Img2 from "../img/Brand2.png";
import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { RiFolderUserFill } from "react-icons/ri";

const Brand = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center">
        <div className="mr-2 text-xl">關於品牌</div>
        <div className="text-xs mt-1 text-[#2e90b7]">逛設計品牌</div>
      </div>
      <div className="border-1 ">
        <div>
          <img src={Img1} alt="Brand1" />
        </div>
        <div className="border flex">
          <div>
            <img src={Img2} alt="logo" className="w-20 m-6" />
          </div>
          <div>
            <div className="mt-6">supportingrole</div>
            <div className="flex mt-4 items-center">
              <GrLocation className="text-sm " />
              <div className="text-xs p-1 text-gray-500">台灣</div>
              <FaStar className="text-sm text-[#f16c5d]" />
              <FaStar className="text-sm text-[#f16c5d]" />
              <FaStar className="text-sm text-[#f16c5d]" />
              <FaStar className="text-sm text-[#f16c5d]" />
              <FaStar className="text-sm text-[#f16c5d]" />

              <div className="p-2 text-sm text-gray-600">4.9</div>
              <div className="p-1 text-sm text-gray-400">(2,742)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="bg-[#11567b] text-white w-32 flex items-center mt-3 rounded-md justify-center">
          <IoIosAdd className="text-xl"/>
          <span className="pl-1 text-sm">加入關注</span>
        </button>
        <button className="text-gray-800 p-2 w-32 flex items-center mt-3 rounded-md justify-center w-36 border border-gray-500 mx-3">
          <RiFolderUserFill />
          <span className="pl-2 text-sm">聯絡設計師</span>
        </button>
      </div>
      <div className="text-gray-600 mt-4">
        <div className="py-1">上次上線 ： 一天內</div>
        <div className="py-1">回應率 ： 85%</div>
        <div className="py-1">一日內 ： 一日內</div>
        <div className="py-1">平均出貨速度 ： 一週內</div>
      </div>
      <hr className="my-4 border-1 border-gray-300"/>
      <div className="text-gray-600 mt-4">
        <div className="py-1">營業人名稱 ： 鳳翔精品服飾有限公司</div>
        <div className="py-1">統一編號 ：50757542</div>
      </div>
    </div>
  );
};

export default Brand;
