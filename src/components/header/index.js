import React from "react";
import LOGO from "../../assets/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="top">
        <img
          src={LOGO}
          alt="logo"
          onClick={() => {
            window.location.href = "/front-end-roadmap";
          }}
        />
        <h3>程序员斌少</h3>
        <span className="github-button">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=binshao996&repo=frontend-roadmap&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </span>
      </div>
      <div className="title">
        <span className="text">
          24年最新前端学习路线
          <span className="emoji">
            <span role="img" aria-label="line">🌟</span>
            <span role="img" aria-label="road">🐺</span>
          </span>
        </span>
      </div>
      <div className="sub-title"><span role="img" aria-label="workholic">👨🏻‍💻</span> 路线永无定式，编程永无止尽 <span role="img" aria-label="workholic">👨🏻‍💻</span></div>
    </div>
  );
}
