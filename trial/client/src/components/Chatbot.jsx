import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudBg from "../assets/cloud-bg.jpeg";
import drlogo from "../assets/drlogo1.png";
import robot from "../assets/robot.jpg";

const quickReplies = [
  { id: 'browse', label: 'Browse Courses' },
  { id: 'support', label: 'Ask About Support' },
  { id: 'contact', label: 'Contact Us' }
];
const defaultMessages = [
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
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([...defaultMessages]);
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
      setTimeout(() => {
        if (config.navigateTo.startsWith('#')) {
          const section = document.querySelector(config.navigateTo);
          section?.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(config.navigateTo);
          window.scrollTo(0, 0);
        }
      }, 1000);
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
        <div
          className="fixed bottom-10 right-5 z-40 w-[420px] h-[560px] max-w-[95vw] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${cloudBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="flex items-center justify-between px-4 h-[70px] border-b border-slate-100">
            <img
              src={drlogo}
              alt="DrCloud"
              className="h-20 object-contain"
            />

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setMessages([...defaultMessages]);
              }}
              className="text-slate-400 hover:text-slate-500 text-lg"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.from === 'bot' && (
                  <img
                    src={robot}
                    alt="bot"
                    className="w-9 h-9 object-contain mt-1"
                  />
                )}

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
            {messages[messages.length - 1]?.from === 'bot' && (
              <div className="flex items-start gap-2 mt-2">
                <img
                  src={robot}
                  alt="bot"
                  className="w-9 h-9 object-contain mt-1"
                />

                <div className="flex flex-col gap-3">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.id}
                      type="button"
                      onClick={() => handleQuickReply(qr.id)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;