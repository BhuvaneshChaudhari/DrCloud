import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quickReplies = [
  { id: 'browse', label: 'Browse Courses' },
  { id: 'support', label: 'Ask About Support' },
  { id: 'contact', label: 'Contact Us' }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      from: 'bot',
      text: 'Hello! 👋 How can we assist you today?'
    },
    {
      id: 'hint',
      from: 'bot',
      text: 'You can browse our courses, ask about support, or contact us directly.'
    }
  ]);
  const navigate = useNavigate();

  const responseMap = useMemo(
    () => ({
      browse: {
        text:
          'You can explore all our cloud and DevOps courses on the Training page. I recommend starting with AWS, Azure, or our DevOps Bootcamp. When you are ready, click Get Started to send us an enquiry.',
        navigateTo: '/training'
      },
      support: {
        text:
          'Our support team is available to help with course selection, onboarding, and technical questions. Please fill out the enquiry form and we will get back to you shortly.',
        navigateTo: '/enquiry'
      },
      contact: {
        text:
          'You can reach us using the contact information on the Contact page or by submitting the enquiry form. Click Get Started to share your details.',
        navigateTo: '/contact'
      }
    }),
    []
  );

  const handleQuickReply = (id) => {
    const config = responseMap[id];
    if (!config) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, from: 'user', text: quickReplies.find((q) => q.id === id)?.label ?? '' },
      { id: `bot-${Date.now()}`, from: 'bot', text: config.text },
      {
        id: `bot-cta-${Date.now()}`,
        from: 'bot',
        text:
          'Whenever you are ready, click the Get Started button to send us your enquiry and our team will reach out.'
      }
    ]);

    if (config.navigateTo) {
      navigate(config.navigateTo);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-gradient-to-tr from-drcloudBlue to-sky-400 shadow-soft flex items-center justify-center text-white"
        aria-label="Open DrCloud Chatbot"
      >
        <span className="text-2xl">💬</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-40 w-80 max-w-[90vw] drcloud-card flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                DrCloud Assistant
              </div>
              <div className="text-[11px] text-emerald-500">Online · Instant replies</div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-500 text-lg"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto max-h-80 bg-sky-50/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={
                    msg.from === 'user'
                      ? 'chatbot-bubble-user'
                      : 'chatbot-bubble-bot'
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 pb-3 pt-1 border-t border-slate-100 bg-white/70">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((qr) => (
                <button
                  key={qr.id}
                  type="button"
                  onClick={() => handleQuickReply(qr.id)}
                  className="text-xs px-3 py-1.5 rounded-full bg-sky-100 text-drcloudBlue font-medium hover:bg-sky-200"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

