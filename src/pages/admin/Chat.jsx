import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaPaperPlane, FaUsers } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

// Mock data
const mockDepartments = [
  { id: "cardiology", name: "Cardiology", unread: 2 },
  { id: "neurology", name: "Neurology", unread: 0 },
  { id: "orthopedics", name: "Orthopedics", unread: 1 },
  { id: "pediatrics", name: "Pediatrics", unread: 0 },
];

const mockDoctors = [
  { id: "1", name: "Dr. Sarah Johnson", department: "Cardiology", online: true, unread: 1 },
  { id: "2", name: "Dr. Michael Chen", department: "Neurology", online: true, unread: 0 },
  { id: "3", name: "Dr. Emily Williams", department: "Orthopedics", online: false, unread: 0 },
  { id: "4", name: "Dr. James Brown", department: "Cardiology", online: true, unread: 0 },
  { id: "5", name: "Dr. Lisa Anderson", department: "Pediatrics", online: false, unread: 1 },
];

const mockMessages = {
  1: [
    {
      id: 1,
      sender: "doctor",
      text: "Good morning! I need clarification on the new policy.",
      time: "09:30 AM",
      senderName: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      sender: "admin",
      text: "Hello Dr. Johnson. Which policy are you referring to?",
      time: "09:32 AM",
    },
    {
      id: 3,
      sender: "doctor",
      text: "The updated patient intake protocol for cardiology.",
      time: "09:35 AM",
      senderName: "Dr. Sarah Johnson",
    },
    {
      id: 4,
      sender: "admin",
      text: "I'll send you the detailed documentation right away. The main changes include updated consent forms and additional screening questions.",
      time: "09:37 AM",
    },
  ],
  all: [
    {
      id: 1,
      sender: "admin",
      text: "Reminder: Staff meeting tomorrow at 10 AM in Conference Room A.",
      time: "08:00 AM",
      type: "broadcast",
    },
    { id: 2, sender: "system", text: "Message sent to all doctors", time: "08:00 AM" },
  ],
  cardiology: [
    {
      id: 1,
      sender: "admin",
      text: "New equipment has been installed in Cardiology Wing B.",
      time: "10:15 AM",
      type: "broadcast",
    },
    { id: 2, sender: "system", text: "Message sent to Cardiology department", time: "10:15 AM" },
  ],
};

