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
      const res = await fetch(`https://crack-ai-server-zeta.vercel.app/test-ai?prompt=${encodeURIComponent(input)}`);
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
    <section className='bg-gray-900 py-16'>
        <div className="max-w-4xl mx-auto p-6  bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">🤖 Ask Joglu Anything</h2>

      <div className="space-y-2 max-h-96 overflow-y-auto mb-4 ">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-md ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
            <p><strong>{msg.role === 'user' ? 'You' : 'Joglu'}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pb-4">
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
          className="btn hover:bg-gray-300 border border-black"
        >
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </div>
    </section>
  );
};

export default ChatWithGemini;
