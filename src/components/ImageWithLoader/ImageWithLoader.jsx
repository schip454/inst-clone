import { useState } from "react";
import cn from "classnames";
import "./style.css";
import { Bars } from "react-loader-spinner";

const ImageWithLoader = ({ src, alt, className }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  const onError = () => {
    setIsImageError(true);
    setIsImageLoaded(false);
  };
  return (
    <div className={cn("cnImageWithLoaderRoot", className)}>
      {!isImageLoaded && (
        <div className="cnImageWithLoaderWrapper">
          {isImageError ? (
            "Error"
          ) : (
            <Bars width={30} height={30} color="grey" />
          )}
        </div>
      )}
      <img
        className={cn(
          "cnImageWithLoaderImg",
          isImageLoaded && "cnImageWithLoaderImgLoaded"
        )}
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
        onError={onError}
      />
    </div>
  );
};

export default ImageWithLoader;
