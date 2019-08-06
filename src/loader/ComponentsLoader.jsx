import React from "react";
import isString from "lodash/isString";
import isArray from "lodash/isArray";

const ComponentsLoader = ({ componentsList }) =>
  componentsList.map((componentConfig, index) => {
    return ComponentLoader(componentConfig, index);
  });

const ComponentLoader = ({ component, props, children }, index) => {
  return React.createElement(
    component,
    { ...props, key: `${component.displayName}_${index}` },
    isArray(children) && isString(children[0])
      ? children
      : children.map((child, index) => ComponentLoader(child, index))
  );
};

export default ComponentsLoader;
