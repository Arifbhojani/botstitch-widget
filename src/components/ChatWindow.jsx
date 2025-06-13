// File: src/components/ChatWindow.jsx
import React from "react";

export default function ChatWindow({ config, onClose }) {
  const style = {
    position: "fixed",
    bottom: (config.theme?.button?.bottom || 20) + 60,
    right: config.theme?.button?.right || 20,
    width: config.theme?.chatWindow?.width || 400,
    height: config.theme?.chatWindow?.height || 600,
    backgroundColor: config.theme?.chatWindow?.backgroundColor || "#fff",
    borderRadius: 10,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 1001,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    fontSize: config.theme?.chatWindow?.fontSize || 16,
  };

  return (
    <div style={style}>
      {/* Header */}
      <div style={{
        padding: "10px",
        backgroundColor: "#f36539",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={config.theme?.chatWindow?.titleAvatarSrc}
            alt="avatar"
            style={{ width: 30, height: 30, borderRadius: 20, marginRight: 10 }}
          />
          <strong>{config.theme?.chatWindow?.title || "BotStitch"}</strong>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "white", fontSize: 20 }}>×</button>
      </div>

      {/* Message area */}
      <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
        <div style={{ color: "#888" }}>{config.theme?.chatWindow?.welcomeMessage || "Welcome!"}</div>
        {/* Messages would go here dynamically */}
      </div>

      {/* Input area */}
      <div style={{ padding: 10, borderTop: "1px solid #eee" }}>
        <input
          type="text"
          placeholder={config.theme?.chatWindow?.textInput?.placeholder || "Type a message..."}
          maxLength={config.theme?.chatWindow?.textInput?.maxChars || 100}
          style={{
            width: "calc(100% - 50px)",
            padding: 8,
            borderRadius: config.theme?.chatWindow?.textInput?.borderRadius || 6,
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            marginLeft: 5,
            backgroundColor: config.theme?.chatWindow?.textInput?.sendButtonColor || "#e5a38f",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: config.theme?.chatWindow?.textInput?.sendButtonBorderRadius || 20,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}