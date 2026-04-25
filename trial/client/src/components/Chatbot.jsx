import { useMemo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudBg from "../assets/cloud-bg.jpeg";
import drlogo from "../assets/drlogo.png";
import robot from "../assets/robot.jpg";
import ChatbotEnquiryForm from "./ChatbotEnquiryForm";
import "./Chatbot.css";

const translations = {
  en: {
    quickReplies: {
      services: "Browse Services",

      enquiry: "Enquiry Form",
      contact: "Contact Us",
      changeLanguage: "Change Language"
    },
    responses: {
      services: "We offer multiple services including training, cloud solutions, and other IT services. Please choose the service you are interested in.",
      enquiry: "You can submit your details using the enquiry form below and our team will contact you shortly.",
      contact: "You can reach us using the contact information on the Contact page or by submitting the enquiry form.",
      backToMain: "No problem! Here's what else I can help you with. 😊",
      cancel: "Alright. Let me know if you need help with anything else.",
      userCancelled: "Cancelled",
      userSubmitted: "I have submitted my details",
      enquirySuccess: "Thank you! Your enquiry has been submitted successfully. ✅\n\nOur team will contact you shortly.\n\nHow else can I assist you today?"
    },
    services: {
      courses: {
        label: "Our Courses",
        text: "Explore our industry-focused training programs including AWS, Azure, DevOps, and more designed to help you build strong cloud skills."
      },
      cloud: {
        label: "Cloud Services",
        text: "Our cloud services help businesses migrate, manage, and optimize their infrastructure using modern cloud platforms."
      },
      other: {
        label: "Other Services",
        text: "We also provide additional IT and consulting services to support organizations in their digital transformation journey."
      }
    },
    back: "⬅ Back",
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      service: "Interested Service",
      servicePlaceholder: "Select service",
      submit: "Submit",
      cancel: "Cancel",
      success: "Enquiry sent successfully!",
      error: "Something went wrong. Please try again.",
      submitting: "Submitting..."
    }
  },

  hi: {
    quickReplies: {
      services: "सेवाएँ देखें",
      enquiry: "पूछताछ फॉर्म",
      contact: "संपर्क करें",
      changeLanguage: "भाषा बदलें"
    },
    responses: {
      services: "हम प्रशिक्षण, क्लाउड समाधान और अन्य आईटी सेवाएँ प्रदान करते हैं। कृपया वह सेवा चुनें जिसमें आप रुचि रखते हैं।",
      enquiry: "आप नीचे दिए गए पूछताछ फॉर्म में अपनी जानकारी भर सकते हैं और हमारी टीम आपसे जल्द संपर्क करेगी।",
      contact: "आप संपर्क पेज पर दी गई जानकारी का उपयोग करके हमसे संपर्क कर सकते हैं या पूछताछ फॉर्म भर सकते हैं।",
      backToMain: "कोई बात नहीं! मैं और किस चीज़ में आपकी मदद कर सकता हूँ? 😊",
      cancel: "ठीक है। अगर आपको किसी और चीज़ में मदद चाहिए तो बताइए।",
      userCancelled: "रद्द किया",
      userSubmitted: "मैंने अपनी जानकारी जमा कर दी है",
      enquirySuccess: "धन्यवाद! आपका पूछताछ फॉर्म सफलतापूर्वक जमा हो गया है। ✅\n\nहमारी टीम जल्द ही आपसे संपर्क करेगी।\n\nमैं आपकी और किस प्रकार सहायता कर सकता हूँ?"
    },
    services: {
      courses: { label: "हमारे कोर्स", text: "हम AWS, Azure और DevOps जैसे उद्योग-केंद्रित प्रशिक्षण कार्यक्रम प्रदान करते हैं।" },
      cloud: { label: "क्लाउड सेवाएँ", text: "हम व्यवसायों को क्लाउड माइग्रेशन, प्रबंधन और अनुकूलन में मदद करते हैं।" },
      other: { label: "अन्य सेवाएँ", text: "हम डिजिटल ट्रांसफॉर्मेशन के लिए अतिरिक्त आईटी और कंसल्टिंग सेवाएँ भी प्रदान करते हैं।" }
    },
    back: "⬅ वापस",
    form: {
      fullName: "पूरा नाम", email: "ईमेल", phone: "फोन", service: "पसंदीदा सेवा",
      servicePlaceholder: "सेवा चुनें", submit: "जमा करें", cancel: "रद्द करें",
      success: "पूछताछ सफलतापूर्वक भेज दी गई है!", error: "कुछ गलत हो गया। कृपया फिर से प्रयास करें।", submitting: "जमा किया जा रहा है..."
    }
  },

  mr: {
    quickReplies: {
      services: "सेवा पहा", enquiry: "चौकशी फॉर्म", contact: "संपर्क करा", changeLanguage: "भाषा बदला"
    },
    responses: {
      services: "आम्ही प्रशिक्षण, क्लाउड सोल्युशन्स आणि इतर आयटी सेवा प्रदान करतो. कृपया तुम्हाला हवी असलेली सेवा निवडा.",
      enquiry: "तुम्ही खाली दिलेल्या चौकशी फॉर्ममध्ये तुमची माहिती भरू शकता आणि आमची टीम लवकरच तुमच्याशी संपर्क साधेल.",
      contact: "तुम्ही संपर्क पेजवरील माहिती वापरून आमच्याशी संपर्क करू शकता किंवा चौकशी फॉर्म भरू शकता.",
      backToMain: "काही हरकत नाही! मी तुम्हाला आणखी कशी मदत करू शकतो? 😊",
      cancel: "ठीक आहे. तुम्हाला अजून काही मदत हवी असल्यास मला सांगा",
      userCancelled: "रद्द केले",
      userSubmitted: "मी माझी माहिती सबमिट केली आहे",
      enquirySuccess: "धन्यवाद! तुमचा चौकशी फॉर्म यशस्वीरीत्या सबमिट झाला आहे। ✅\n\nआमची टीम लवकरच तुमच्याशी संपर्क साधेल।\n\nमी तुम्हाला आणखी कशी मदत करू शकतो?"
    },
    services: {
      courses: { label: "आमचे कोर्स", text: "AWS, Azure आणि DevOps सारख्या उद्योग-केंद्रित प्रशिक्षण कार्यक्रमांचा शोध घ्या." },
      cloud: { label: "क्लाउड सेवा", text: "आम्ही व्यवसायांना क्लाउड माइग्रेशन आणि व्यवस्थापनात मदत करतो." },
      other: { label: "इतर सेवा", text: "डिजिटल ट्रान्सफॉर्मेशनसाठी अतिरिक्त आयटी आणि कन्सल्टिंग सेवा देतो." }
    },
    back: "⬅ मागे",
    form: {
      fullName: "पूर्ण नाव", email: "ईमेल", phone: "फोन", service: "आवडलेल्या सेवा",
      servicePlaceholder: "सेवा निवडा", submit: "सबमिट करा", cancel: "रद्द करा",
      success: "तुमची चौकशी यशस्वीरीत्या पाठवली गेली आहे!", error: "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.", submitting: "सबमिट करत आहे..."
    }
  }
};

