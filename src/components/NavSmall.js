import React from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const NavSmall = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "20px 0",
            paddingLeft: "20px",
          }}
        >
          <img
            src="https://static.wanted.co.kr/images/icon-menu.png"
            alt="hambuger menu"
            style={{
              display: "inline-block",
              width: "17px",
              marginRight: "15px",
            }}
          />
          <span>wanted</span>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexFlow: "row wrap",
              width: "500px",
              listStyle: "none",
              padding: 0,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex " }}>
              <li>홈</li>
              <li style={{ padding: "0 15px" }}>채용</li>
              <li>이벤트</li>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                width: "150px",
                justifyContent: "space-evenly",
                fontSize: "20px",
                paddingRight: "20px",
              }}
            >
              <IoSearch />
              <div
                style={{
                  position: "relative",
                }}
              >
                <AiOutlineBell />
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px",
                    backgroundColor: "blue",
                    fontSize: "3px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "3px",
                    position: "absolute",
                    top: -10,
                    right: -10,
                  }}
                >
                  N
                </span>
              </div>
              <div>
                <FiMoreHorizontal />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSmall;
