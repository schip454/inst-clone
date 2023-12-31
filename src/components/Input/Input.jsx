import React from "react";
import cn from "classnames";
import "./style.css";

const Input = ({ errorText, className, ...restProps }) => {
  return (
    <div className={cn("cnInputRoot", className)}>
      <input
        {...restProps}
        type="text"
        className={cn("cnInputItem", errorText && "cnInputWithError")}
      />
      <span className="cnInputError">{errorText}</span>
    </div>
  );
};

export default Input;
