import { Image } from "@common-types/image";
import { useState } from "react";
import "./styles.css";

interface ImageItemProps {
  shape?: "circle" | "square";
  size?: "small" | "medium" | "large";
  image: Image;
}

export default function ImageItem({
  shape = "square", image,
  size = "small",
}: ImageItemProps) {
  const [isOpenLargeImg, setIsOpenLargeImg] = useState(false);
  const classNameDefault = `image--${shape} image--${shape}-${size}`;
  const className = image.className ? `${classNameDefault} ${image.className}` : classNameDefault;

  const handleOpenLargeImage = () => {
    if (shape === "circle" && size === "small") {
      setIsOpenLargeImg(true);
    }
  };

  return (
    <div className="image">
      <img
        className={className}
        alt={image.alt}
        src={image.src}
        onMouseEnter={handleOpenLargeImage}
        onMouseLeave={() => setIsOpenLargeImg(false)}
      />
      {isOpenLargeImg ? (
        <img
          className="image--circle image--circle-hover image--circle-large"
          alt={image.alt}
          src={image.src}
        />
      ) : null}
    </div>
  );
}
