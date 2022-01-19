import React from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const NavMid = () => {
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
          width: "850px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "20px", padding: "20px 0" }}
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
          }}
        >
          <ul
            style={{
              display: "flex",
              flexFlow: "row wrap",
              listStyle: "none",
              width: "700px",
              justifyContent: "space-evenly",
              padding: 0,
            }}
          >
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 채용</li>
            <li>이력서</li>
            <li
              style={{
                position: "relative",
                paddingRight: "30px",
              }}
            >
              커뮤니티
              <span
                style={{
                  fontSize: "10px",
                  color: "blue",
                  position: "absolute",
                  top: -5,
                  right: 0,
                }}
              >
                New
              </span>
            </li>
            <li>프리랜서</li>
            <li
              style={{
                position: "relative",
                paddingRight: "30px",
              }}
            >
              AI 합격예측
              <span
                style={{
                  fontSize: "10px",
                  color: "blue",
                  position: "absolute",
                  top: -5,
                  right: 0,
                }}
              >
                Beta
              </span>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              width: "150px",
              justifyContent: "space-evenly",
              fontSize: "20px",
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
        </div>
      </div>
    </div>
  );
};

export default NavMid;
