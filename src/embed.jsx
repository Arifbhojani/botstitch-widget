import React from "react";
import ReactDOM from "react-dom/client";
import ChatUI from "./components/ChatUI";

// Polyfill process for browser environments (last-resort hack)
if (typeof window !== 'undefined' && typeof window.process === 'undefined') {
  window.process = { env: { NODE_ENV: 'production' } };
}

(function() {
  window.Chatbot = {
    init: (config) => {
      const container = document.createElement("div");
      container.id = "botstitch-chatbot-root";
      document.body.appendChild(container);

      const root = ReactDOM.createRoot(container);
      root.render(<ChatUI config={config} />);
    },
  };
})();
