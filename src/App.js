import { useEffect, useState } from "react";
import "./App.css";
import NavFull from "./components/NavFull";
import NavMid from "./components/NavMid";
import NavSmall from "./components/NavSmall";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function App() {
  let [windowWidth, SetwindowWidth] = useState("");

  let [left, Setleft] = useState(-2050);

  useEffect(() => {
    if (document.documentElement.offsetWidth > 1000) {
      SetwindowWidth("full");
    } else if (
      document.documentElement.offsetWidth <= 1000 &&
      document.documentElement.offsetWidth >= 650
    ) {
      SetwindowWidth("mid");
    } else if (document.documentElement.offsetWidth <= 650) {
      SetwindowWidth("small");
    }
  }, []);

  window.addEventListener("resize", () => {
    if (document.documentElement.offsetWidth > 1000) {
      SetwindowWidth("full");
    } else if (
      document.documentElement.offsetWidth <= 1000 &&
      document.documentElement.offsetWidth >= 650
    ) {
      SetwindowWidth("mid");
    } else if (document.documentElement.offsetWidth < 650) {
      SetwindowWidth("small");
    }
  });

  console.log(windowWidth);

  return (
    <div className="App">
      {windowWidth === "" ? null : windowWidth === "full" ? (
        <NavFull />
      ) : windowWidth === "mid" ? (
        <NavMid />
      ) : windowWidth === "small" ? (
        <NavSmall />
      ) : null}

      <div
        style={{
          position: "relative",
          marginTop: "50px",
          height: "300px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: left + "px",
            width: "5500px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
            alt="slide"
            style={{ margin: "0 20px", display: "inline-block" }}
          />
          <img
            src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
            alt="slide"
            style={{ margin: "0 20px", display: "inline-block" }}
          />

          <img
            src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
            alt="slide"
            style={{ margin: "0 20px", display: "inline-block" }}
          />

          <img
            src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
            alt="slide"
            style={{ margin: "0 20px", display: "inline-block" }}
          />
          <img
            src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
            alt="slide"
            style={{ margin: "0 20px", display: "inline-block" }}
          />
        </div>
        <div style={{ position: "absolute", top: "35%", left: "20%" }}>
          <MdOutlineArrowBackIosNew
            style={{
              padding: "40px 20px",
              backgroundColor: "#ccc",
              borderRadius: "15px",
            }}
            onClick={() => {
              let next = left;
              Setleft(next + 1100);
            }}
          />
        </div>
        <div style={{ position: "absolute", top: "35%", right: "20%" }}>
          <MdOutlineArrowForwardIos
            style={{
              padding: "40px 20px",
              backgroundColor: "#ccc",
              borderRadius: "15px",
            }}
            onClick={() => {
              let next = left;
              Setleft(next - 1100);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
