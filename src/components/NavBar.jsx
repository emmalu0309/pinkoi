import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaRegBell } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";


const NavBar = () => {
  const categoryTitle = "px-4 py-3 text-gray-800 relative group text-sm";
  const categoryHoverLine =
    "absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300";
  return (
    <div className=" w-full mx-auto m-6">
      <div className="flex items-center mb-6  w-[90%] mx-auto">
        <div className="text-5xl text-[#064162]" style={{ fontFamily: "'DynaPuff', cursive" }}>Pinkoi</div>
        <div className=" w-[40%] ml-10">
          <div className="flex items-stretch rounded-lg m-2 w-[100%]  items-center">
            <input
              type="text"
              className=" px-4 py-2 text-gray-700 focus:outline-none rounded-l-lg border border-gray-300 w-[85%]"
              placeholder="搜尋好設計、體驗好活動"
            />
            <button className="px-6 bg-[#11567b] text-white hover:bg-[#064162] focus:outline-none rounded-r-lg w-[16%] text-2xl">
              <IoSearch />
            </button>
          </div>
          <div className="flex items-center justify-between mx-4 w-[80%]">
            <a className="text-xs">蛇年春聯</a>
            <a className="text-xs">信用卡優惠</a>
            <a className="text-xs">醫生包</a>
            <a className="text-xs">MBIT送禮攻略</a>
            <a className="text-xs">聖誕花圈</a>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-6">
          <a className="hover:text-[#2e90b7] text-sm">我想在Pinkoi上販售</a>
          <Link to="login"><FaRegUser className="text-2xl hover:text-[#2e90b7]" /></Link>
          <FaRegHeart className="text-2xl hover:text-[#2e90b7]" />
          <TbMessage className="text-2xl hover:text-[#2e90b7]" />
          <FaRegBell className="text-2xl hover:text-[#2e90b7]" />
          <MdOutlineShoppingCart className="text-2xl hover:text-[#2e90b7]" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className=" w-full border-b">
          <nav className="flex items-center justify-between bg-white  w-[90%] mx-auto">
            {/* 主題企劃 */}
            <div className="relative group">
              <a href="#" className={categoryTitle}>
                主題企劃
                {/* 底線效果 */}
                <span className={categoryHoverLine}></span>
              </a>

              {/* 子選單 */}
              <div className="absolute left-0 top-8 hidden w-screen bg-white shadow-lg border-t group-hover:block z-10">
                <div className="flex">
                  {/* 左側分類 */}
                  <div className="w-1/4 bg-gray-100 border-r">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <Link to="productpage">文具用品</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#">包裝紙品</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#">裝飾膠帶</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="#">文具卡片</a>
                      </li>
                    </ul>
                  </div>

                  {/* 右側內容 */}
                  <div className="flex-1 p-4">
                    <h3 className="font-bold text-lg mb-2">熱門推薦</h3>
                    <ul>
                      <li className="py-1">
                        <a href="#" className="hover:text-red-500">
                          2025 手帳/年曆
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="hover:text-red-500">
                          手帳拼貼新選擇
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="hover:text-red-500">
                          2025 春聯/紅包推薦
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="hover:text-red-500">
                          客製書寫用筆/禮盒
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 其他選單 */}
            <a href="#" className={categoryTitle}>
              配件飾品
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              包包提袋
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              居家生活
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              文具卡片
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              衣著良品
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              品味美食
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              送禮指南
              <span className={categoryHoverLine}></span>
            </a>
            <a href="#" className={categoryTitle}>
              所有分類
              <span className={categoryHoverLine}></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
