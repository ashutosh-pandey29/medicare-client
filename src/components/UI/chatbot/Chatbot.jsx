import React, { useState, useRef, useEffect } from "react";
import {
  FiSend,
  FiUser,
  FiX,
  FiMaximize2,
  FiMoreVertical,
  FiTrash2,
  FiCopy,
  FiRefreshCw,
  FiCheck,
  FiAlertTriangle,
  FiPhone,
  FiShield,
  FiMinimize2,
} from "react-icons/fi";

import { FaCheckDouble, FaRobot, FaAmbulance } from "react-icons/fa";

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "read",
    },
    {
      id: 2,
      text: "I can help you with:\n• Product inquiries\n• Technical support\n• Account management\n• General questions",
      sender: "bot",
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "read",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "How can I track my order?",
    "Tell me about pricing",
    "Technical support needed",
    "Account settings",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: "user",
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        status: "sent",
      };
      setMessages([...messages, newMessage]);
      setInput("");
      setShowSuggestions(false);
      setIsTyping(true);

      // Simulate bot typing
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg))
        );
      }, 500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg))
        );
      }, 1000);

      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        const botReply = {
          id: messages.length + 2,
          text: generateResponse(input),
          sender: "bot",
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          status: "read",
        };
        setMessages((prev) => [...prev, botReply]);
      }, 2000);
    }
  };

  const generateResponse = (userInput) => {
    const lower = userInput.toLowerCase();
    if (lower.includes("order") || lower.includes("track")) {
      return "I can help you track your order! Please provide your order ID, and I'll get the latest status for you.";
    } else if (lower.includes("price") || lower.includes("pricing")) {
      return "Our pricing varies based on your needs. We offer:\n• Basic Plan - $9/month\n• Pro Plan - $29/month\n• Enterprise - Custom pricing\n\nWould you like more details on any plan?";
    } else if (lower.includes("technical") || lower.includes("support")) {
      return "I'm here to help with technical issues! Could you describe the problem you're experiencing? I'll do my best to resolve it quickly.";
    } else if (lower.includes("account")) {
      return "For account-related queries, I can assist with:\n• Password reset\n• Profile updates\n• Subscription management\n• Security settings\n\nWhat would you like help with?";
    }
    return "Thank you for your message! I'm here to assist you. Could you provide more details so I can help you better?";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    setShowMenu(null);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    setShowMenu(null);
  };

  const regenerateResponse = (id) => {
    const msgIndex = messages.findIndex((msg) => msg.id === id);
    if (msgIndex > 0) {
      const previousUserMsg = messages[msgIndex - 1];
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const newResponse = {
          ...messages[msgIndex],
          text: generateResponse(previousUserMsg.text) + " (Regenerated)",
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages(messages.map((msg) => (msg.id === id ? newResponse : msg)));
      }, 1500);
    }
    setShowMenu(null);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI assistant. How can I help you today?",
        sender: "bot",
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        status: "read",
      },
    ]);
    setShowSuggestions(true);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-1 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <FaRobot className="w-7 h-7" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-1 right-2 z-50 w-full max-w-md sm:w-96">
      <div
        className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[650px]"
        } flex flex-col border border-gray-200`}
      >

        {/* Advanced Header */}
        <div className="bg-linear-to-r from-emerald-700  to-green-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full">
                  <FaRobot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-xs text-white/90 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active now
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? (
                  <FiMaximize2 className="w-4 h-4" />
                ) : (
                  <FiMinimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={clearChat}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                title="Clear chat"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                title="Close"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Area with Advanced Features */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 group ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
                      message.sender === "bot"
                        ? "bg-linear-to-r from-green-600 to-red-400"
                        : "bg-linear-to-r from-green-500 to-teal-500"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <FaRobot className="w-5 h-5 text-white" />
                    ) : (
                      <FiUser className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`flex flex-col max-w-[75%] ${
                      message.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="relative">
                      <div
                        className={`px-4 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-shadow ${
                          message.sender === "bot"
                            ? "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                            : "bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-tr-none"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {message.text}
                        </p>
                      </div>

                      {/* Message Actions Menu */}
                      <button
                        onClick={() => setShowMenu(showMenu === message.id ? null : message.id)}
                        className={`absolute top-2 ${
                          message.sender === "user" ? "left-2" : "right-2"
                        } opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-black/10`}
                      >
                        <FiMoreVertical className="w-3 h-3" />
                      </button>

                      {showMenu === message.id && (
                        <div
                          className={`absolute top-8 ${
                            message.sender === "user" ? "left-0" : "right-0"
                          } bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10 min-w-[140px]`}
                        >
                          <button
                            onClick={() => copyMessage(message.text)}
                            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                          >
                            <FiCopy className="w-3 h-3" /> Copy
                          </button>
                          {message.sender === "bot" && (
                            <button
                              onClick={() => regenerateResponse(message.id)}
                              className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                            >
                              <FiRefreshCw className="w-3 h-3" /> Regenerate
                            </button>
                          )}
                          <button
                            onClick={() => deleteMessage(message.id)}
                            className="w-full px-3 py-2 text-left text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
                          >
                            <FiTrash2 className="w-3 h-3" /> Delete
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 px-2">
                      <span className="text-xs text-gray-500">{message.time}</span>
                      {message.sender === "user" && (
                        <span className="text-xs">
                          {message.status === "sent" && (
                            <FiCheck className="w-3 h-3 text-gray-400" />
                          )}
                          {message.status === "delivered" && (
                            <FaCheckDouble className="w-3 h-3 text-gray-400" />
                          )}
                          {message.status === "read" && (
                            <FaCheckDouble className="w-3 h-3 text-blue-500" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-linear-to-r from-blue-600 to-purple-600 shadow-md">
                    <FaRobot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-md border border-gray-100">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Suggestions */}
              {showSuggestions && messages.length <= 2 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-gray-500 px-2 font-medium">Quick suggestions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700 px-3 py-2 rounded-lg transition-all text-left shadow-sm hover:shadow"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Advanced Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full bg-transparent resize-none outline-none text-sm max-h-24"
                    rows="1"
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Secure & Encrypted
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
