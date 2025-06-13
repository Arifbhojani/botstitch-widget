// File: src/components/ChatUI.jsx
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import FloatingButton from "./FloatingButton";

export default function ChatUI({ config }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <FloatingButton config={config.theme?.button} onClick={toggleChat} />
      {isOpen && <ChatWindow config={config} onClose={toggleChat} />}
    </>
  );
}
