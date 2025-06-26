// File: src/components/ChatUI.jsx
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import FloatingButton from "./FloatingButton";

export default function ChatUI({ config = {} }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // Provide default config structure
  const defaultConfig = {
    theme: {
      button: {
        backgroundColor: "#007bff",
        color: "white",
        right: 20,
        bottom: 20,
        size: 60,
        borderRadius: "50%"
      },
      chatWindow: {
        title: "Chat Support",
        welcomeMessage: "Hello! How can I help you today?",
        backgroundColor: "#ffffff",
        height: 500,
        width: 350
      }
    }
  };

  // Merge provided config with defaults
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    theme: {
      ...defaultConfig.theme,
      ...config.theme,
      button: {
        ...defaultConfig.theme.button,
        ...config.theme?.button
      },
      chatWindow: {
        ...defaultConfig.theme.chatWindow,
        ...config.theme?.chatWindow
      }
    }
  };

  return (
    <>
      <FloatingButton config={mergedConfig.theme.button} onClick={toggleChat} />
      {isOpen && <ChatWindow config={mergedConfig} onClose={toggleChat} />}
    </>
  );
}
