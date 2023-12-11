import { Tabs } from "../plugins/tabs";
import editor from "./editor";

// Tabs
const $sidebar_tabs = document.querySelector(".sidebar .tabs");
const tabs = new Tabs({ el: $sidebar_tabs, activated: "graphic" });

// 图文列表数据
const graphicList = [
  import("../templates/template.html"),
  import("../templates/custom.html"),
  import("../templates/No.html"),
  import("../templates/title.html"),
  import("../templates/text.html"),
  import("../templates/graphic.html"),
];

// 渲染图文列表
const $graphic_list = document.querySelector(".sidebar .graphic-list");
for (let graphic of graphicList) {
  try {
    const module = await graphic;
    const template = await fetch(module.default);
    const html = await template.text();
    const $item = document.createElement("div");
    $item.classList.add("graphic-item");
    $item.addEventListener("click", () => handleInsert(html));
    $item.innerHTML = html;
    $graphic_list.appendChild($item);
  } catch (error) {
    console.warn(error);
  }
}

// 插入图文/模板
function handleInsert(html) {
  editor
    .chain()
    .focus()
    .insertContent(html, {
      parseOptions: {
        preserveWhitespace: false,
      },
    })
    .run();
}
