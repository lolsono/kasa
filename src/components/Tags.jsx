import React from "react";

function Tags({ tags }) {
  return (
    <ul className="tag-container">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;
