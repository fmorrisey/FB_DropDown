import React, { useState } from "react";
import "./likebutton.scss";

export default function LikeButton(props) {
  const [isLiked, setLike] = useState(false);
  const toggleLike = () => setLike(!isLiked);

  return <div></div>;
}
