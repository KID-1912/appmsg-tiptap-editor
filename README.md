# tiptap

## 笔记

## 功能完善

- 完成样式操作控件，支持所有微信操作
- 考虑内容组件化，完善开发组件方式
- 接入视频、图片上传（微信能力支持）
- 支持导入文章
- 接入微信生态授权，微信授权登录，获取微信公众号信息，文章列表，添加文章到微信
- svg 编辑器插件（需开发 svg 编辑器）

## 功能点罗列

- 添加文字样式

- 清除内容格式

- 历史记录撤销/重做

- 公众号图文内容库

- 一键复制使用

- 上传图片（base64 为例）

- 持续更新中...

## 测验

- 尝试实现简单图文（待支持排版）

**Task List**

- 内容排版操作

- 侧边栏插入样式与模板

- 公众号图文模板开发规范

- 对接微信

一般公众号样式链接：https://yiban.io/style_center/0_1_0

## 关于开发样式

微信默认样式

```css
/* 编辑区样式 */
.tiptap.ProseMirror {
  height: 100%;
  line-height: 1.6;
}

/* 内容样式 */
.ProseMirror * {
  max-width: 100%;
  box-sizing: border-box !important;
}
```

由于微信默认样式存在，为了预览效果一致性，需要在 tiptap 编辑区与侧边栏保证以上样式存在

### 组件开发

可用的、灵活的、自适应的组件，需要你按照一定的规范开发

**核心标签**

section：组件内容容器，允许 style 属性，可自定义样式

p：文字段落，不支持自定义样式，若插入文字未包含于 p 标签，则解析后自动追加

span：文字样式容器，仅允许 color、font-size、font-family 等文字样式

img：图片元素，允许 style 属性，可自定义样式

**标记标签**

以下标签为 tiptap 标记样式的 node，在插入内容被解析后自动追加，无需关注

如插入内容

```html
<section style="color: grey; text-decoration: underline">
  <p>
    <span style="font-size: 12px">COMPANY BROCHURE</span>
  </p>
</section>
```

实际插入结果

```html
<section style="color: grey; text-decoration: underline">
  <p>
    <u>
      <span style="font-size: 12px">COMPANY BROCHURE</span>
    </u>
  </p>
</section>
```

strong：加粗 node

em：斜体 node

u：下划线 node

**更合理的组件建议**

内容块(section)之间距离：推荐 margin-top/margin-bottom 边距（段前距/段后距）

文字行距离：推荐 line-height 行高（行间距）
