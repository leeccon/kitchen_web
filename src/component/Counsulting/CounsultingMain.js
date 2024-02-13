import React, { useState } from "react";
import Counsulting from "./Counsulting";

const CounsultingMain = () => {
  const [tab, setTab] = useState(1);

  const moveTab = (num) => {
    setTab(num);
  };
  return (
    <div className="screen_back">
      <div className="counsult_wrap">
        <div className="tab_area">
          <div
            className={`tab_box ${tab === 1 && "active"}`}
            onClick={() => moveTab(1)}
          >
            홈
          </div>
          <div
            className={`tab_box ${tab === 2 && "active"}`}
            onClick={() => moveTab(2)}
          >
            견적요청
          </div>
          <div
            className={`tab_box ${tab === 3 && "active"}`}
            onClick={() => moveTab(3)}
          >
            1:1문의
          </div>
          <div
            className={`tab_box ${tab === 4 && "active"}`}
            onClick={() => moveTab(4)}
          >
            주방도면의뢰
          </div>
          <div className="tab_box disabled">자주하는질문</div>
          <div className="tab_box disabled">3D배치</div>
        </div>
        <div className="counsult_back">
          {tab === 1 && <Counsulting></Counsulting>}
        </div>
      </div>
    </div>
  );
};

export default CounsultingMain;
