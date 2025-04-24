'use client';
import { useState, useRef } from 'react';

const ChatWithGemini = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(
        `https://crack-ai-server-zeta.vercel.app/test-ai?prompt=${encodeURIComponent(input)}`
      );
      const reply = await res.text();

      const aiMessage = { role: 'ai', text: reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error talking to AI:', error);
    }

    setInput('');
    setLoading(false);
  };



  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-2 py-10">
      <div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-xl flex flex-col h-[70vh] sm:h-[65vh] md:h-[60vh] overflow-hidden">
        <h2 className="text-lg sm:text-xl font-bold p-4 border-b border-gray-300">
          🤖 Ask Joglu Anything
        </h2>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-md ${
                msg.role === 'user'
                  ? 'bg-blue-100 text-right'
                  : 'bg-gray-200 text-left'
              }`}
            >
              <p>
                <strong>{msg.role === 'user' ? 'You' : 'Joglu'}:</strong> {msg.text}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t border-gray-300 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Tell me about yourself"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="btn border border-black bg-white hover:bg-gray-300 py-2 px-4 rounded"
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatWithGemini;
