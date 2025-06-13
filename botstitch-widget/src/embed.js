// File: src/embed.js
import React from "react";
import ReactDOM from "react-dom/client";
import ChatUI from "./components/ChatUI";

const Chatbot = {
  init: (config) => {
    const container = document.createElement("div");
    container.id = "botstitch-chatbot-root";
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(<ChatUI config={config} />);
  },
};