// ChatSidebar Component
const ChatSidebar = ({ activeChat, onChatSelect, searchQuery, onSearchChange, userRole }) => {
  const [expandedSections, setExpandedSections] = useState({
    departments: true,
    doctors: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredDoctors = mockDoctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDepartments = mockDepartments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {userRole === "admin" && (
          <>
            {/* All Doctors */}
            <div
              onClick={() => onChatSelect({ type: "all", id: "all", name: "All Doctors" })}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                activeChat?.id === "all" ? "bg-blue-50 border-r-2 border-blue-500" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">All Doctors</div>
                  <div className="text-xs text-gray-500">Broadcast message</div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => toggleSection("departments")}
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-gray-50"
              >
                <span>Departments</span>
                <IoChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expandedSections.departments ? "" : "-rotate-90"
                  }`}
                />
              </button>
              {expandedSections.departments &&
                filteredDepartments.map((dept) => (
                  <div
                    key={dept.id}
                    onClick={() =>
                      onChatSelect({ type: "department", id: dept.id, name: dept.name })
                    }
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                      activeChat?.id === dept.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <FaUsers className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="font-medium text-gray-900 text-sm">{dept.name}</div>
                    </div>
                    {dept.unread > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {dept.unread}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Individual Doctors */}
        <div className="border-t border-gray-100">
          <button
            onClick={() => toggleSection("doctors")}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-gray-50"
          >
            <span>{userRole === "admin" ? "Individual Doctors" : "Admin Chat"}</span>
            <IoChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.doctors ? "" : "-rotate-90"
              }`}
            />
          </button>
          {expandedSections.doctors &&
            (userRole === "admin"
              ? filteredDoctors
              : [{ id: "admin", name: "Admin Support", online: true, unread: 0 }]
            ).map((doc) => (
              <div
                key={doc.id}
                onClick={() => onChatSelect({ type: "individual", id: doc.id, name: doc.name })}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                  activeChat?.id === doc.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium text-sm">
                      {doc.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <BsCircleFill
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        doc.online ? "fill-green-500 text-green-500" : "fill-gray-400 text-gray-400"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{doc.name}</div>
                    {doc.department && (
                      <div className="text-xs text-gray-500">{doc.department}</div>
                    )}
                  </div>
                </div>
                {doc.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {doc.unread}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// ChatHeader Component
const ChatHeader = ({ chat, userRole }) => {
  if (!chat) return null;

  const getRoleBadge = () => {
    if (chat.type === "all" || chat.type === "department") {
      return (
        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
          Broadcast
        </span>
      );
    }
    return (
      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
        {userRole === "admin" ? "Doctor" : "Admin"}
      </span>
    );
  };

  const getOnlineStatus = () => {
    if (chat.type === "individual") {
      return (
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <BsCircleFill  className="w-2 h-2 fill-green-500 text-green-500" />
          <span>Online</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{chat.name}</h2>
              {getRoleBadge()}
            </div>
            {getOnlineStatus()}
          </div>
        </div>
      </div>
    </div>
  );
};

// MessageBubble Component
const MessageBubble = ({ message, userRole }) => {
  if (message.type === "system" || message.sender === "system") {
    return (
      <div className="flex justify-center my-4">
        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {message.text}
        </div>
      </div>
    );
  }

  const isOwnMessage =
    (userRole === "admin" && message.sender === "admin") ||
    (userRole === "doctor" && message.sender === "doctor");

  return (
    <div className={`flex mb-4 ${isOwnMessage ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-md ${isOwnMessage ? "order-2" : "order-1"}`}>
        {!isOwnMessage && message.senderName && (
          <div className="text-xs text-gray-600 mb-1 ml-1">{message.senderName}</div>
        )}
        <div
          className={`px-4 py-2 rounded-lg ${
            isOwnMessage
              ? "bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-br-none"
              : "bg-gray-100 text-gray-900 rounded-bl-none"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 ${isOwnMessage ? "text-right" : "text-left"} mx-1`}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
};

// MessageInput Component
const MessageInput = ({ onSendMessage, disabled, chatType }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4">
      {(chatType === "all" || chatType === "department") && (
        <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
          <div className="text-yellow-600 mt-0.5">⚠️</div>
          <div className="text-xs text-yellow-800">
            <strong>Broadcast mode:</strong> This message will be sent to{" "}
            {chatType === "all" ? "all doctors" : "all doctors in this department"}.
          </div>
        </div>
      )}
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message…"
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            style={{ minHeight: "44px", maxHeight: "120px" }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="px-4 py-3 bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium text-sm"
        >
          <FaPaperPlane className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
};

// EmptyState Component
const EmptyState = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* <Users className="w-10 h-10 text-gray-400" /> */}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
        <p className="text-sm text-gray-500">Select a doctor or group to start chatting</p>
      </div>
    </div>
  );
};

// Main App Component
export const Chat = () => {
  const [userRole] = useState("admin"); // Change to 'doctor' to see doctor view
  const [activeChat, setActiveChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChatSelect = (chat) => {
    setActiveChat(chat);
  };

  const handleSendMessage = (text) => {
    if (!activeChat) return;

    const newMessage = {
      id: Date.now(),
      sender: userRole,
      text: text,
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    const chatKey = activeChat.id;
    setMessages((prev) => ({
      ...prev,
      [chatKey]: [...(prev[chatKey] || []), newMessage],
    }));

    // Add system message for broadcasts
    if (activeChat.type === "all" || activeChat.type === "department") {
      const systemMessage = {
        id: Date.now() + 1,
        sender: "system",
        text: `Message sent to ${
          activeChat.type === "all" ? "all doctors" : activeChat.name + " department"
        }`,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => ({
        ...prev,
        [chatKey]: [...(prev[chatKey] || []), systemMessage],
      }));
    }
  };

  const currentMessages = activeChat ? messages[activeChat.id] || [] : [];

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSidebar
        activeChat={activeChat}
        onChatSelect={handleChatSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        userRole={userRole}
      />

      {activeChat ? (
        <div className="flex-1 flex flex-col">
          <ChatHeader chat={activeChat} userRole={userRole} />

          <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
            {currentMessages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500 text-sm">
                  No messages yet. Start the conversation!
                </div>
              </div>
            ) : (
              <>
                {currentMessages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} userRole={userRole} />
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <MessageInput
            onSendMessage={handleSendMessage}
            disabled={false}
            chatType={activeChat.type}
          />
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
