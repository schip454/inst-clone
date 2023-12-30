import Button from "../Button/Button";
import "./style.css";

const TextArea = ({
  value,
  onChange,
  placeholder,
  isLoading,
  onSubmit,
  buttonText,
}) => {
  return (
    <div className="cnTextAreaWrapper">
      <textarea
        placeholder={placeholder}
        className="cnTextArea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button className="cnSendButton" onClick={onSubmit} disabled={isLoading}>
        {buttonText}
      </Button>
    </div>
  );
};

export default TextArea;
