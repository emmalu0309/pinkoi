const ProductDetails = () => {
  const DetailsStyle = "py-2";
  const InfoStyleDiv = "my-2 text-gray-400 flex";
  const InfoStyleTitle = "w-[20%]";
  const InfoStyleSpan = "text-gray-800 px-10 w-[80%]";
  return (
    <div>
      <div className="text-sm mt-10 text-gray-700">
        <div className={DetailsStyle}>
          supportingrole 解構設計中性簡約運動休閒肩側背包 軍綠
        </div>
        <div className={DetailsStyle}>100% 聚酯纖維</div>
        <div className={DetailsStyle}>
          低調卻帶巧思的解構與層疊設計做出獨樹一幟的風格散發柔柔的光澤感，自帶知性格調的氣質。
        </div>
        <div className={DetailsStyle}>
          上肩厚實軟而不塌，內裡含有皮革帆布收納包，超大容量不僅可輕鬆承裝Mac
          boook、Ipad、A4資料夾，肩帶設計的寬度與長度都恰恰符合人體工學，無論是單肩揹或是手提，都能完美貼合身體，舒適與便捷實用兼具。
        </div>
        <div className={DetailsStyle}>尺寸：(長)37 (寬)40 (底厚)19 cm</div>
        <div className={DetailsStyle}>
          包包拉鍊開口，2個獨立口袋空間，1個獨立口袋拉鍊空間，1個魔鬼氈口袋空間，包包背後1個獨立拉鍊空間；附可以調整長短側背帶
        </div>
        <div className={DetailsStyle}>重量：400公克</div>
        <div className={DetailsStyle}>
          A4，書本，折疊雨傘，礦泉水瓶，ipad，簡單，實用
        </div>
        <div className={DetailsStyle}>
          商品製作出貨~約3-5天，製作中間有任何的問題都會通知您喔~
        </div>
      </div>
      <div className="mt-10">
        <div className="text-xl">商品資訊</div>
        <hr className="my-4 border-gray-300" />
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>商品材質</div>
          <div className="text-[rgb(60,150,187)] px-10">其他人造纖維</div>
        </div>

        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>製造方式</div>
          <div className={InfoStyleSpan}>機器製造</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>商品產地 </div>
          <div className={InfoStyleSpan}>台灣</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle} >庫存</div>
          <div className={InfoStyleSpan}>剩最後兩件</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>商品排行</div>
          <div className={InfoStyleSpan}>No.6,656 - 包包提袋  |  No.2,559 - 側背包/斜背包</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>商品熱門度</div>
          <div className={InfoStyleSpan}>被欣賞 54,850 次
            已賣出 102 件商品
            共 1671 人收藏</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>販售許可</div>
          <div className={InfoStyleSpan}>原創商品</div>
        </div>
        <div className={InfoStyleDiv}>
          <div className={InfoStyleTitle}>商品摘要</div>
          <div className={InfoStyleSpan}>低調卻帶巧思的解構與層疊設計做出獨樹一幟的風格散發柔柔的光澤感，自帶知性格調的氣質。 上肩厚實軟而不塌，內裡含有皮革帆布收納包，超大容量不僅可輕鬆承裝Mac boook、Ipad、A4資料夾，肩帶設計的寬度與長度都恰恰符合人體工學，無論是</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
