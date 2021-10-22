import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

export default function likecomment(props) {
  return (
    <>
      {islike ? (
        <span>
          <ThumbUpAltOutlinedIcon className="icon-action" /> Like
        </span>
      ) : (
        <span>
          <ThumbUpAltOutlinedIcon className="icon-action" /> Like
        </span>
      )}
    </>
  );
}
