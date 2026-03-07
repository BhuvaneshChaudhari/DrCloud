import { useMemo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudBg from "../assets/cloud-bg.jpeg";
import drlogo from "../assets/drlogo1.png";
import robot from "../assets/robot.jpg";

const quickReplies = [
  { id: 'services', label: 'Browse Services' },
  { id: 'enquiry', label: 'Enquiry Page' },
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
    text: 'You can browse our services, submit an enquiry, or contact us directly.'
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([...defaultMessages]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastSelected, setLastSelected] = useState(null);
  const navigate = useNavigate();

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, serviceOptions]);

  const responseMap = useMemo(
    () => ({
      services: {
        text:
          'We offer multiple services including training, cloud solutions, and other IT services. Please choose the service you are interested in.',
        navigateTo: '/services'
      },

      enquiry: {
        text:
          'You can submit your details on our enquiry page and our team will contact you shortly.',
        navigateTo: '/enquiry'
      },
      contact: {
        text:
          'You can reach us using the contact information on the Contact page or by submitting the enquiry form.',
        navigateTo: '/contact'
      }
    }),
    []
  );

  const handleQuickReply = (id) => {
    const config = responseMap[id];
    if (!config) return;

    const time = Date.now();

    setMessages(prev => [
      ...prev,
      { id: `user-${time}`, from: "user", text: quickReplies.find(q => q.id === id)?.label ?? "" }
    ]);

    setIsTyping(true);

    setTimeout(() => {

      setMessages(prev => [
        ...prev,
        { id: `bot-${Date.now()}`, from: "bot", text: config.text }
      ]);

      setLastSelected(id);

      // 👇 MOVE IT HERE
      if (id === "services") {
        setServiceOptions([
          {
            id: "courses",
            label: "Our Courses",
            navigateTo: "/training",
            text: "Explore our industry-focused training programs including AWS, Azure, DevOps, and more designed to help you build strong cloud skills."
          },
          {
            id: "cloud",
            label: "Cloud Services",
            navigateTo: "/cloud-services",
            text: "Our cloud services help businesses migrate, manage, and optimize their infrastructure using modern cloud platforms."
          },
          {
            id: "other",
            label: "Other Services",
            navigateTo: "/other-services",
            text: "We also provide additional IT and consulting services to support organizations in their digital transformation journey."
          }
        ]);
      }

      if (config.navigateTo) {
        navigate(config.navigateTo);
      }

      setIsTyping(false);

    }, 1000);

  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen((v) => !v);
          setMessages([...defaultMessages]);
          setServiceOptions([]);
          setLastSelected(null);
        }}
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-gradient-to-tr from-drcloudBlue to-sky-400 shadow-soft flex items-center justify-center text-white overflow-hidden"
        aria-label="Open DrCloud Chatbot"
      >
        <img
          src={robot}
          alt="DrCloud Chatbot"
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div
          className="fixed bottom-10 right-5 z-40 w-[340px] h-[480px] max-w-[95vw] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
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
                setServiceOptions([]);
                setLastSelected(null);
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
              
              {isTyping && (
                <div className="flex items-start gap-2">
                  <img
                    src={robot}
                    alt="bot"
                    className="w-9 h-9 object-contain mt-1"
                  />
                  <div className="chatbot-bubble-bot flex gap-1 items-center">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}
            {messages[messages.length - 1]?.from === 'bot' && serviceOptions.length === 0 && !isTyping && (
              <div className="flex items-start gap-2 mt-2">
                <img
                  src={robot}
                  alt="bot"
                  className="w-9 h-9 object-contain mt-1"
                />

                <div className="flex flex-col gap-3">
                  {quickReplies
                    .filter(qr => qr.id !== lastSelected)
                    .map((qr) => (
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
            {serviceOptions.length > 0 && !isTyping && (
              <div className="flex items-start gap-2 mt-2">
                <img
                  src={robot}
                  alt="bot"
                  className="w-9 h-9 object-contain mt-1"
                />

                <div className="flex flex-col gap-3">

                  {serviceOptions
                    .filter(option => option.id !== lastSelected)
                    .map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {

                        const time = Date.now();

                        setMessages(prev => [
                          ...prev,
                          { id: `user-${time}`, from: "user", text: option.label }
                        ]);
                      
                        setIsTyping(true);

                        setTimeout(() => {

                          setMessages(prev => [
                            ...prev,
                            { id: `bot-${Date.now()}`, from: "bot", text: option.text }
                          ]);

                          setLastSelected(option.id);

                          setIsTyping(false);

                          navigate(option.navigateTo);

                        }, 1000);

                      }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                    >
                      {option.label}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      setServiceOptions([]);
                      setLastSelected(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                  >
                    ⬅ Back
                  </button>

                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;