"use client";
import { useState } from "react";
import { chatTopics, findReply } from "./chatTopics";

interface ChatMessage {
    id: number;
    from: "bot" | "user";
    text: string;
}

const WHATSAPP_NUMBER = "971000000000"; // TODO: replace with real business WhatsApp number

const initialMessages: ChatMessage[] = [
    {
        id: 0,
        from: "bot",
        text: "Hi there! 👋 I'm the Creative42 AI assistant. How can I help you today? Pick a topic below or type your question!",
    },
];

const ChatWidgetV1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [input, setInput] = useState("");

    const pushMessage = (from: ChatMessage["from"], text: string) => {
        setMessages((prev) => [...prev, { id: prev.length, from, text }]);
    };

    const handleTopicClick = (topicId: string) => {
        const topic = chatTopics.find((t) => t.id === topicId);
        if (!topic) return;
        pushMessage("user", topic.label);
        setTimeout(() => pushMessage("bot", topic.reply), 300);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;
        pushMessage("user", text);
        setInput("");
        setTimeout(() => pushMessage("bot", findReply(text)), 300);
    };

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-widget-panel">
                    <div className="chat-widget-header">
                        <span className="chat-widget-avatar">
                            <i className="iconoir-sparks" />
                        </span>
                        <div className="chat-widget-header-info">
                            <span className="chat-widget-name">Creative42 AI</span>
                            <span className="chat-widget-status">
                                <span className="chat-widget-status-dot" /> Online
                            </span>
                        </div>
                        <button
                            type="button"
                            className="chat-widget-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <i className="iconoir-xmark" />
                        </button>
                    </div>

                    <div className="chat-widget-body">
                        {messages.map((message) => (
                            <div className={`chat-widget-message chat-widget-message-${message.from}`} key={message.id}>
                                {message.text}
                            </div>
                        ))}

                        <div className="chat-widget-topics">
                            {chatTopics.map((topic) => (
                                <button
                                    type="button"
                                    className="chat-widget-topic"
                                    key={topic.id}
                                    onClick={() => handleTopicClick(topic.id)}
                                >
                                    {topic.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <form className="chat-widget-input-row" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" aria-label="Send message">
                            <i className="iconoir-send" />
                        </button>
                    </form>
                </div>
            )}

            <div className="chat-widget-buttons">
                <a
                    className="chat-widget-btn chat-widget-btn-whatsapp"
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                >
                    <i className="lab la-whatsapp" />
                </a>

                <button
                    type="button"
                    className="chat-widget-btn chat-widget-btn-ai"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Chat with Creative42 AI"
                >
                    <span className="chat-widget-tooltip">Chat with Creative42 AI</span>
                    <span className="chat-widget-dot" />
                    <i className="iconoir-sparks" />
                </button>
            </div>
        </div>
    );
};

export default ChatWidgetV1;
