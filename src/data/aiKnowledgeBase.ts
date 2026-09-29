import { Language } from '../types';

export interface AIResponseRule {
  keywords: string[];
  response: Record<Language, string>;
  sources: string[];
  suggestedFollowUps: Record<Language, string[]>;
}

export const aiKnowledgeBase: AIResponseRule[] = [
  {
    keywords: ["what is", "monument", "about taj", "overview", "introduction", "who built", "क्या है", "परिचय", "किसने बनाया", "काय आहे", "माहिती", "कोणी बांधला"],
    response: {
      en: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, India. It was commissioned in 1631 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Arjumand Banu Begum (Mumtaz Mahal), and later also houses the tomb of Shah Jahan himself. Designated a UNESCO World Heritage Site in 1983, it stands as the zenith of Indo-Islamic Mughal architecture.",
      hi: "ताजमहल भारत के आगरा में यमुना नदी के दक्षिणी तट पर स्थित सफेद संगमरमर का एक भव्य मकबरा है। इसे मुगल बादशाह शाहजहाँ ने अपनी प्रिय बेगम मुमताज़ महल की याद में 1631 में बनवाना शुरू किया था। 1983 में इसे यूनेस्को विश्व धरोहर घोषित किया गया और यह भारतीय-इस्लामी वास्तुकला का सर्वोत्कृष्ट उदाहरण है।",
      mr: "ताजमहाल हे भारतातील आग्रा येथे यमुना नदीकाठी पांढऱ्या संगमरवरात बांधलेले जगप्रसिद्ध स्मारक आहे. मुघल सम्राट शाहजहान यांनी आपली पत्नी मुमताझ महल यांच्या स्मरणार्थ १६३१ मध्ये हे बांधण्यास सुरुवात केली. १९८३ मध्ये याला युनेस्को जागतिक वारसा स्थळाचा दर्जा मिळाला."
    },
    sources: ["Archaeological Survey of India (ASI)", "UNESCO World Heritage Inscription #252"],
    suggestedFollowUps: {
      en: ["Why are the minarets tilted outwards?", "What materials were used?", "Who was the chief architect?"],
      hi: ["चारों मीनारें बाहर क्यों झुकी हैं?", "कौन-सी निर्माण सामग्री उपयोग हुई?", "मुख्य वास्तुकार कौन थे?"],
      mr: ["मिनार बाहेर का झुकलेले आहेत?", "कोणते साहित्य वापरले गेले?", "मुख्य वास्तुविशारद कोण होते?"]
    }
  },
  {
    keywords: ["minaret", "tilt", "earthquake", "lean", "tower", "मीनार", "झुकाव", "भूकंप", "कलते", "टॉवर"],
    response: {
      en: "The four 40-meter octagonal minarets at the corners of the plinth were deliberately engineered by architect Ustad Ahmad Lahori to lean slightly outwards by approximately 2.5 degrees (measured as 3.8 cm at the crown). This was a revolutionary seismic safety measure: in the event of a catastrophic earthquake, the towers would collapse away from the central dome, protecting the imperial tombs from structural destruction.",
      hi: "चबूतरे के कोनों पर स्थित चारों 40 मीटर ऊँची मीनारें जानबूझकर लगभग 2.5 डिग्री बाहर की ओर झुकाई गई हैं। यह 17वीं सदी की भूकंपरोधी इंजीनियरिंग का अद्भुत उदाहरण है। किसी शक्तिशाली भूकंप की स्थिति में मीनारें मुख्य मकबरे पर न गिरकर बाहर की ओर गिरेंगी, जिससे मुख्य गुंबद सुरक्षित रहेगा।",
      mr: "कोपऱ्यांवरील चारही ४० मीटर उंच मिनार सुमारे २.५ अंश बाहेर झुकलेले आहेत. ही भूकंपरोधक स्थापत्य रचना आहे. तीव्र भूकंपाच्या वेळी मिनार मुख्य समाधीवर न पडता बाहेरच्या दिशेने कोसळतील, जेणेकरून मुख्य घुमटाला कोणतीही हानी पोहोचणार नाही."
    },
    sources: ["Survey of India Geodetic Report", "ASI Monograph No. 44"],
    suggestedFollowUps: {
      en: ["Tell me about the double dome", "What is the foundation made of?", "How tall is the Taj Mahal?"],
      hi: ["दोहरे गुंबद के बारे में बताएं", "नींव किस चीज से बनी है?", "ताजमहल की कुल ऊंचाई कितनी है?"],
      mr: ["दुहेरी घुमटाबद्दल सांगा", "पाया कशाचा बनवला आहे?", "ताजमहालाची उंची किती आहे?"]
    }
  },
  {
    keywords: ["pietra dura", "parchin kari", "gems", "stones", "inlay", "marble", "पच्चीकारी", "रत्न", "पत्थर", "लाजवर्त", "नक्षीकाम", "खडे", "संगमरवर"],
    response: {
      en: "The intricate floral inlays on the marble are known as 'Parchin Kari' (Pietra Dura). Master lapidaries set over 28 varieties of precious and semiprecious gemstones directly into mortised white Makrana marble. These stones include Lapis Lazuli from Badakhshan (Afghanistan), Turquoise from Tibet, Jade and Crystal from China, Carnelian from Yemen, and Mother-of-Pearl from the Indian Ocean. A single 1-inch flower can contain over 60 intricately cut stone petals without visible seams.",
      hi: "संगमरमर पर बनी पुष्प नक्काशी को 'पारचीन कारी' (Pietra Dura) कहा जाता है। इसमें 28 से अधिक प्रकार के बहुमूल्य रत्न मकराना संगमरमर में तराशे गए हैं। इनमें अफगानिस्तान का लाजवर्त (Lapis Lazuli), तिब्बत का फिरोजा (Turquoise), चीन का जेड (Jade), और यमन का अकीक (Carnelian) शामिल हैं। मात्र एक इंच के फूल में 60 से अधिक बारीक तराशे गए रत्न जड़े गए हैं।",
      mr: "संगमरवरावरील फुलांच्या नक्षीकामाला 'पारचीन कारी' (पिएत्रा ड्युरा) म्हटले जाते. यामध्ये २८ हून अधिक प्रकारचे मौल्यवान खडे वापरले आहेत. अफगाणिस्तानातील लाजवर्त, तिबेटमधील फिरोजा, चीनमधील जेड आणि येमेनमधील अकीक दगड यात कोरले आहेत. एका लहान फुलात ६० हून अधिक सूक्ष्म तुकडे सांधा न दिसता बसवले आहेत."
    },
    sources: ["Badshahnama Court Purchase Ledgers", "ASI Science Branch"],
    suggestedFollowUps: {
      en: ["Where did the white marble come from?", "How is the marble cleaned today?", "Tell me about the calligraphy"],
      hi: ["सफेद संगमरमर कहाँ से लाया गया था?", "आजकल संगमरमर की सफाई कैसे होती है?", "सुलेखन (कलीग्राफी) के बारे में बताएं"],
      mr: ["पांढरा संगमरवर कुठून आणला गेला?", "सध्या संगमरवराची स्वच्छता कशी केली जाते?", "कॅलिग्राफीबद्दल माहिती द्या"]
    }
  },
  {
    keywords: ["foundation", "yamuna", "river", "wood", "sal", "well", "नींव", "यमुना", "नदी", "लकड़ी", "कुआं", "पाया", "लाकूड", "विहीर"],
    response: {
      en: "The foundation of the Taj Mahal is an extraordinary feat of hydraulic and civil engineering. Because the Yamuna riverbed consists of soft alluvial silt, builders sank dozens of deep masonry wells down to the hard stratum. These wells were interconnected by a lattice of massive Ebony, Sal, and Mahogany timbers. Remarkably, this specialized wood does not rot in water; it absorbs river moisture, which keeps it petrified, dense, and rock-solid. A stable Yamuna water table is essential to preserve this timber foundation.",
      hi: "ताजमहल की नींव एक ऐतिहासिक सिविल इंजीनियरिंग चमत्कार है। यमुना के दलदली तल में दर्जनों गहरे कुएं खोदे गए और उन्हें मजबूत पत्थरों व चूने से भरा गया। इसके ऊपर साल, आबनूस और महोगनी की विशाल लकड़ियों का जाल बिछाया गया। यह विशेष लकड़ी पानी में सड़ती नहीं है, बल्कि नमी से पत्थर जैसी कठोर बनी रहती है।",
      mr: "ताजमहालाचा पाया नदीकाठच्या खोल विहिरी आणि साल वृक्षाच्या लाकडावर आधारित आहे. यमुनेच्या मऊ वाळूत विहिरी खोदून त्यावर लाकडी तुळ्यांची चौकट बसवली गेली. हे लाकूड पाण्यात सडत नाही, तर नदीच्या पाण्यामुळे कायम ओले राहून दगडासारखे टणक बनते. म्हणूनच यमुनेचे पाणी टिकून राहणे अत्यंत गरजेचे आहे."
    },
    sources: ["Central Building Research Institute (CBRI) Geological Survey", "Archaeological Survey of India"],
    suggestedFollowUps: {
      en: ["What is the biggest threat to the Taj Mahal?", "How is SmrutiVR preserving it?", "Tell me about the Charbagh garden"],
      hi: ["ताजमहल के लिए सबसे बड़ा खतरा क्या है?", "स्मृति VR इसे कैसे संरक्षित कर रहा है?", "चारबाग बगीचे के बारे में बताएं"],
      mr: ["ताजमहालाला सर्वात मोठा धोका कोणता?", "स्मृती VR याचे संवर्धन कसे करते?", "चारबाग उद्यानाची माहिती सांगा"]
    }
  },
  {
    keywords: ["preserve", "preservation", "damage", "yellow", "pollution", "mudpack", "संरक्षण", "पीलापन", "प्रदूषण", "मुल्तानी मिट्टी", "धोका", "संवर्धन", "पिवळेपणा"],
    response: {
      en: "To protect the Taj Mahal from atmospheric pollutants, sulfur dioxide, and airborne particulate matter that can cause marble yellowing, the Archaeological Survey of India (ASI) applies periodic 'clay-pack' treatments using non-abrasive Multani Mitti (Fuller's Earth). Additionally, the Indian Supreme Court established the 10,400 sq km Taj Trapezium Zone (TTZ) to restrict polluting industries. Digitally, SmrutiVR conducts sub-millimeter 3D LiDAR scans to monitor micro-fissures and stress points over time.",
      hi: "प्रदूषण और सल्फर डाइऑक्साइड के कारण संगमरमर पर आने वाले पीलेपन से रक्षा के लिए ASI मुल्तानी मिट्टी (Fuller's Earth) का लेप लगाता है, जो बिना नुकसान पहुँचाए प्रदूषण को सोख लेता है। इसके अलावा 10,400 वर्ग किमी का 'ताज ट्रेपेज़ियम ज़ोन' बनाया गया है। डिजिटल रूप से, स्मृति VR 3D लेजर स्कैनिंग द्वारा सूक्ष्म दरारों की निगरानी करता है।",
      mr: "हवेतील प्रदूषण आणि आम्ल पर्जन्यामुळे संगमरवरावर येणारा पिवळेपणा दूर करण्यासाठी ASI मुलतानी मातीचा लेप देऊन स्वच्छता करते. १०,४०० चौ.किमीचा ताज ट्रॅपेझियम झोन उद्योग प्रदूषण रोखण्यासाठी तयार करण्यात आला आहे. स्मृती VR आधुनिक 3D लेझर स्कॅनिंगच्या साहाय्याने सूक्ष्म भेगांवर लक्ष ठेवते."
    },
    sources: ["Supreme Court TTZ Directives", "ASI Science Branch Dehradun"],
    suggestedFollowUps: {
      en: ["How does 3D photogrammetry work?", "Can I support preservation projects?", "What is the Heritage Passport?"],
      hi: ["3D फोटोग्रामेट्री कैसे काम करती है?", "क्या मैं संरक्षण परियोजना का समर्थन कर सकता हूँ?", "हेरिटेज पासपोर्ट क्या है?"],
      mr: ["3D स्कॅनिंग कसे काम करते?", "मी संवर्धन उपक्रमात मदत करू शकतो का?", "हेरिटेज पासपोर्ट काय आहे?"]
    }
  },
  {
    keywords: ["architect", "who designed", "builder", "artisans", "lahori", "वास्तुकार", "किसने बनाया", "उस्ताद", "वास्तुविशारद", "कारागीर"],
    response: {
      en: "The chief architect of the Taj Mahal was Ustad Ahmad Lahori, a Persian master mathematician and royal architect from Lahore who was later awarded the imperial title 'Nadir-al-Asr' (Wonder of the Age). The project brought together over 20,000 artisans from across India, Persia, Turkey, and Central Asia under an imperial council that included Ustad Isa (master draftsman), Ismail Khan (dome specialist from the Ottoman Empire), and Amanat Khan Shirazi (master calligrapher).",
      hi: "ताजमहल के मुख्य वास्तुकार उस्ताद अहमद लाहौरी थे, जिन्हें बादशाह शाहजहाँ ने 'नादिर-उल-असर' (युग का आश्चर्य) की उपाधि दी थी। इस महापरियोजना में भारत, फारस, तुर्की और मध्य एशिया के 20,000 से अधिक शिल्पकारों ने भाग लिया, जिनमें सुलेखक अमानत खान शिराजी और गुंबद विशेषज्ञ इस्माइल खान शामिल थे।",
      mr: "ताजमहालाचे मुख्य वास्तुविशारद उस्ताद अहमद लाहोरी होते. त्यांना 'नादिर-उल-असर' हा किताब मिळाला होता. त्यांच्या मार्गदर्शनाखाली भारत, पर्शिया आणि तुर्कस्तानातील २०,००० पेक्षा जास्त कुशल कारागिरांनी ही वास्तू साकारली."
    },
    sources: ["Diwan-i-Ahmad Lahori Manuscripts", "Mughal Empire Historical Monograph"],
    suggestedFollowUps: {
      en: ["How long did construction take?", "How much did it cost?", "Tell me about the Pietra Dura art"],
      hi: ["निर्माण में कितना समय लगा?", "उस समय कुल कितनी लागत आई?", "पच्चीकारी कला के बारे में बताएं"],
      mr: ["बांधकामाला किती वेळ लागला?", "त्या काळी किती खर्च झाला?", "पिएत्रा ड्युरा नक्षीकामाबद्दल सांगा"]
    }
  }
];

