import { useState } from "react";
import "./styles.css";

// REQUIRED PROPS
/* 
collapsedNumWords: How many words will collapse
expandButtonText: Text displayed on the expand button
collapseButtonText: Text displayed on the collapse button
buttonColor: color of the button
expanded: default state of the expand
className: To customize further by the user
*/

export default function TextExpander({
  collapsedNumWords = 30,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const text =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    border: "none",
    cursor: "pointer",
    color: buttonColor,
    background: "none",
  };

  return (
    <div className={className}>
      <span>{isExpanded ? children : text}</span>
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
