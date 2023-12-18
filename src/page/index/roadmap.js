import { c, TAG } from "./drawRoadmap.js";
/**
 * 卡片x,y坐标
 * 背景颜色、宽高、标注、子树、跳转地址、字体颜色
 */
export const all = [
  {
    text: "开始",
    x: 400,
    y: 0,
    process: 1,
  },
  {
    text: "计算机基础",
    x: 400,
    y: 100,
    link: "/how-does-the-internet-work",
    process: 2,
    children: [
      [c("进程与线程", { x: 100, y: 5 }), c("网络基础", { x: 180, y: 140 }, 100, {}, [
        c("OSI 模型", 0, 100),
        c("HTTP/HTTPS协议", 0, 130),
        c("TCP/IP", 0, 100),
        c("DNS原理", 0, 100),
      ])],
      [c("数据结构与算法", 600, 130, {}, [
        c("数组、链表、栈、队列", 820, 160),
        c("排序算法、查找算法", 820, 160),
        c("算法复杂度分析", 820, 160),
      ])],
    ],
  },
  {
    text: "浏览器",
    x: 400,
    y: 280,
    process: 2,
    link: "/how-does-the-browser-work",
    children: [
      [
        c("浏览器如何运行？", 160, 160),
      ],
      [
        c("Headless Browser", 700, 200, { bgColor: "#CCCCCC" }),
        c("WebView", 700, 200, { bgColor: "#CCCCCC" }),
      ],
    ],
  },
  {
    text: "编辑器",
    x: 400,
    y: 460,
    link: "/editor",
    process: 1,
    children: [
      [],
      [
        c("VSCode", 700, 100, { tag: TAG.recommand }),
        c("Sublime", 700, 100, { tag: TAG.optional }),
        c("WebStorm", 700, 100, { tag: TAG.optional }),
        c("Atom", 700, 100, { tag: TAG.optional }),
      ],
    ],
  },
  {
    text: "HTML",
    x: 400,
    y: 600,
    link: "/html",
    process: 1,
    children: [
      [c("常用标签", 100), c("表单", 100)],
      [c("SEO搜索优化", { x: 700, y: 590 }, 140, { bgColor: "#CCCCCC" })],
    ],
  },
  {
    text: "CSS",
    x: 400,
    y: 720,
    link: "/css",
    process: 1,
    children: [
      [],
      [
        c("基本语法", 700, 140),
        c("布局", 700, 140, {}, [
          c("浮动float", { x: 900, y: 540 }, 90),
          c("定位postion", { x: 900, y: 590 }, 90),
          c("盒模型", { x: 900, y: 640 }, 90),
          c("flex", { x: 900, y: 690 }, 90),
          c("grid/layout", { x: 900, y: 740 }, 90),
        ]),
        c("响应式设计", 700, 140),
        c("预处理器", 700, 140, {} , [
          c("Sass", { x: 900, y: 770 }, 90, { tag: TAG.recommand }),
          c("PostCss", { x: 900, y: 820 }, 90, { tag: TAG.recommand }),
          c("Stylus", { x: 900, y: 870 }, 90, { tag: TAG.optional }),
          c("Less", { x: 900, y: 920 }, 90, { tag: TAG.notRecommand }),
        ]),
      ],
    ],
  },
  {
    text: "JavaScript",
    x: 400,
    y: 800,
    link: "/javascript",
    process: 1,
    children: [
      [
        c("基本语法", 100),
        c("DOM & BOM", 100),
        c("接口请求Ajax/Fetch", 100),
        c("ES6+", 100),
        c(
          "重点理解概念 \n变量提升、时间冒泡捕获、 \n作用域、原型等 ",
          100,
          200,
          { h: 100 }
        ),
      ],
    ],
  },
  {
    text: "版本工具Git",
    x: 380,
    y: 960,
    link: "/git",
    process: 1,
    children: [
      [],
      [
        c("基本命令", 600),
        c("注册github账号并学会使用", 600),
        c("搭建一个静态博客站点", 600, 200, {}, [
          c("xxx.github.io/blog", 840, 160),
        ]),
      ],
    ],
  },
  {
    text: "Node基础",
    x: 440,
    y: 1100,
    w: 200,
    h: 50,
    link: "/node",
    children: [
      [
        c("包管理", 200, 100, {}, [
          c("npm", 0, 100),
          c("yarn", 0, 100),
          c("npx", 0, 100),
        ]),
        c("常用包", { x: 200, y: 1200 }, 100, {}, [
          c("文件读写fs", 0, 100),
          c("路径查找path", 0, 100),
          c("网络http", 0, 100),
        ]),
      ],
    ],
  },
  {
    text: "构建工具基础",
    x: 400,
    y: 1300,
    link: "/build-tools",
    children: [
      [],
      [
        c("Webpack", 800, 100, { tag: TAG.recommand }),
        c("Rollup", 800, 100, { tag: TAG.optional }),
        c("Parcel", 800, 100, { tag: TAG.optional }),
        c("Snowpack", 800, 100, { tag: TAG.optional }),
      ],
    ],
  },
  {
    text: "JS框架",
    x: 500,
    y: 1700,
    process: 2,
    link: "/js-framework",
    children: [
      [
        c("React", { x: 200, y: 1570 }, 100, {}, [
          c("Redux", 10, 100, { tag: TAG.recommand }),
          c("Mobx", 10, 100, { tag: TAG.optional }),
          c("React-router", 10, 100, { tag: TAG.recommand }),
        ]),
        c("Vue", { x: 200, y: 1700 }, 100, {}, [
          c("VueX", 10, 100, { tag: TAG.recommand }),
          c("Vue-router", 10, 100, { tag: TAG.recommand }),
        ]),
        c("Angular", { x: 200, y: 1800 }, 100, { bgColor: "#CCC" }, [
          c("RxJS", 10, 100),
          c("NgRx", 10, 100),
        ]),
      ],
    ],
  },
  {
    text: "UI组件库",
    x: 400,
    y: 1900,
    process: 2,
    link: "/css-framework",
    children: [
      [],
      [
        c("Antd", 700, 100, { tag: TAG.recommand }),
        c("Element UI", 700, 100, { tag: TAG.recommand }),
      ],
    ],
  },
  {
    text: "测试",
    x: 400,
    y: 2200,
    bgColor: "#CCC",
    process: 3,
    link: "/test-framework",
    children: [
      [
        c("单元测试", 200, 100),
        c("集成测试", 200, 100),
        c("E2E测试", 200, 100),
      ],
      [c("Jest", 700, 100), c("Enzyme", 700, 100), c("Puppeteer", 700, 100)],
    ],
  },
  {
    text: "代码质量",
    x: 400,
    y: 2400,
    bgColor: "#CCC",
    link: "/code-quality",
    process: 3,
    children: [
      [
        c("类型校验", 200, 100, {}, [
          c("TypeScript", 10, 100, { tag: TAG.recommand }),
          c("Flow", 10, 100, { tag: TAG.notRecommand }),
        ]),
        c("Linter & Formatter", { x: 200, y: 2460 }, 140, {}, [
          c("ESLint", 0, 100),
          c("Prettier", 0, 100),
        ]),
      ],
      [
        c("编码规范", 600, 100, {}, [
          c("JavaScript Style Guide", 800, 180),
          c("CSS Style Guide", 800, 180),
          c("React Style Guide", 800, 180),
        ]),
      ],
    ],
  },
  {
    text: "性能",
    x: 380,
    y: 2760,
    process: 3,
    bgColor: "#CCC",
    link: "/performance",
    children: [
      [
        c("性能指标", 140, 100, {}, [
          c("FP", 0, 60),
          c("FCP", 0, 60),
          c("FMP", 0, 60),
          c("TTI", 0, 60),
        ]),
        c("RAIL模型", 140, 120),
        c("Lighthouse 指标", 140, 120),
        c("DevTools", 140, 100),
      ],
      [
        c("PWA", 700, 100),
        c("Service Worker", 700, 140),
        c("骨架屏", 700, 140),
      ],
    ],
  },
  {
    text: "数据可视化",
    x: 300,
    y: 2980,
    bgColor: "#CCC",
    link: "/data-view",
    children: [
      [
        c("EChart", 100, 100, { tag: TAG.recommand }),
        c("AntV", 100, 100, { tag: TAG.optional }),
        c("HighChart", 100, 100, { tag: TAG.optional }),
      ],
      [c("D3.js", 500, 100)],
    ],
  },
  {
    text: "服务端渲染SSR",
    x: 420,
    y: 3180,
    process: 3,
    bgColor: "#CCC",
    link: "/ssr",
    children: [
      [],
      [c("Next.js (React)", 700, 120), c("Nuxt.js (Vue)", 700, 120)],
    ],
  },
  {
    text: "移动端应用",
    x: 360,
    y: 3340,
    bgColor: "#CCC",
    link: "/mobile-app",
    children: [
      [
        c("React Native", 200, 100),
        c("Flutter", 200, 100),
      ],
      [
        c("调试", 600, 100, {}, [
          c("Chrome DevTools", 800, 140),
          c("Android Simulator", 800, 140),
          c("iOS Simulator", 800, 140),
        ]),
      ],
    ],
  },
  {
    text: "小程序",
    x: 400,
    y: 3560,
    bgColor: "#CCC",
    link: "/mini-app",
    children: [
      [
        c("原生", 200, 100, {}, [
          c("微信", 0, 100),
          c("支付宝", 0, 100),
          c("头条", 0, 100),
        ]),
      ],
      [
        c("跨端解决方案", 660, 100, {}, [
          c("Taro", 850, 100, { tag: TAG.recommand }),
          c("uni-app", 850, 100, { tag: TAG.recommand }),
          c("Chameleon", 850, 100, { tag: TAG.optional }),
        ]),
      ],
    ],
  },
  {
    text: "桌面应用",
    x: 450,
    y: 3670,
    bgColor: "#CCC",
    link: "/desktop-app",
    children: [
      [c("Electron", 200, 100, { tag: TAG.recommand }), c("NW.js", 200, 100)],
    ],
  },
  {
    text: "Web Assembly",
    x: 400,
    y: 4000,
    link: "/web-assembly",
    bgColor: "#CCC",
    children: [[c("拥抱未来", 200, 100)]],
  },
  {
    text: "学习永无止境",
    x: 300,
    y: 4500,
    process: 1,
    link:"/learn-from-github"
  },
  {
    text: "翻滚吧！后浪！",
    x: 400,
    y: 4900,
    process: 1,
    link:"/afterwave"
  },
];
function getRoadmapByProcess(process) {
  return all.filter((item) => process.includes(item.process));
}
export const p1 = getRoadmapByProcess([1]);
export const p2 = getRoadmapByProcess([1, 2]);
export const p3 = getRoadmapByProcess([1, 2, 3]);
