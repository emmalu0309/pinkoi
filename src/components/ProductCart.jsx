import { FaStar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { BsQuestion } from "react-icons/bs";

const ProductCart = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[80%] mx-auto m-1">
        <div className="text-[30px]">
          supportingrole 解構設計中性簡約運動休閒肩側背包軍綠
        </div>
        <div className="flex my-3 items-center ">
          <FaStar className="text-[#ee847e]"/>
          <FaStar className="text-[#ee847e]"/>
          <FaStar className="text-[#ee847e]"/>
          <FaStar className="text-[#ee847e]"/>
          <FaStar className="text-[#ee847e]"/>
          <div className="px-2">5.0</div>
          <div className="text-[rgb(60,150,187)]">(26)</div>
        </div>
        <div className="flex">
          <div className="text-4xl mr-4 text-[#11567b]">NT$ 1,920</div>
          <div className="text-xl pt-3 line-through text-[#a8a8ab]">
            NT$ 2,180
          </div>
          <div></div>
        </div>
        <div className="flex my-3">
          <div className="flex rounded-sm border border-[#2e90b7] text-sm w-[30%]">
            <div className="bg-[#2e90b7] text-white p-1 rounded-l-xs w-10 ">
              免運
            </div>
            <div className=" p-1  text-[#2e90b7] flex flex-1  justify-center ">
              從台灣寄出
            </div>
          </div>
          <div className="flex ml-6 rounded-sm border border-[#ee847e] text-sm w-[40%]">
            <div className="bg-[#ee847e] text-white p-1 rounded-l-xs w-10 ">
              88折
            </div>
            <div className=" p-1  text-[#ee847e] flex flex-1  justify-center ">
              最多省下 NT$261
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div>數量</div>
          <div className=" relative w-32 my-1">
            <select className="block w-full px-4 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none rounded-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              ▼
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center w-[100%] bg-[#f16c5d] p-2 my-3 rounded-md text-white">
          <MdOutlineShoppingCart className="m-1" />
          <span>加入購物車</span>
        </button>
        <button className="flex justify-center items-center w-[100%] border border-gray-400 p-2 my-3 rounded-md">
          <IoIosHeartEmpty />
          <span>收藏商品</span>
        </button>
        <div>
          <div className="flex items-center text-sm">
            <GoGift className="mr-1 text-[rgb(17,86,123)]"/>
            <div className="mr-4">免費贈送電子賀卡，結帳完成後填寫</div> <div className="mr-1 text-[rgb(60,150,187)]">電子賀卡是什麼？</div>
          </div>
          <div className="flex items-center text-sm my-2">
            現在下單預估 12/6~12/10 到貨。
            <BsQuestion className="text-lg bg-[rgb(191,191,193)] rounded-full text-white"/>
          </div>
          <div className="text-sm ">設計館提供統一發票或免用統一發票收據</div>
        </div>
      </div>
      <hr className="m-5 w-[80%] mx-auto border-1 border-gray-300"/>
    </div>
  );
};

export default ProductCart;
