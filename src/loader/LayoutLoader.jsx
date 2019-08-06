import React from "react";
import ComponentsLoader from "./ComponentsLoader";

const LayoutLoader = ({ config }) =>
  config.map((item, index) =>
    React.createElement(
      item.tag,
      {
        className: item.className,
        key: `${item.tag}_${item.className}_${index}`
      },
      item.components ? (
        <ComponentsLoader componentsList={item.components} />
      ) : (
        LayoutLoader({ config: item.children })
      )
    )
  );

export default LayoutLoader;
