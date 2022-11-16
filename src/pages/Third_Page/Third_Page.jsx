import React from "react";
import { useNavigate } from "react-router-dom";
import "./Third_Page.css";

export default function Third_Page() {
  const navigate = useNavigate();

  return (
    <div className="third_page_container">
      <button className="third_page_button" onClick={() => navigate('/fourth-page')}>Next</button>
      <div class="komi">
        <div class="komi-head">
          <div class="komi-hair-back">
            <div class="komi-hair-back-1"></div>
          </div>
          <div class="komi-ear komi-ear-left"></div>
          <div class="komi-ear komi-ear-right"></div>
          <div class="komi-cat-ear komi-cat-ear-left">
            <div class="komi-cat-ear-fur"></div>
          </div>
          <div class="komi-cat-ear komi-cat-ear-right">
            <div class="komi-cat-ear-fur"></div>
          </div>
          <div class="komi-hair-strand"></div>
          <div class="komi-face"></div>
          <div class="komi-hair-bangs">
            <div class="komi-hair-bangs-1"></div>
            <div class="komi-hair-bangs-2"></div>
            <div class="komi-hair-bangs-3"></div>
          </div>
          <div class="komi-face-inner">
            <div class="komi-eye komi-eye-left">
              <div class="komi-eye-pupil">
                <div class="komi-eye-sparkle"></div>
              </div>
            </div>
            <div class="komi-eye komi-eye-right">
              <div class="komi-eye-pupil">
                <div class="komi-eye-sparkle"></div>
              </div>
            </div>
            <div class="komi-blush komi-blush-left"></div>
            <div class="komi-blush komi-blush-right"></div>
          </div>
        </div>
        <div class="komi-panel">
          <div class="komi-hair-extension"></div>
          <div class="komi-body">
            <div class="komi-neck">
              <div class="komi-neck-shadow"></div>
              <div class="komi-collar komi-collar-left"></div>
              <div class="komi-collar komi-collar-right"></div>
              <div class="komi-bow">
                <div class="komi-bow-top">
                  <div class="komi-bow-top-shadow"></div>
                </div>
                <div class="komi-bow-bottom"></div>
              </div>
            </div>
            <div class="komi-shirt">
              <div class="komi-shirt-sleeves"></div>
              <div class="komi-shirt-sleeves-shadow"></div>
            </div>
          </div>
        </div>
        <div class="komi-zigzag komi-zigzag-1"></div>
        <div class="komi-zigzag komi-zigzag-2"></div>
        <div class="komi-zigzag komi-zigzag-3"></div>
        <div class="komi-zigzag komi-zigzag-4"></div>
        <div class="komi-zigzag komi-zigzag-5"></div>
        <div class="komi-zigzag komi-zigzag-6"></div>
        <div class="komi-zigzag komi-zigzag-7"></div>
        <div class="komi-zigzag komi-zigzag-8"></div>
        <div class="komi-zigzag komi-zigzag-9"></div>
        <div class="komi-zigzag komi-zigzag-10"></div>
        <div lang="ja" class="komi-buruburu">
          <span class="komi-buruburu-character komi-buruburu-character-1">
            ブ
          </span>
          <span class="komi-buruburu-character komi-buruburu-character-2">
            ル
          </span>
          <span class="komi-buruburu-character komi-buruburu-character-3">
            ル
          </span>
          <span class="komi-buruburu-character komi-buruburu-character-4">
            ル
          </span>
          <span class="komi-buruburu-character komi-buruburu-character-5">
            ル
          </span>
          <span class="komi-buruburu-character komi-buruburu-character-6">
            ル
          </span>
        </div>
      </div>
    </div>
  );
}
