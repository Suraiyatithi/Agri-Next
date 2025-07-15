// // Chatbot.jsx
// import { useState } from "react";
// import chatbotKnowledge from "./Chatbot";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     const userMsg = { sender: "user", text: input };
//     const lowerInput = input.toLowerCase();
//     const botResponse = chatbotKnowledge[lowerInput] || "Sorry, I don't have an answer for that yet.";

//     setMessages([...messages, userMsg, { sender: "bot", text: botResponse }]);
//     setInput("");
//   };

//   return (
//     <div className="w-full max-w-md p-4 border rounded shadow bg-white fixed bottom-4 right-4 z-50">
//       <h2 className="text-xl font-semibold mb-2">AgriBot</h2>
//       <div className="h-64 overflow-y-auto border p-2 mb-2">
//         {messages.map((msg, i) => (
//           <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
//             <span className={`inline-block p-2 rounded ${msg.sender === "user" ? "bg-green-200" : "bg-gray-200"}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-grow border rounded px-2 py-1 mr-2"
//           placeholder="Ask a question..."
//         />
//         <button onClick={handleSend} className="bg-green-600 text-white px-4 py-1 rounded">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


import { useState, useRef, useEffect } from "react";
import chatbotKnowledge from "./Chatbot";
import { Bot, User } from "lucide-react"; // optional icons

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const lowerInput = input.toLowerCase();
    const botResponse = chatbotKnowledge[lowerInput] || "🌾 Sorry, I don't have an answer for that yet. Try another question!";
    const botMsg = {
      sender: "bot",
      text: botResponse,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-md p-4 border rounded-2xl shadow-lg bg-white fixed bottom-4 right-4 z-50 font-sans">
      <h2 className="text-2xl font-bold text-lime-800 mb-3 flex items-center gap-2">
        🌿 AgriBot
      </h2>

      <div className="h-72 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50 mb-3 space-y-3 scroll-smooth">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" && <Bot size={20} className="mr-2 text-green-600" />}
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-sm ${
                msg.sender === "user"
                  ? "bg-green-200 text-right text-black rounded-br-none"
                  : "bg-white border text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-xs text-gray-500 mt-1 text-right">{msg.time}</p>
            </div>
            {msg.sender === "user" && <User size={20} className="ml-2 text-gray-500" />}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-grow border border-lime-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          placeholder="Ask something like 'how to grow rice'..."
        />
        <button
          onClick={handleSend}
          className="bg-lime-800 hover:bg-green-700 transition text-white px-4 py-2 rounded-full font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

