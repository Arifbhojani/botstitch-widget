// File: src/components/FloatingButton.jsx
import React from "react";

export default function FloatingButton({ config = {}, onClick }) {
  const style = {
    position: "fixed",
    right: config.right || 20,
    bottom: config.bottom || 20,
    width: config.size || 50,
    height: config.size || 50,
    backgroundColor: config.backgroundColor || "#6f4fe3",
    borderRadius: config.borderRadius === "rounded" ? "50%" : "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1000,
  };

  const iconStyle = {
    width: config.customIconSize || 30,
    height: config.customIconSize || 30,
    borderRadius: config.customIconBorderRadius || 8,
  };

  return (
    <div style={style} onClick={onClick} title="Open chat">
      <img
        src={config.customIconSrc || "https://www.svgrepo.com/show/339963/chat-bot.svg"}
        style={iconStyle}
        alt="chatbot icon"
      />
    </div>
  );
}