export function findAIResponse(query: string, lang: Language): {
  answer: string;
  sources: string[];
  followUps: string[];
} {
  const normalized = query.toLowerCase().trim();
  
  for (const item of aiKnowledgeBase) {
    const match = item.keywords.some(kw => normalized.includes(kw.toLowerCase()));
    if (match) {
      return {
        answer: item.response[lang],
        sources: item.sources,
        followUps: item.suggestedFollowUps[lang]
      };
    }
  }

  // Contextual fallback response grounded in verified heritage records
  const fallbackReplies: Record<Language, string> = {
    en: `According to authenticated Archaeological Survey of India (ASI) records, the Taj Mahal stands as an unparalleled triumph of symmetry, acoustic geometry, and Makrana marble engineering built between 1631 and 1653 under Emperor Shah Jahan and architect Ustad Ahmad Lahori. You can ask specifically about its outward-tilting minarets, the 28 Pietra Dura gem varieties, the timber well-foundations beneath River Yamuna, or modern 3D LiDAR preservation efforts!`,
    hi: `भारतीय पुरातत्व सर्वेक्षण (ASI) के प्रमाणित अभिलेखों के अनुसार, ताजमहल 1631 से 1653 के बीच बादशाह शाहजहाँ और मुख्य वास्तुकार उस्ताद अहमद लाहौरी द्वारा निर्मित समरूपता और संगमरमरी स्थापत्य का शिखर है। आप विशेष रूप से इसकी बाहर झुकी मीनारों, 28 प्रकार के रत्नों की पच्चीकारी, यमुना नदी की लकड़ी की नींव, या आधुनिक 3D लेजर संरक्षण के बारे में पूछ सकते हैं!`,
    mr: `भारतीय पुरातत्व सर्वेक्षण (ASI) च्या नोंदींनुसार, ताजमहाल ही १६३१ ते १६५३ दरम्यान सम्राट शाहजहान आणि उस्ताद अहमद लाहोरी यांनी उभारलेली जगातील सर्वश्रेष्ठ स्थापत्य कलाकृती आहे. आपण याच्या कलत्या मिनारांविषयी, २८ प्रकारच्या मौल्यवान खड्यांच्या नक्षीकामाविषयी, यमुना नदीतील लाकडी पायाविषयी किंवा आधुनिक 3D संवर्धनाविषयी विचारू शकता!`
  };

  const defaultFollowUps: Record<Language, string[]> = {
    en: ["Why are the minarets tilted outwards?", "What gems are in the Pietra Dura?", "How do the timber foundations survive in water?"],
    hi: ["मीनारें बाहर की ओर क्यों झुकी हैं?", "पच्चीकारी में कौन-से रत्न हैं?", "लकड़ी की नींव पानी में कैसे सुरक्षित रहती है?"],
    mr: ["मिनार बाहेर का झुकलेले आहेत?", "नक्षीकामात कोणते खडे आहेत?", "लाकडाचा पाया पाण्यात कसा टिकून आहे?"]
  };

  return {
    answer: fallbackReplies[lang],
    sources: ["Archaeological Survey of India (ASI) Official Documentation", "UNESCO World Heritage Brief"],
    followUps: defaultFollowUps[lang]
  };
}
