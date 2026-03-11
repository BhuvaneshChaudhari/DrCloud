import { useMemo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudBg from "../assets/cloud-bg.jpeg";
import drlogo from "../assets/drlogo1.png";
import robot from "../assets/robot.jpg";
import ChatbotEnquiryForm from "./ChatbotEnquiryForm";

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
      cancel: "Alright. Let me know if you need help with anything else.",
      userCancelled: "Cancelled",
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
      cancel: "ठीक है। अगर आपको किसी और चीज़ में मदद चाहिए तो बताइए।",
      userCancelled: "रद्द किया",
      enquirySuccess: "धन्यवाद! आपका पूछताछ फॉर्म सफलतापूर्वक जमा हो गया है। ✅\n\nहमारी टीम जल्द ही आपसे संपर्क करेगी।\n\nमैं आपकी और किस प्रकार सहायता कर सकता हूँ?"
    },

    services: {
      courses: {
        label: "हमारे कोर्स",
        text: "हम AWS, Azure और DevOps जैसे उद्योग-केंद्रित प्रशिक्षण कार्यक्रम प्रदान करते हैं।"
      },
      cloud: {
        label: "क्लाउड सेवाएँ",
        text: "हम व्यवसायों को क्लाउड माइग्रेशन, प्रबंधन और अनुकूलन में मदद करते हैं।"
      },
      other: {
        label: "अन्य सेवाएँ",
        text: "हम डिजिटल ट्रांसफॉर्मेशन के लिए अतिरिक्त आईटी और कंसल्टिंग सेवाएँ भी प्रदान करते हैं।"
      }
    },
    back: "⬅ वापस",
    form: {
      fullName: "पूरा नाम",
      email: "ईमेल",
      phone: "फोन",
      service: "पसंदीदा सेवा",
      servicePlaceholder: "सेवा चुनें",
      submit: "जमा करें",
      cancel: "रद्द करें",
      success: "पूछताछ सफलतापूर्वक भेज दी गई है!",
      error: "कुछ गलत हो गया। कृपया फिर से प्रयास करें।",
      submitting: "जमा किया जा रहा है..."
    }

  },

  mr: {
    quickReplies: {
      services: "सेवा पहा",
      enquiry: "चौकशी फॉर्म",
      contact: "संपर्क करा",
      changeLanguage: "भाषा बदला"
    },

    responses: {
      services: "आम्ही प्रशिक्षण, क्लाउड सोल्युशन्स आणि इतर आयटी सेवा प्रदान करतो. कृपया तुम्हाला हवी असलेली सेवा निवडा.",
      enquiry: "तुम्ही खाली दिलेल्या चौकशी फॉर्ममध्ये तुमची माहिती भरू शकता आणि आमची टीम लवकरच तुमच्याशी संपर्क साधेल.",
      contact: "तुम्ही संपर्क पेजवरील माहिती वापरून आमच्याशी संपर्क करू शकता किंवा चौकशी फॉर्म भरू शकता.",
      cancel: "ठीक आहे. तुम्हाला अजून काही मदत हवी असल्यास मला सांगा",
      userCancelled: "रद्द केले",
      enquirySuccess: "धन्यवाद! तुमचा चौकशी फॉर्म यशस्वीरीत्या सबमिट झाला आहे। ✅\n\nआमची टीम लवकरच तुमच्याशी संपर्क साधेल।\n\nमी तुम्हाला आणखी कशी मदत करू शकतो?"
    },

    services: {
      courses: {
        label: "आमचे कोर्स",
        text: "AWS, Azure आणि DevOps सारख्या उद्योग-केंद्रित प्रशिक्षण कार्यक्रमांचा शोध घ्या."
      },
      cloud: {
        label: "क्लाउड सेवा",
        text: "आम्ही व्यवसायांना क्लाउड माइग्रेशन आणि व्यवस्थापनात मदत करतो."
      },
      other: {
        label: "इतर सेवा",
        text: "डिजिटल ट्रान्सफॉर्मेशनसाठी अतिरिक्त आयटी आणि कन्सल्टिंग सेवा देतो."
      }
    },
    back: "⬅ मागे",
    form: {
      fullName: "पूर्ण नाव",
      email: "ईमेल",
      phone: "फोन",
      service: "आवडलेल्या सेवा",
      servicePlaceholder: "सेवा निवडा",
      submit: "सबमिट करा",
      cancel: "रद्द करा",
      success: "तुमची चौकशी यशस्वीरीत्या पाठवली गेली आहे!",
      error: "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.",
      submitting: "सबमिट करत आहे..."
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
  {
    id: 'language',
    from: 'bot',
    text: 'Please select your preferred language'
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([...defaultMessages]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastSelected, setLastSelected] = useState(null);
  const [language, setLanguage] = useState(null);
  const t = translations[language] || translations.en;
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const navigate = useNavigate();

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, serviceOptions]);

  const responseMap = useMemo(
    () => ({
      services: {
        text: t.responses.services,
        navigateTo: '/services'
      },

      enquiry: {
        text: t.responses.enquiry,

      },
      contact: {
        text: t.responses.contact,
        navigateTo: '/contact'
      }
    }),
    [t]
  );

  const handleQuickReply = (id) => {

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

    setMessages(prev => [
      ...prev,
      { id: `user-${time}`, from: "user", text: t.quickReplies[id] }
    ]);

    setIsTyping(true);

    setTimeout(() => {

      if (id === "enquiry") {

        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            from: "bot",
            text: config.text
          },
          {
            id: `form-${Date.now()}`,
            from: "bot",
            type: "enquiryForm"
          }
        ]);

        setLastSelected(id);
        setIsTyping(false);
        return;
      }

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
            label: t.services.courses.label,
            navigateTo: "/training",
            text: t.services.courses.text
          },
          {
            id: "cloud",
            label: t.services.cloud.label,
            navigateTo: "/cloud-services",
            text: t.services.cloud.text
          },
          {
            id: "other",
            label: t.services.other.label,
            navigateTo: "/other-services",
            text: t.services.other.text
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
          setLanguage(null);
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
          className="fixed bottom-10 right-5 z-40 w-[400px] h-[560px] max-w-[95vw] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
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
                setLanguage(null);
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
                  {msg.type === "enquiryForm" ? (
                    <ChatbotEnquiryForm
                      t={t}
                      onCancel={() => {

                        const time = Date.now();

                        setMessages(prev => {
                          const filtered = prev.filter(msg => msg.type !== "enquiryForm");

                          return [
                            ...filtered,
                            {
                              id: `user-${time}`,
                              from: "user",
                              text: t.responses.userCancelled
                            }
                          ];
                        });

                        setIsTyping(true);

                        setTimeout(() => {
                          setMessages(prev => [
                            ...prev,
                            {
                              id: `bot-${Date.now()}`,
                              from: "bot",
                              text: t.responses.cancel
                            }
                          ]);

                          setIsTyping(false);
                          setLastSelected(null);
                        }, 1000);

                      }}

                      onSuccess={() => {

                        const time = Date.now();

                        setMessages(prev => {
                          const filtered = prev.filter(msg => msg.type !== "enquiryForm");

                          return [
                            ...filtered,
                            {
                              id: `user-${time}`,
                              from: "user",
                              text: t.responses.userSubmitted
                            }
                          ];
                        });

                        setIsTyping(true);

                        setTimeout(() => {
                          setMessages(prev => [
                            ...prev,
                            {
                              id: `bot-${Date.now()}`,
                              from: "bot",
                              text: t.responses.enquirySuccess
                            }
                          ]);

                          setIsTyping(false);
                          setLastSelected(null);
                        }, 1000);

                      }}
                    />
                  ) : (
                    msg.text
                  )}
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
            {messages[messages.length - 1]?.from === 'bot' &&
              messages[messages.length - 1]?.type !== "enquiryForm" &&
              serviceOptions.length === 0 &&
              !isTyping && (
                <div className="flex items-start gap-2 mt-2">
                  <img
                    src={robot}
                    alt="bot"
                    className="w-9 h-9 object-contain mt-1"
                  />

                  <div className="flex flex-col gap-3">

                    {/* LANGUAGE SELECTION */}
                    {language === null && (
                      <>
                        <button
                          onClick={() => {

                            const time = Date.now();

                            setLanguage("en");

                            setMessages(prev => [
                              ...prev,
                              { id: `user-${time}`, from: "user", text: "English" }
                            ]);

                            setIsTyping(true);

                            setTimeout(() => {
                              setMessages(prev => [
                                ...prev,
                                { id: `bot-${Date.now()}`, from: "bot", text: "Hello! 👋 How can we assist you today?" }
                              ]);

                              setIsTyping(false);
                            }, 1000);

                          }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                        >
                          English
                        </button>

                        <button
                          onClick={() => {

                            const time = Date.now();

                            setLanguage("hi");

                            setMessages(prev => [
                              ...prev,
                              { id: `user-${time}`, from: "user", text: "हिंदी" }
                            ]);

                            setIsTyping(true);

                            setTimeout(() => {
                              setMessages(prev => [
                                ...prev,
                                { id: `bot-${Date.now()}`, from: "bot", text: "नमस्ते! 👋 हम आपकी कैसे मदद कर सकते हैं?" }
                              ]);

                              setIsTyping(false);
                            }, 1000);

                          }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                        >
                          हिंदी
                        </button>

                        <button
                          onClick={() => {

                            const time = Date.now();

                            setLanguage("mr");

                            setMessages(prev => [
                              ...prev,
                              { id: `user-${time}`, from: "user", text: "मराठी" }
                            ]);

                            setIsTyping(true);

                            setTimeout(() => {
                              setMessages(prev => [
                                ...prev,
                                { id: `bot-${Date.now()}`, from: "bot", text: "नमस्कार! 👋 आम्ही तुम्हाला कशी मदत करू शकतो?" }
                              ]);

                              setIsTyping(false);
                            }, 1000);

                          }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                        >
                          मराठी
                        </button>
                      </>
                    )}

                    {/* QUICK REPLIES (ONLY AFTER LANGUAGE SELECTED) */}
                    {language !== null && !showEnquiryForm &&
                      quickReplies
                        .filter(qr => qr.id !== lastSelected)
                        .map((qr) => (
                          <button
                            key={qr.id}
                            type="button"
                            onClick={() => handleQuickReply(qr.id)}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow hover:scale-105 transition w-fit"
                          >
                            {t.quickReplies[qr.id]}
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
                    {t.back}
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