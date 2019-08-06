import {
  headerConfig,
  mainConfig,
  asideConfig,
  footerConfig
} from "./components-config";

export const config = [
  {
    tag: "header",
    className: "my-header",
    components: headerConfig
  },
  {
    tag: "div",
    className: "content",
    children: [
      { tag: "aside", components: asideConfig },
      { tag: "main", className: "main-content", components: mainConfig }
    ]
  },
  { tag: "footer", className: "my-footer", components: footerConfig }
];
