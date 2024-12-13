const ShippingInfo = () => {
  return (
    <div>
      <div className="text-xl">運費與其他資訊</div>
      <hr className="my-4 border-gray-300" />
      <div className="flex">
        <div className="mr-28">商品運費</div>
        <div className="w-full">
          <div>從台灣(臺北市)寄出，寄往：</div>
          <div className=" relative w-[60%] my-3 text-sm">
            <select className="block w-full px-4 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none rounded-none">
              <option>台灣</option>
              <option>美國</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              ▼
            </div>
          </div>
          <div className=" relative w-[60%] my-3 text-sm">
            <select className="block w-full px-4 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none rounded-none">
              <option>台北</option>
              <option>台中</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              ▼
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[40%]">
                <div>運送方式</div>
                <div className="pt-4">7-11取貨</div>
              </div>
              <div className="w-[30%]">
                <div>首件運費</div>
                <div className="pt-4">NT$ 60</div>
              </div>
              <div className="w-[30%]">
                <div>續件加收</div>
                <div className="pt-4">NT$ 0</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 pt-1">現在下單預估 12/7~12/10 到貨 | 提供追蹤</div>
            <div className="text-sm text-gray-500">滿 NT$ 1,000 免運費</div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div>
            <div className="flex">
              <div className="w-[40%]">
                <div>7-11取貨付款</div>
              </div>
              <div className="w-[30%]">
                <div>NT$ 80</div>
              </div>
              <div className="w-[30%]">
                <div >NT$ 0</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 pt-1">現在下單預估 12/7~12/10 到貨 | 提供追蹤</div>
            <div className="text-sm text-gray-500">滿 NT$ 1,000 免運費</div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div>
            <div className="flex">
              <div className="w-[40%]">
                <div>全家取貨付款</div>
              </div>
              <div className="w-[30%]">
                <div>NT$ 80</div>
              </div>
              <div className="w-[30%]">
                <div >NT$ 0</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 pt-1">現在下單預估 12/7~12/10 到貨 | 提供追蹤</div>
            <div className="text-sm text-gray-500">滿 NT$ 1,000 免運費</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
