'use client';
import { useState } from 'react';

const ChatWithGemini = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <section className="bg-gray-900 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">🤖 Ask Joglu Anything</h2>

        <div className="space-y-2 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto mb-4">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pb-2 sm:pb-4">
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
