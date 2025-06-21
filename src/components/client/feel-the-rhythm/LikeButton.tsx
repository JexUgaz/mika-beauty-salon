import { useState } from "react";
import ShortVideoAction from "./ShortVideoAction";
import HeartIcon from "@/components/client/icons/HeartIcon";
import { millify } from "millify";

interface Props {
  likes: number;
}

const LikeButton: React.FC<Props> = ({ likes }) => {
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setAnimating(true);

    setTimeout(() => setAnimating(false), 100);
  };

  return (
    <ShortVideoAction
      icon={HeartIcon}
      label={liked ? millify(likes + 1) : millify(likes)}
      iconClassName={`transition-colors duration-300 ${
        liked ? "text-red-500" : "text-white"
      }`}
      className={`transition-transform duration-300 ease-out ${
        animating ? "scale-125" : "scale-100"
      }`}
      onClick={toggleLike}
    />
  );
};

export default LikeButton;
