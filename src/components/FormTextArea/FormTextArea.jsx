import "./style.css";
import cn from "classnames";

const FormTextArea = ({ className, errorText, ...restProps }) => {
  return (
    <div className={cn("cnInputRoot", className)}>
      <textarea
        {...restProps}
        className={cn(
          "cnFormTextAreaRoot",
          errorText && "cnFormTextAreaWithError"
        )}
      />
      <span className="cnInputError">{errorText}</span>
    </div>
  );
};

export default FormTextArea;
