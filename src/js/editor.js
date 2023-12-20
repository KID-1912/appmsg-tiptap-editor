import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontSize from "tiptap-extension-font-size";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TrailingNode from "../extension/trailingNode.js";
import Section from "../extension/section.js";
import Hr from "../extension/hr.js";
import Style from "../extension/style.js";
import LineHeight from "../extension/lineHeight.js";
import Margin from "../extension/margin.js";
import Resizable from "../extension/resizable.js";

const editor = new Editor({
  element: document.querySelector(".editor"),
  extensions: [
    TrailingNode,
    StarterKit,
    Underline,
    TextStyle,
    Color,
    FontSize,
    TextAlign.configure({
      types: ["paragraph", "section"],
      defaultAlignment: "justify",
    }),
    Highlight.configure({ multicolor: true }),
    Image.configure({
      inline: true,
      allowBase64: true,
    }),
    Section,
    Hr,
    Style,
    LineHeight,
    Margin,
    Resizable,
  ],
});

export default editor;
