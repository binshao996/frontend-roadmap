import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import domtoimage from "dom-to-image";
import "rc-switch/assets/index.css";
import drawRoadmap from "./drawRoadmap";
import * as roadMap from "./roadmap";
import "./style.css";

const options = [
  { value: "all", label: "完整路线", canvasHeight: 5000 },
  { value: "p1", label: "👶🏻 阶段1", canvasHeight: 2000 },
  { value: "p2", label: "👦🏻 阶段2", canvasHeight: 3000 },
  { value: "p3", label: "👨🏻 阶段3", canvasHeight: 2000 },
];

function Index() {
  const navigate = useNavigate();

  const [stage, setStage] = useState(options[0]);

  useEffect(() => {
    const canvas = drawRoadmap(
      `roadmapCanvas`,
      roadMap[stage.value]
    );
    // canvas.setHeight(stage.canvasHeight);
    const canvasMouseDownHandler = (options) => {
      if (options.target && options.target.link) {
        // 是否有跳转到markdown，从markdown返回的时候需要绘制一次
        window.__GOTO_MARKDOWN__ = true;
        navigate(`/guide${options.target.link}`);
      }
    };
    canvas.on("mouse:down", canvasMouseDownHandler);
    return () => {
      canvas.off("mouse:down", canvasMouseDownHandler);
    };
  }, [navigate, stage]);

  const download = useCallback(() => {
    const $el = document.querySelector(".roadmap");
    const downloadName = stage.label
      .replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")
      .trim();
    domtoimage.toJpeg($el).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `roadmap-${downloadName}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  }, [stage]);

  return (
    <div className="roadmap-container">
      <div className="stage-container">
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={setStage}
          placeholder="请选择"
          className="stage-select"
        />
        <div className="download" onClick={download}>
          下载路线图
        </div>
      </div>

      <div className="roadmap">
        <div className="desc-container">
          <div className="explain-square">
            <div className="explain-content">
              <div>
                1.{" "}
                <span role="img" aria-label="recommend">
                  ⭐️
                </span>{" "}
                - 推荐使用
              </div>
              <div>
                2.{" "}
                <span role="img" aria-label="prepare">
                  ✅
                </span>{" "}
                - 备选方案
              </div>
              <div>
                3.{" "}
                <span role="img" aria-label="no recommend">
                  ❎
                </span>{" "}
                - 不推荐学习（技术已过时或其他原因）
              </div>
              <div>
                4.
                <span className="grey-card">xxxx</span> - 需要时再学
              </div>
            </div>
          </div>
        </div>
        <div>
          <canvas id='roadmapCanvas' height="5000px" width="1000px" />
        </div>
      </div>
    </div>
  );
}

export default Index;
