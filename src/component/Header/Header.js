import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [sideSearch, setSideSearch] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const openSearch = () => {
    setSideSearch(!sideSearch);
  };
  const openMenu = () => {
    setSideMenu(!sideMenu);
  };

  const movePage = (path) => {
    navigate(path);
  };

  return (
    <div className="header_wrap">
      <div className="header_top_area">
        <div className="header_top_back">
          <div className="header_logo_box">
            <div className="header_logo" onClick={() => movePage("/")}>
              우아한 주방
            </div>
          </div>
          <div className="header_contents_box">
            <div className="header_search_box">
              <input className="header_input"></input>
            </div>
            <div
              className="open_search_icon"
              onClick={() => openSearch()}
            ></div>
            <div className="header_menu_box">
              <div className="header_menu">로그인</div>
              <div className="header_menu">회원가입</div>
              <div className="header_menu">장바구니</div>
              <div className="header_menu">고객센터</div>
            </div>
          </div>
        </div>
        <div className="mobile_top_back">
          <div className="list_icon" onClick={() => openMenu()}></div>
          <div className="mobile_logo_box">
            <div className="mobile_logo">우아한 주방</div>
          </div>
          <div className="mobile_search_box" onClick={() => openSearch()}></div>
        </div>
      </div>
      <div className="header_bottom_area">
        <div className="header_bottom_back">
          <div className="bottom_menu_box">
            <div className="bottom_menu">커뮤니티</div>
            <div
              className="bottom_menu"
              onClick={() => movePage("/counsulting")}
            >
              컨설팅
            </div>
            <div className="bottom_menu">쇼핑</div>
            <div className="bottom_menu">중고</div>
            <div className="bottom_menu">시공</div>
          </div>
        </div>
      </div>
      <div className={`side_search_wrap ${sideSearch && "active"}`}>
        <div className="side_gray_back" onClick={() => openSearch()}></div>
        <div className="side_search_back">
          <div className="close_btn_box">
            <div className="close_btn" onClick={() => openSearch()}></div>
          </div>
          <div className="search_input_box">
            <input className="search_input"></input>
          </div>
        </div>
      </div>
      <div className={`side_menu_wrap ${sideMenu && "active"}`}>
        <div className="side_gray_back" onClick={() => openMenu()}></div>
        <div className="side_menu_back">
          <div className="search_input_box">
            <input className="search_input"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
