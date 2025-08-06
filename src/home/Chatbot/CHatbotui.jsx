

// import { useState, useRef, useEffect } from "react";
// import chatbotKnowledge from "./Chatbot";
// import { Bot, User } from "lucide-react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [language, setLanguage] = useState("en"); // 🌐 Language state
//   const messagesEndRef = useRef(null);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMsg = {
//       sender: "user",
//       text: input.trim(),
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     const lowerInput = input.toLowerCase();
//     const botResponse =
//       chatbotKnowledge[language][lowerInput] ||
//       (language === "bn"
//         ? "🌾 দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না। অনুগ্রহ করে অন্য প্রশ্ন জিজ্ঞাসা করুন!"
//         : "🌾 Sorry, I don't have an answer for that yet. Try another question!");

//     const botMsg = {
//       sender: "bot",
//       text: botResponse,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages((prev) => [...prev, userMsg, botMsg]);
//     setInput("");
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="w-full max-w-md p-4 border rounded-2xl shadow-lg bg-white fixed bottom-4 right-4 z-50 font-sans">
//       <div className="flex justify-between items-center mb-3">
//         <h2 className="text-2xl font-bold text-lime-800 flex items-center gap-2">
//           🌿 AgriBot
//         </h2>
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="border text-sm px-2 py-1 rounded-md focus:outline-none"
//         >
//           <option value="en">🌐 English</option>
//           <option value="bn">🌐 বাংলা</option>
//         </select>
//       </div>

//       <div className="h-72 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50 mb-3 space-y-3 scroll-smooth">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.sender === "bot" && <Bot size={20} className="mr-2 text-green-600" />}
//             <div
//               className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-sm ${
//                 msg.sender === "user"
//                   ? "bg-green-200 text-right text-black rounded-br-none"
//                   : "bg-white border text-gray-800 rounded-bl-none"
//               }`}
//             >
//               <p>{msg.text}</p>
//               <p className="text-xs text-gray-500 mt-1 text-right">{msg.time}</p>
//             </div>
//             {msg.sender === "user" && <User size={20} className="ml-2 text-gray-500" />}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="flex items-center gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           className="flex-grow border border-lime-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
//           placeholder={
//             language === "bn"
//               ? "কিছু জিজ্ঞাসা করুন যেমন 'ধান কিভাবে চাষ করব'..."
//               : "Ask something like 'how to grow rice'..."
//           }
//         />
//         <button
//           onClick={handleSend}
//           className="bg-lime-800 hover:bg-green-700 transition text-white px-4 py-2 rounded-full font-semibold"
//         >
//           {language === "bn" ? "পাঠান" : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


import { useState, useRef, useEffect } from "react";
import chatbotKnowledge from "./Chatbot";
import { Bot, User, X } from "lucide-react";

const Chatbot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const lowerInput = input.toLowerCase();
    const botResponse =
      chatbotKnowledge[language][lowerInput] ||
      (language === "bn"
        ? "🌾 দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না। অনুগ্রহ করে অন্য প্রশ্ন জিজ্ঞাসা করুন!"
        : "🌾 Sorry, I don't have an answer for that yet. Try another question!");

    const botMsg = {
      sender: "bot",
      text: botResponse,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!visible) return null;

  return (
    <div className="w-full max-w-md p-4 border rounded-2xl shadow-lg bg-white fixed bottom-4 right-4 z-50 font-sans">
      {/* Header with Close Button */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold text-lime-800 flex items-center gap-2">
          🌿 AgriBot
        </h2>
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border text-sm px-2 py-1 rounded-md focus:outline-none"
          >
            <option value="en">🌐 English</option>
            <option value="bn">🌐 বাংলা</option>
          </select>
          {/* ❌ Close Button */}
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <X size={24} />
          </button>
        </div>
      </div>

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
          placeholder={
            language === "bn"
              ? "কিছু জিজ্ঞাসা করুন যেমন 'ধান কিভাবে চাষ করব'..."
              : "Ask something like 'how to grow rice'..."
          }
        />
        <button
          onClick={handleSend}
          className="bg-lime-800 hover:bg-green-700 transition text-white px-4 py-2 rounded-full font-semibold"
        >
          {language === "bn" ? "পাঠান" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
