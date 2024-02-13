import React, { useEffect, useRef } from "react";

const Counsulting = () => {
  // 휠 동작
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const mouseWheelHandler = (e, containerRef) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY || -e.detail));
    containerRef.current.scrollLeft += delta * 100; // 휠 방향 반대로 수정
    e.preventDefault();
  };

  useEffect(() => {
    const container1 = containerRef.current;
    const container2 = containerRef2.current;
    const container3 = containerRef3.current;

    const addWheelListener = (container, ref) => {
      if (container) {
        container.addEventListener("wheel", (e) => mouseWheelHandler(e, ref));
        container.addEventListener("DOMMouseScroll", (e) =>
          mouseWheelHandler(e, ref)
        );
      }
    };

    addWheelListener(container1, containerRef);
    addWheelListener(container2, containerRef2);
    addWheelListener(container3, containerRef3);

    return () => {
      if (container1) {
        container1.removeEventListener("wheel", mouseWheelHandler);
        container1.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
      if (container2) {
        container2.removeEventListener("wheel", mouseWheelHandler);
        container2.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
      if (container3) {
        container3.removeEventListener("wheel", mouseWheelHandler);
        container3.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
    };
  }, []);
  return (
    <div className="counsult_tab_wrap">
      <div className="counsult_tab_back">
        <div className="counsult_top_box">
          <div className="counsult_top"></div>
        </div>
        <div className="counsult_middle_box">
          <div className="middle_contents_box left">
            <div className="middle_top_box"></div>
            <div className="middle_bottom_box">
              <div className="item_box">
                <div className="item_icon"></div>
                <div className="item_title">견적요청</div>
              </div>
              <div className="item_box">
                <div className="item_icon"></div>
                <div className="item_title">1:1문의</div>
              </div>
              <div className="item_box">
                <div className="item_icon"></div>
                <div className="item_title">주방 도면 의뢰</div>
              </div>
              <div className="item_box">
                <div className="item_icon"></div>
                <div className="item_title">자주하는 질문</div>
              </div>
              <div className="item_box">
                <div className="item_icon"></div>
                <div className="item_title">3D배치</div>
              </div>
            </div>
          </div>
          <div className="middle_contents_box right">
            <div className="middle_vertical_box"></div>
          </div>
        </div>
        <div className="counsult_bottom_box">
          <div className="bottom_contents_box">
            <div className="contents_title">유저들이 그린 2D 도면</div>
            <div className="contents_row" ref={containerRef}>
              {[...Array(parseInt(10))].map((data, index) => {
                return <div className="contents_box"></div>;
              })}
            </div>
          </div>
          <div className="bottom_contents_box">
            <div className="contents_title">유저들이 그린 3D 도면</div>
            <div className="contents_row" ref={containerRef2}>
              {[...Array(parseInt(10))].map((data, index) => {
                return <div className="contents_box"></div>;
              })}
            </div>
          </div>
          <div className="bottom_contents_box">
            <div className="contents_title">
              주방설계, 너무 어려울땐? 주방도면의뢰!
            </div>
            <div className="contents_row" ref={containerRef3}>
              {[...Array(parseInt(10))].map((data, index) => {
                return <div className="contents_box"></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counsulting;