const quickReplies = [
  { id: 'services' },
  { id: 'enquiry' },
  { id: 'contact' },
  { id: 'changeLanguage' }
];

const defaultMessages = [
  { id: 'language', from: 'bot', text: 'Please select your preferred language' }
];

const MessageBubble = ({ children, from, isNew = false }) => (
  <div
    className={`flex items-end gap-2 ${from === 'user' ? 'justify-end' : 'justify-start'}`}
    style={isNew ? { animation: `bubbleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both` } : {}}
  >
    {children}
  </div>
);

const QuickBtn = ({ onClick, children, delay = 0 }) => (
  <button
    type="button"
    onClick={onClick}
    style={{ animationDelay: `${delay}ms` }}
    className="quick-reply-btn"
  >
    {children}
  </button>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showLauncher, setShowLauncher] = useState(false);
  const [messages, setMessages] = useState([...defaultMessages]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastSelected, setLastSelected] = useState(null);
  const [language, setLanguage] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const t = translations[language] || translations.en;
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  // Auto-open chatbot after 4 seconds
  const [entryMethod, setEntryMethod] = useState('manual'); // 'manual' or 'auto'
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntryMethod('auto');
      setShowLauncher(true);
      setIsOpen(true);
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, serviceOptions, isTyping]);

  const openChat = () => {
    setEntryMethod('manual');
    setIsOpen(true);
    setVisible(true);
  };

  const closeChat = () => {
    setVisible(false);
    setTimeout(() => {
      setEntryMethod('manual');
      setIsOpen(false);
      setMessages([...defaultMessages]);
      setServiceOptions([]);
      setLastSelected(null);
      setLanguage(null);
      setShowEnquiryForm(false);
    }, 300);
  };

  const responseMap = useMemo(() => ({
    services: { text: t.responses.services, navigateTo: '/services' },
    enquiry: { text: t.responses.enquiry },
    contact: { text: t.responses.contact, navigateTo: '/contact' }
  }), [t]);

  const handleQuickReply = (id) => {
    setServiceOptions([]);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (id === "changeLanguage") {
      setLanguage(null);
      setMessages([...defaultMessages]);
      setServiceOptions([]);
      setLastSelected(null);
      return;
    }
    const config = responseMap[id];
    if (!config) return;
    const time = Date.now();

    setMessages(prev => [...prev, { id: `user-${time}`, from: "user", text: t.quickReplies[id], isNew: true }]);
    setIsTyping(true);
    timeoutRef.current = setTimeout(() => {
      if (id === "enquiry") {
        setMessages(prev => [
          ...prev,
          { id: `bot-${Date.now()}`, from: "bot", text: config.text, isNew: true },
          { id: `form-${Date.now()}`, from: "bot", type: "enquiryForm", isNew: true }
        ]);
        setLastSelected(id);
        setIsTyping(false);
        return;
      }
      setMessages(prev => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: config.text, isNew: true }]);
      setLastSelected(id);
      if (config.navigateTo) {
        setTimeout(() => {
          navigate(config.navigateTo);
          if (window.innerWidth < 768) {
            setTimeout(() => {
              const section = config.navigateTo.replace('/', '');
              const el = document.getElementById(section);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
          }
        }, 200);
      }
      setIsTyping(false);
      if (id === "services") {
        setServiceOptions([
          { id: "courses", label: t.services.courses.label, navigateTo: "/training", text: t.services.courses.text },
          { id: "cloud", label: t.services.cloud.label, navigateTo: "/cloud-services", text: t.services.cloud.text },
          { id: "other", label: t.services.other.label, navigateTo: "/other-services", text: t.services.other.text }
        ]);
      };
    }, 1000);
  };

  const handleLanguageSelect = (lang, label, greeting) => {
    const time = Date.now();
    setLanguage(lang);
    setMessages(prev => [...prev, { id: `user-${time}`, from: "user", text: label, isNew: true }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: greeting, isNew: true }]);
      setIsTyping(false);
    }, 1000);
  };

  const showQuickReplies =
    messages[messages.length - 1]?.from === 'bot' &&
    messages[messages.length - 1]?.type !== "enquiryForm" &&
    serviceOptions.length === 0 &&
    !isTyping;

  return (
    <>
      {/* ── Launcher button ── */}
      {showLauncher && (
        <button
          type="button"
          onClick={() => isOpen ? closeChat() : openChat()}
          className="cb-launcher"
          aria-label="Toggle DrCloud Chatbot"
        >
          <img src={robot} alt="DrCloud Chatbot" className="w-full h-full object-cover" />
          <span className="cb-ping" />
        </button>
      )}

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          className="drcloud-chat-window fixed bottom-10 right-10 z-50 w-[330px] md:w-[390px] h-[560px] max-w-[95vw] max-h-[95vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${cloudBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: visible
              ? (entryMethod === 'auto' ? 'slowFadeIn 1.5s ease-out both' : 'windowIn 0.45s cubic-bezier(0.34,1.4,0.64,1) both')
              : 'windowOut 0.3s ease both'
          }}
        >
          {/* Frosted glass overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(240,248,255,0.55)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          {/* All content above the overlay */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

            {/* ── Header ── */}
            <div className="cb-header relative flex items-center justify-between px-4 py-3 border-b border-white/60">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={robot} alt="bot" className="cb-avatar-header" />
                  <span className="cb-online-dot" />
                </div>
              </div>

              {/* Center: Logo */}
              <div className="absolute left-[49%] transform -translate-x-1/2">
                <img src={drlogo} alt="DrCloud" className="h-14 object-contain drop-shadow-md" />
              </div>

              {/* Right: Close button */}
              <button type="button" onClick={closeChat} className="cb-close-btn" aria-label="Close chatbot">
                ✕
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 min-h-0 px-4 py-4 space-y-3 overflow-y-auto cb-scrollbar">
              {messages.map((msg) => (
                msg.type === "enquiryForm" ? (
                  <div
                    key={msg.id}
                    className="w-full"
                    style={{ animation: 'formSlideIn 0.45s cubic-bezier(0.34,1.3,0.64,1) both' }}
                  >
                    <div className="cb-form-card">
                      <ChatbotEnquiryForm
                        t={t}
                        onCancel={() => {
                          const time = Date.now();
                          setMessages(prev => {
                            const filtered = prev.filter(m => m.type !== "enquiryForm");
                            return [...filtered, { id: `user-${time}`, from: "user", text: t.responses.userCancelled, isNew: true }];
                          });
                          setIsTyping(true);
                          setTimeout(() => {
                            setMessages(prev => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: t.responses.cancel, isNew: true }]);
                            setIsTyping(false);
                            setLastSelected(null);
                          }, 1000);
                        }}
                        onSuccess={() => {
                          const time = Date.now();
                          setMessages(prev => {
                            const filtered = prev.filter(m => m.type !== "enquiryForm");
                            return [...filtered, { id: `user-${time}`, from: "user", text: t.responses.userSubmitted, isNew: true }];
                          });
                          setIsTyping(true);
                          setTimeout(() => {
                            setMessages(prev => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: t.responses.enquirySuccess, isNew: true }]);
                            setIsTyping(false);
                            setLastSelected(null);
                          }, 1000);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <MessageBubble key={msg.id} from={msg.from} isNew={msg.isNew}>
                    {msg.from === 'bot' && (
                      <img src={robot} alt="bot" className="w-8 h-8 rounded-full object-cover flex-shrink-0 shadow-sm border-2 border-white" />
                    )}
                    <div className={msg.from === 'user' ? 'cb-bubble-user' : 'cb-bubble-bot'}>
                      <span className="whitespace-pre-line">{msg.text}</span>
                    </div>
                  </MessageBubble>
                )
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-end gap-2" style={{ animation: 'bubbleIn 0.3s ease both' }}>
                  <img src={robot} alt="bot" className="w-8 h-8 rounded-full object-cover flex-shrink-0 shadow-sm border-2 border-white" />
                  <div className="cb-bubble-bot flex gap-1.5 items-center">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}

              {/* Quick replies */}
              {showQuickReplies && (
                <div className="flex items-start gap-2 mt-1">
                  <div className="w-8 flex-shrink-0" />
                  <div className="flex flex-col gap-2">
                    {language === null && (
                      <>
                        <QuickBtn delay={50} onClick={() => handleLanguageSelect("en", "English", "Hello! 👋 How can we assist you today?")}>English</QuickBtn>
                        <QuickBtn delay={120} onClick={() => handleLanguageSelect("hi", "हिंदी", "नमस्ते! 👋 हम आपकी कैसे मदद कर सकते हैं?")}>हिंदी</QuickBtn>
                        <QuickBtn delay={190} onClick={() => handleLanguageSelect("mr", "मराठी", "नमस्कार! 👋 आम्ही तुम्हाला कशी मदत करू शकतो?")}>मराठी</QuickBtn>
                      </>
                    )}
                    {language !== null && !showEnquiryForm &&
                      quickReplies
                        .filter(qr => qr.id !== lastSelected)
                        .map((qr, i) => (
                          <QuickBtn key={qr.id} delay={300 + i * 70} onClick={() => handleQuickReply(qr.id)}>
                            {t.quickReplies[qr.id]}
                          </QuickBtn>
                        ))}
                  </div>
                </div>
              )}

              {/* Service sub-options */}
              {serviceOptions.length > 0 && !isTyping && (
                <div className="flex items-start gap-2 mt-1">
                  <div className="w-8 flex-shrink-0" />
                  <div className="flex flex-col gap-2">
                    {serviceOptions
                      .filter(o => o.id !== lastSelected)
                      .map((option, i) => (
                        <QuickBtn
                          key={option.id}
                          delay={300 + i * 70}
                          onClick={() => {
                            const time = Date.now();
                            setMessages(prev => [...prev, { id: `user-${time}`, from: "user", text: option.label, isNew: true }]);
                            setIsTyping(true);
                            setTimeout(() => {
                              setMessages(prev => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: option.text, isNew: true }]);
                              setLastSelected(option.id);
                              setIsTyping(false);
                              setTimeout(() => navigate(option.navigateTo), 200);
                            }, 1000);
                          }}
                        >
                          {option.label}
                        </QuickBtn>
                      ))}
                    <QuickBtn delay={300 + serviceOptions.length * 70} onClick={() => {
                      const time = Date.now();
                      setServiceOptions([]);
                      setLastSelected(null);
                      setMessages(prev => [...prev, { id: `user-${time}`, from: "user", text: t.back, isNew: true }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        setMessages(prev => [...prev, {
                          id: `bot-${Date.now()}`,
                          from: "bot",
                          text: t.responses.backToMain,
                          isNew: true
                        }]);
                        setIsTyping(false);
                      }, 1000);
                    }}>
                      {t.back}
                    </QuickBtn>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* ── Footer ── */}
            <div className="px-4 py-2 border-t border-white/60 bg-white/40 text-center">
              <span className="text-[10px] text-slate-400 tracking-widest uppercase">✦ DrCloud Virtual Assistant</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
