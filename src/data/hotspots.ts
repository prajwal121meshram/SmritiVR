import { Hotspot } from '../types';

export const hotspotsData: Hotspot[] = [
  {
    id: 'central-dome',
    position: [0, 8.5, 0],
    cameraPosition: [0, 9.5, 12],
    cameraLookAt: [0, 8.5, 0],
    category: {
      en: "Crown Architecture",
      hi: "शीर्ष वास्तुकला",
      mr: "शिखर वास्तुकला"
    },
    title: {
      en: "The Great Bulbous Dome & Gilded Kalash",
      hi: "विशाल अमरूद गुंबद एवं कलश",
      mr: "भव्य घुमट आणि सुवर्ण कलश"
    },
    subtitle: {
      en: "Double-Dome Engineering Standing 73 Meters High",
      hi: "73 मीटर ऊँचा दोहरा गुंबद निर्माण",
      mr: "७३ मीटर उंच दुहेरी घुमट रचना"
    },
    description: {
      en: "The central marble dome, often called the 'Amrud' (guava dome) due to its graceful bulbous profile, sits atop a cylindrical drum 7 meters high. Its inner ceiling creates an acoustic resonance chamber, while the outer shell achieves majestic exterior proportions.",
      hi: "केंद्रीय संगमरमर का गुंबद, जिसे इसके सुंदर आकार के कारण 'अमरूद गुंबद' भी कहा जाता है, 7 मीटर ऊँचे ड्रम पर स्थित है। इसका आंतरिक गुंबद ध्वनि प्रतिध्वनि कक्ष बनाता है, जबकि बाहरी खोल भव्य दृश्य प्रस्तुत करता है।",
      mr: "मध्यवर्ती संगमरवरी घुमट ७ मीटर उंच दंडगोलाकार भागावर उभा आहे. याचा आतील भाग अद्भुत ध्वनी प्रतिध्वनी निर्माण करतो, तर बाहेरील रचना स्मारकाला भव्यता प्रदान करते."
    },
    details: {
      en: [
        "Double-dome acoustic engineering ensures internal sound reverberates for up to 28 seconds.",
        "Topped by a 9.5-meter gilded brass finial (Kalash) combining Islamic crescent with Hindu trident motifs.",
        "Built purely from translucent white Makrana marble blocks locked with iron clamps and mortar.",
        "Weight exceeds 12,000 metric tons, distributed evenly to underground foundation masonry wells."
      ],
      hi: [
        "दोहरा गुंबद यह सुनिश्चित करता है कि पवित्र आयतों का आंतरिक गूंज 28 सेकंड तक बना रहे।",
        "शीर्ष पर 9.5 मीटर ऊँचा कलश है, जिसमें इस्लामी अर्धचंद्र और पारंपरिक भारतीय कमल-त्रिशूल रूपांकनों का संगम है।",
        "मकराना के पारभासी श्वेत संगमरमर के पत्थरों को लोहे के क्लैंप और चूने-गारे से जोड़ा गया है।",
        "गुंबद का भार 12,000 मीट्रिक टन से अधिक है, जिसे भूमिगत कुओं के आधार पर संतुलित किया गया है।"
      ],
      mr: [
        "दुहेरी घुमट तंत्रज्ञानामुळे आतील ध्वनी तब्बल २८ सेकंद घुमत राहतो.",
        "शिखरावर ९.५ मीटर उंच पितळी कलश आहे, ज्यामध्ये चंद्रकोर आणि भारतीय कमळ-त्रिशूळ संस्कृतीचा संगम दिसतो.",
        "मकराणा येथील पांढऱ्या संगमरवराचे दगड लोखंडी क्लॅम्प्सने जोडले आहेत.",
        "घुमटाचे १२,००० टनांपेक्षा जास्त वजन जमिनीतील विहिरींच्या पायावर संतुलित केले आहे."
      ]
    },
    historicalEvidence: {
      en: "Documented in contemporary Mughal chronicler Abdul Hamid Lahori's 'Badshahnama' (1639-1647) with exact scaffolding calculations.",
      hi: "मुगल इतिहासकार अब्दुल हमीद लाहौरी के 'बादशाहनामा' में निर्माण एवं मचान की विस्तृत गणना दर्ज है।",
      mr: "मुघल इतिहासकार अब्दुल हमीद लाहोरी यांच्या 'बादशाहनामा' ग्रंथात याच्या बांधकामाची सविस्तर नोंद आढळते."
    },
    preservationStatus: {
      en: "Monitored via 3D LiDAR scanning for surface stress, thermal expansion, and pollutant deposition from Agra industrial corridor.",
      hi: "आगरा औद्योगिक प्रदूषण एवं तापीय विस्तार की निगरानी हेतु 3D LiDAR लेजर स्कैनिंग की जाती है।",
      mr: "प्रदूषण आणि हवेतील घटकांमुळे होणारे परिणाम मोजण्यासाठी 3D लेझर स्कॅनिंगने नियमित तपासणी होते."
    },
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Indo-Islamic Classical Mughal",
    materials: ["Makrana Translucent White Marble", "Gilded Brass Finial", "Iron Mortar Clamps"],
    dimensions: "Diameter: 17.7 m • Height: 73 m",
    audioTranscript: {
      en: "You are looking at the Great Bulbous Dome of the Taj Mahal. Rising 73 meters into the sky, it employs a sophisticated double-dome design where the outer marble dome achieves imperial scale, while the inner ceiling maintains intimate human proportion and majestic acoustics.",
      hi: "आप ताजमहल के विशाल अमरूद गुंबद को देख रहे हैं। 73 मीटर ऊँचा यह गुंबद दोहरी संरचना पर आधारित है, जो ध्वनि को मधुरता से गूँजने देती है और दूर से भव्य दिखाई देती है।",
      mr: "आपण ताजमहालाचा भव्य घुमट पाहत आहात. ७३ मीटर उंच असणारा हा घुमट दुहेरी रचनेवर आधारित असून आत अत्यंत शांत प्रतिध्वनी निर्माण करतो."
    }
  },
  {
    id: 'four-minarets',
    position: [-6.8, 4.5, 6.8],
    cameraPosition: [-10, 6, 12],
    cameraLookAt: [-6.8, 4.5, 6.8],
    category: {
      en: "Seismic Engineering",
      hi: "भूकंपीय इंजीनियरिंग",
      mr: "भूकंपरोधक अभियांत्रिकी"
    },
    title: {
      en: "The Four Tilting Minarets",
      hi: "चार सुरक्षात्मक झुकी हुई मीनारें",
      mr: "चार संरक्षक कलते मिनार"
    },
    subtitle: {
      en: "Ingenious 40-Meter Towers Inclined Outwards by 2.5 Degrees",
      hi: "2.5 डिग्री बाहर की ओर झुकी 40 मीटर ऊँची मीनारें",
      mr: "बाहेरच्या दिशेला २.५ अंश झुकलेले ४० मीटर उंच मिनार"
    },
    description: {
      en: "At each corner of the raised square plinth stands an octagonal minaret rising over 40 meters. In a stroke of seismic foresight, architect Ustad Ahmad Lahori deliberately designed them to tilt slightly outward, ensuring that in the event of an earthquake, the towers would collapse away from the central tomb.",
      hi: "मुख्य चबूतरे के चारों कोनों पर 40 मीटर से अधिक ऊँची अष्टकोणीय मीनारें स्थित हैं। वास्तुकार उस्ताद अहमद लाहौरी ने इन्हें जानबूझकर 2.5 डिग्री बाहर की ओर झुकाया ताकि भूकंप आने पर ये मुख्य मकबरे पर न गिरकर बाहर की ओर गिरें।",
      mr: "चबूतऱ्याच्या चारही कोपऱ्यांवर ४० मीटर उंच अष्टकोनी मिनार आहेत. भूकंप झाल्यास मुख्य समाधीवर कोणतीही हानी होऊ नये म्हणून वास्तुविशारदाने हे मिनार थोडे बाहेरच्या बाजूला झुकवून बांधले आहेत."
    },
    details: {
      en: [
        "Divided into three equal tiers by two balconies, capped with a domed chhatri pavilion.",
        "Constructed with white marble facing over brick core, banded with delicate black marble joints.",
        "Internal spiral staircase containing 163 sandstone steps leading to the upper balcony.",
        "Maintains perfect optical symmetry when viewed from the Southern Charbagh gateway."
      ],
      hi: [
        "दो छज्जों द्वारा तीन बराबर भागों में विभाजित, जिसके शीर्ष पर संगमरमरी छतरी है।",
        "ईंट के कोर पर सफेद संगमरमर की परत और काले संगमरमर की बारीक पट्टियां।",
        "ऊपरी छज्जे तक जाने के लिए 163 बलुआ पत्थर की सीढ़ियों वाला घुमावदार जीना।",
        "मुख्य दक्षिणी द्वार से देखने पर संपूर्ण स्मारक में पूर्ण ज्यामितीय समरूपता दिखाई देती है।"
      ],
      mr: [
        "दोन सज्जांनी तीन समान भागात विभागलेले आणि शिखरावर सुंदर संगमरवरी छत्री.",
        "विटांच्या पायावर पांढऱ्या संगमरवराचे आच्छादन आणि काळ्या संगमरवराची नक्षी.",
        "वर जाण्यासाठी आत १६३ पायऱ्यांचा गोलाकार जिना आहे.",
        "मुख्य प्रवेशद्वारातून पाहिल्यावर डोळ्यांना अचूक सममितीचा आनंद मिळतो."
      ]
    },
    historicalEvidence: {
      en: "Geodetic survey by Survey of India (1965-2018) confirmed intentional outward deflection of 3.8 cm at the crown.",
      hi: "भारतीय सर्वेक्षण विभाग के भूगणितीय सर्वेक्षण ने पुष्टि की है कि मीनारें जानबूझकर 3.8 सेमी बाहर की ओर झुकाई गई थीं।",
      mr: "सर्व्हे ऑफ इंडियाच्या नोंदीनुसार मिनारांचे बाहेर झुकणे ही जाणीवपूर्वक केलेली स्थापत्य रचना आहे."
    },
    preservationStatus: {
      en: "Continuous tilt-meter monitoring and subsurface ground-penetrating radar scans to assess Yamuna water table stability.",
      hi: "यमुना जलस्तर में उतार-चढ़ाव की निगरानी हेतु टिल्ट-मीटर और ग्राउंड पेनिट्रेटिंग रडार का उपयोग।",
      mr: "जमिनीतील पाणी पातळीचा परिणाम तपासण्यासाठी टिल्ट-मीटरने सतत निरीक्षण केले जाते."
    },
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Octagonal Mughal Minaret",
    materials: ["Makrana White Marble", "Lakhauri Brick Core", "Black Slate Inlay"],
    dimensions: "Height: 41.5 m • Base Diameter: 4.8 m",
    audioTranscript: {
      en: "Notice how the four slender minarets frame the central tomb. They are not perfectly vertical—they deliberately lean slightly outwards. This ingenious seventeenth-century earthquake engineering safeguards the sacred central dome.",
      hi: "ध्यान से देखें, ये चारों मीनारें पूरी तरह सीधी नहीं हैं, बल्कि बाहर की ओर झुकी हैं। यह 17वीं सदी की उन्नत भूकंपरोधी तकनीक का बेजोड़ नमूना है।",
      mr: "चारही मिनार थोडे बाहेरच्या दिशेने झुकलेले आहेत, जेणेकरून भूकंपाच्या वेळी मुख्य इमारतीला धक्का लागू नये."
    }
  },
  {
    id: 'pietra-dura',
    position: [0, 2.8, 4.2],
    cameraPosition: [0, 3.2, 6.5],
    cameraLookAt: [0, 2.8, 4.2],
    category: {
      en: "Decorative Inlay",
      hi: "पच्चीकारी शिल्पकला",
      mr: "पिएत्रा ड्युरा नक्षीकाम"
    },
    title: {
      en: "Parchin Kari (Pietra Dura Inlay Art)",
      hi: "पारचीन कारी (पिएट्रा ड्यूरा संगमरमर नक्काशी)",
      mr: "पारचीन कारी (रत्नजडीत संगमरवरी नक्षी)"
    },
    subtitle: {
      en: "28 Varieties of Semiprecious Gemstones Embedded in Marble",
      hi: "संगमरमर में जड़े 28 प्रकार के बहुमूल्य रत्न और पत्थर",
      mr: "संगमरवरात कोरलेले २८ प्रकारचे दुर्मीळ मौल्यवान खडे"
    },
    description: {
      en: "Parchin Kari is the imperial craft of embedding meticulously carved semiprecious stones into mortised white marble. A single flower petal barely an inch across often comprises over 60 individually cut gemstones including lapis lazuli, carnelian, jasper, jade, turquoise, and mother-of-pearl.",
      hi: "पारचीन कारी श्वेत संगमरमर में बारीक तराशे गए कीमती पत्थरों को जड़ने की शाही कला है। मात्र एक इंच के पुष्प में 60 से अधिक छोटे रत्न जैसे लाजवर्त (Lapis Lazuli), अकीक (Carnelian), यशब (Jade), और फिरोजा (Turquoise) जड़े गए हैं।",
      mr: "पारचीन कारी म्हणजे संगमरवरामध्ये विविध रंगांचे मौल्यवान खडे कोरून बसवण्याची अप्रतिम कला. एका लहान फुलामध्ये ६० पेक्षा जास्त सूक्ष्म खडे इतक्या अचूकतेने बसवले आहेत की सांधाही दिसत नाही."
    },
    details: {
      en: [
        "Lapis Lazuli imported from Badakhshan (Afghanistan), Jade from Khotan (China), Turquoise from Tibet, and Malachite from Russia.",
        "Inlay joints are polished flush with marble using corundum powder and oil to create a seamless touch.",
        "Contains calligraphic Quranic inscriptions by master calligrapher Amanat Khan Shirazi with optical size compensation.",
        "Flowers represent perpetual blooms in Islamic Jannat (Paradise) that never wither with time."
      ],
      hi: [
        "लाजवर्त अफगानिस्तान से, जेड चीन से, फिरोजा तिब्बत से और अकीक यमन से मंगवाया गया था।",
        "अमानत खान शिराजी द्वारा सुलेखन (कलीग्राफी) में अक्षरों का आकार ऊपर की ओर बड़ा किया गया ताकि नीचे से सब एक समान दिखें।",
        "रत्नों के जोड़ इतने बारीक हैं कि उंगली फेरने पर भी जोड़ का अहसास नहीं होता।",
        "ये फूल जन्नत (स्वर्ग) के उन सदाबहार बागों का प्रतीक हैं जो कभी नहीं मुरझाते।"
      ],
      mr: [
        "अफगाणिस्तानातून लाजवर्त, चीनमधून जेड, तिबेटमधून फिरोजा आणि येमेनमधून अकीक दगड मागवले गेले.",
        "अमानत खान यांनी केलेल्या कॅलिग्राफीमध्ये अक्षरे वरच्या बाजूला मोठी केली आहेत जेणेकरून खालून पाहताना ती एकसारखी दिसतात.",
        "अत्यंत गुळगुळीत पॉलिशमुळे खड्यांचे सांधे बोटांना जाणवतही नाहीत.",
        "हे फुलांचे नक्षीकाम स्वर्गातील कधीही न सुकणाऱ्या बागांचे प्रतीक मानले जाते."
      ]
    },
    historicalEvidence: {
      en: "Original royal court ledgers record purchases of over 42 quintals of semiprecious stones between 1632 and 1648.",
      hi: "शाही अभिलेखों के अनुसार 1632 से 1648 के बीच 42 क्विंटल से अधिक बहुमूल्य पत्थरों की खरीद दर्ज है।",
      mr: "मुघल दफ्तरातील नोंदीनुसार १६३२ ते १६४८ दरम्यान मोठ्या प्रमाणावर मौल्यवान खड्यांची खरेदी झाली होती."
    },
    preservationStatus: {
      en: "Undergoes periodic herbal mudpack treatments (Multani Mitti) by ASI to draw out atmospheric grime without damaging the fragile mineral inlays.",
      hi: "ASI द्वारा संगमरमर और रत्नों को नुकसान पहुँचाए बिना मुल्तानी मिट्टी का लेप लगाकर प्रदूषण हटाया जाता है।",
      mr: "रत्नांना हानी न पोहोचवता प्रदूषण काढण्यासाठी मुलतानी मातीचा लेप देऊन स्वच्छता केली जाते."
    },
    imageUrl: "https://images.unsplash.com/photo-1592635196078-9ffc8f5f629f?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Mughal Floral Pietra Dura",
    materials: ["Lapis Lazuli", "Carnelian", "Jade", "Turquoise", "Onyx", "Mother-of-Pearl"],
    dimensions: "Micro-inlay tolerances under 0.1 mm",
    audioTranscript: {
      en: "Look closely at the botanical inlays around the central arch. Known as Parchin Kari, master lapidaries carved semiprecious gems like lapis lazuli and carnelian so tightly into the marble that no seam can be felt with the human fingertip.",
      hi: "मुख्य मेहराब के चारों ओर पुष्प नक्काशी को देखें। इसे पारचीन कारी कहा जाता है, जिसमें लाजवर्त और अकीक जैसे रत्नों को संगमरमर में इस प्रकार तराशा गया है कि कोई जोड़ दिखाई नहीं देता।",
      mr: "कमानीवरील फुलांचे नक्षीकाम पाहा. याला पारचीन कारी म्हणतात. संगमरवरामध्ये लाजवर्त आणि इतर खडे इतक्या कौशल्याने बसवले आहेत की स्पर्श केल्यावर जोड समजत नाही."
    }
  },
  {
    id: 'main-entrance',
    position: [0, 2.5, 22],
    cameraPosition: [0, 4, 30],
    cameraLookAt: [0, 2.5, 22],
    category: {
      en: "Grand Gateway",
      hi: "शाही महाद्वार",
      mr: "मुख्य महाद्वार"
    },
    title: {
      en: "Darwaza-i-Rauza (The Great Gate)",
      hi: "दरवाज़ा-ए-रौज़ा (शाही प्रवेश द्वार)",
      mr: "दरवाझा-ए-रौझा (भव्य प्रवेशद्वार)"
    },
    subtitle: {
      en: "Monumental Red Sandstone Gateway Framing the White Vision",
      hi: "लाल बलुआ पत्थर का भव्य द्वार जो ताजमहल को फ्रेम करता है",
      mr: "लाल वालुकाश्माचा महाद्वार जो ताजमहालाचे पहिले दर्शन घडवतो"
    },
    description: {
      en: "The grand gateway (Darwaza-i-Rauza) marks the transition from the bustling mundane world to the serene paradise garden. Crafted from rich red sandstone with white marble geometric inlays, its central arch creates a breathtaking optical framing effect as visitors approach.",
      hi: "शाही प्रवेश द्वार सांसारिक दुनिया से शांत जन्नत रूपी बगीचे में प्रवेश का प्रतीक है। लाल बलुआ पत्थर और सफेद संगमरमर की ज्यामितीय नक्काशी से सजा यह द्वार जैसे-जैसे आप आगे बढ़ते हैं, ताजमहल को धीरे-धीरे प्रकट करता है।",
      mr: "दरवाझा-ए-रौझा हे बाहेरील जग आणि शांत स्वर्गीय बाग यांमधील प्रवेशद्वार आहे. लाल दगडावर पांढऱ्या संगमरवराचे नक्षीकाम केलेले हे महाद्वार ताजमहालाचे अविस्मरणीय दर्शन घडवते."
    },
    details: {
      en: [
        "Features 11 domed chhatris lined across the northern and southern rooflines representing 22 years of construction.",
        "Optical illusion: As you walk toward the gateway arch, the Taj Mahal appears to shrink; as you back away, it appears to grow larger.",
        "Inscribed with Surah Al-Fajr inviting the righteous soul to 'Enter thou my Paradise'.",
        "Massive brass-studded timber gates that were historically secured at sunset."
      ],
      hi: [
        "छत पर 11-11 छतरियों की कतारें हैं, जो निर्माण के कुल 22 वर्षों का प्रतीक मानी जाती हैं।",
        "प्रकाशीय भ्रम: जैसे ही आप द्वार के पास जाते हैं, ताजमहल छोटा प्रतीत होता है; और पीछे हटने पर बड़ा दिखाई देता है।",
        "द्वार पर पवित्र सूरह अल-फज्र की आयतें उत्कीर्ण हैं, जो आत्मा को 'मेरे स्वर्ग में प्रवेश करने' का निमंत्रण देती हैं।",
        "पीतल की कीलों से जड़े विशाल काष्ठ द्वार जो सूर्यास्त के समय बंद कर दिए जाते थे।"
      ],
      mr: [
        "छतावर ११-११ छत्र्यांच्या रांगा आहेत, ज्या बांधकामाच्या २२ वर्षांचे प्रतिनिधित्व करतात.",
        "दृष्टीभ्रम: तुम्ही दरवाज्याकडे जाताना ताज लहान वाटतो, आणि मागे येताना मोठा भासतो.",
        "प्रवेशद्वारावर स्वर्गात प्रवेश करण्याचे आमंत्रण देणारे सुंदर शिलालेख कोरलेले आहेत.",
        "पितळी खिळे जडवलेले मजबूत लाकडी दरवाजे जे ऐतिहासिक काळात सूर्यास्तानंतर बंद केले जात असत."
      ]
    },
    historicalEvidence: {
      en: "Completed in 1648, signed by calligrapher Abdul Haq (Amanat Khan Shirazi) at the base of the left interior arch.",
      hi: "1648 में पूर्ण हुआ, जिसके आंतरिक मेहराब के नीचे सुलेखक अमानत खान शिराजी के हस्ताक्षर मौजूद हैं।",
      mr: "१६४८ मध्ये पूर्ण झालेल्या या दरवाजावर सुलेखकार अमानत खान शिराजी यांची स्वाक्षरी कोरलेली आहे."
    },
    preservationStatus: {
      en: "Protected against tourist footfall erosion with elevated wooden pathways and high-precision load sensor monitoring.",
      hi: "पर्यटकों की भारी भीड़ से सुरक्षा के लिए विशेष लकड़ी के रास्ते और लोड सेंसर स्थापित किए गए हैं।",
      mr: "पर्यटकांच्या गर्दीमुळे होणारी झीज रोखण्यासाठी लाकडी मार्ग व सेन्सर बसवण्यात आले आहेत."
    },
    imageUrl: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Mughal Red Sandstone Gateway",
    materials: ["Fatehpur Sikri Red Sandstone", "White Marble Arabesque", "Cast Brass Hardware"],
    dimensions: "Height: 33 m • Width: 46 m",
    audioTranscript: {
      en: "As you step through Darwaza-i-Rauza, notice how the central pointed arch perfectly frames the gleaming white dome across the reflection pools. Inscribed here are verses inviting the soul to enter paradise.",
      hi: "दरवाज़ा-ए-रौज़ा से गुजरते हुए देखें कि इसका मेहराब कैसे सफेद ताजमहल को सुंदर फ्रेम में कैद करता है। यहाँ पवित्र आयतें आत्मा को जन्नत में प्रवेश का निमंत्रण देती हैं।",
      mr: "दरवाझा-ए-रौझातून आत जाताना पाहा, कमानीमधून समोरचा पांढरा शुभ्र ताज जलकुंडामध्ये कसा प्रतिबिंबित होतो."
    }
  },
  {
    id: 'charbagh-garden',
    position: [0, 0.4, 10],
    cameraPosition: [0, 4, 18],
    cameraLookAt: [0, 0.4, 10],
    category: {
      en: "Landscape Architecture",
      hi: "उद्यान वास्तुकला",
      mr: "उद्यान रचना"
    },
    title: {
      en: "The Persian Charbagh & Reflecting Pool",
      hi: "चारबाग (फारसी उद्यान) एवं हौज-ए-कौसर",
      mr: "चारबाग पर्शियन उद्यान आणि जलकुंड"
    },
    subtitle: {
      en: "Quadripartite Paradise Garden of Four Rivers of Milk, Honey, Water & Wine",
      hi: "चार पवित्र नदियों का प्रतीक चार भागों में विभाजित स्वर्ग का बगीचा",
      mr: "चार नद्यांचे प्रतीक असणारी चार भागात विभागलेली स्वर्गीय बाग"
    },
    description: {
      en: "The Charbagh is a 300-meter square garden laid out on the Persian quadripartite plan, symbolizing the Islamic Garden of Paradise (Jannat). Four sunken water channels divide the garden into four equal quadrants, intersecting at a central elevated marble lotus pond (Hawd al-Kawthar).",
      hi: "चारबाग 300 मीटर का वर्गाकार बगीचा है जो फारसी चार-भाग शैली पर आधारित है। चार जल नहरें बगीचे को चार भागों में बांटती हैं और केंद्र में संगमरमर के 'हौज-ए-कौसर' तालाब पर मिलती हैं, जिसमें मुख्य मकबरे का पूर्ण प्रतिबिंब दिखाई देता है।",
      mr: "चारबाग हे ३०० मीटर चौरस आकाराचे पर्शियन शैलीतील उद्यान आहे. चार जलवाहिन्या बागेला चार समान भागात विभागतात आणि मध्यभागी संगमरवरी जलाशयात एकत्र येतात."
    },
    details: {
      en: [
        "Designed to represent the four rivers of paradise described in the Quran: water, milk, wine, and honey.",
        "Central elevated marble cistern (Hawd al-Kawthar) provides the iconic mirror reflection of the Taj Mahal.",
        "Original Mughal flora included fruit trees (pomegranate, orange) and cypress trees symbolizing life and eternity.",
        "Underground terracotta piping system powered by Persian aqueducts (saqia) driven by bullocks from the Yamuna."
      ],
      hi: [
        "कुरान में वर्णित स्वर्ग की चार नदियों (जल, दूध, शहद और अमृत) का आध्यात्मिक प्रतीक।",
        "केंद्रीय संगमरमर का हौज (हौज-ए-कौसर) ताजमहल का अलौकिक दर्पण प्रतिबिंब प्रस्तुत करता है।",
        "मूल मुगल पौधों में जीवन और अनंतता के प्रतीक स्वरूप अनार, संतरा और सदाबहार सरू के पेड़ शामिल थे।",
        "यमुना नदी से रहट (पर्शियन व्हील) द्वारा भूमिगत पक्की मिट्टी की पाइपों से जल लाया जाता था।"
      ],
      mr: [
        "स्वर्गातील चार नद्यांचे प्रतीक असणारी पारंपारिक इस्लामिक चारबाग रचना.",
        "मध्यवर्ती संगमरवरी तलावात ताजमहालाचे अप्रतिम प्रतिबिंब उमटते.",
        "मूल मुघल काळात येथे डाळिंब, संत्री आणि सदाहरित सुरुची झाडे लावली गेली होती.",
        "यमुना नदीतून पाणी आणण्यासाठी मातीच्या नळांची आणि बैलांच्या राहाटांची रचना होती."
      ]
    },
    historicalEvidence: {
      en: "Mughal hydraulic diagrams preserved in the British Library demonstrate the complex siphon and copper fountain pressure balance.",
      hi: "ब्रिटिश लाइब्रेरी में संरक्षित मुगल जल-इंजीनियरिंग नक्शे तांबे के फव्वारों के दबाव और साइफन प्रणाली की पुष्टि करते हैं।",
      mr: "ब्रिटिश लायब्ररीतील जुन्या नकाशांवरून येथील तांब्याच्या कारंज्यांची जलअभियांत्रिकी स्पष्ट होते."
    },
    preservationStatus: {
      en: "Re-landscaped by ASI with sustainable drip irrigation while maintaining the historic fourfold geometric grid.",
      hi: "ASI द्वारा ऐतिहासिक ज्यामितीय स्वरूप को बनाए रखते हुए आधुनिक ड्रिप सिंचाई प्रणाली लगाई गई है।",
      mr: "ऐतिहासिक भौमितिक रचना कायम ठेवून आधुनिक ठिबक सिंचन पद्धतीने बागेची देखभाल केली जाते."
    },
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Persian Quadripartite Islamic Garden",
    materials: ["Makrana Marble Basin", "Terracotta Aqueduct Pipes", "Red Sandstone Paving"],
    dimensions: "300 m x 300 m Quadrangle",
    audioTranscript: {
      en: "Stand by the central marble pool. The Charbagh garden is designed as an earthly paradise. Its four channels symbolize the rivers of heaven, converging precisely at this pool where the Taj Mahal reflects with perfect stillness.",
      hi: "केंद्रीय जलकुंड के समीप खड़े होकर देखें। यह चारबाग धरती पर स्वर्ग का प्रतिरूप है। इसकी चार नहरें स्वर्ग की चार पवित्र नदियों का प्रतीक हैं।",
      mr: "मध्यवर्ती तलावाजवळ उभे राहून अनुभव घ्या. चारबाग ही स्वर्गाची प्रतिकृती मानली जाते आणि तिच्या शांत पाण्यात ताजमहाल विलोभनीय दिसतो."
    }
  },
  {
    id: 'cenotaphs-screen',
    position: [0, 1.8, 0],
    cameraPosition: [0, 2.5, 3.5],
    cameraLookAt: [0, 1.8, 0],
    category: {
      en: "Sacred Inner Chamber",
      hi: "पवित्र आंतरिक कक्ष",
      mr: "पवित्र गर्भगृह"
    },
    title: {
      en: "The Octagonal Marble Jali & Cenotaphs",
      hi: "अष्टकोणीय संगमरमर जाली एवं मज़ारें",
      mr: "अष्टकोनी संगमरवरी जाळी व समाध्या"
    },
    subtitle: {
      en: "Masterpiece Pierced Marble Screen Surrounding the Memorial Tombs",
      hi: "मकबरे के चारों ओर बारीक तराशी गई संगमरमर की जाली",
      mr: "समाधीभोवती कोरलेली अप्रतिम संगमरवरी जाळी"
    },
    description: {
      en: "In the central octagonal chamber lie the false cenotaphs of Mumtaz Mahal and Shah Jahan, enclosed by a delicate pierced marble screen (jali) carved from solid slabs. The actual graves rest in the crypt directly below at ground level according to Islamic tradition.",
      hi: "केंद्रीय अष्टकोणीय कक्ष में मुमताज़ महल और शाहजहाँ की प्रतीकात्मक मज़ारें स्थित हैं, जो ठोस संगमरमर से तराशी गई जाली से घिरी हैं। वास्तविक कब्रें इस्लामी परंपरा के अनुसार ठीक नीचे तहखाने में स्थित हैं।",
      mr: "मध्यवर्ती अष्टकोनी दालनात मुमताझ महल आणि शाहजहान यांच्या प्रतीकात्मक समाध्या आहेत, ज्यांच्याभोवती नाजूक संगमरवरी जाळी आहे. मूळ कबरी खाली तळघरात आहेत."
    },
    details: {
      en: [
        "The octagonal jali screen took 10 years to carve, replacing an original solid gold enameled screen.",
        "Mumtaz Mahal's cenotaph occupies the exact mathematical center; Shah Jahan's larger cenotaph was placed to the west after his death in 1666, creating the only asymmetry in the complex.",
        "Inscribed with the 99 Beautiful Names of Allah and heartfelt poetic eulogies.",
        "Perforated marble filigree allows ambient natural light to filter gently onto the cenotaphs."
      ],
      hi: [
        "अष्टकोणीय जाली को तराशने में 10 वर्ष लगे, जिसने सोने की मूल इनेमल स्क्रीन का स्थान लिया।",
        "मुमताज़ महल की मज़ार केंद्र में स्थित है; शाहजहाँ की मज़ार 1666 में उनकी मृत्यु के बाद पश्चिम में बनाई गई, जो पूरे स्मारक की एकमात्र विषमता है।",
        "मज़ारों पर अल्लाह के 99 पवित्र नाम और भावपूर्ण फारसी कविताएँ उत्कीर्ण हैं।",
        "बारीक जाली से प्राकृतिक प्रकाश छनकर आंतरिक कक्ष को दिव्य आभा प्रदान करता है।"
      ],
      mr: [
        "अष्टकोनी जाळी तयार करण्यासाठी १० वर्षे लागली.",
        "मुमताझ महलची समाधी मध्यभागी आहे, तर शाहजहान यांची समाधी १६६६ मध्ये बाजूला बांधल्यामुळे ही वास्तूतील एकमेव असममिती आहे.",
        "समाधीवर सुंदर सुलेखन आणि ईश्वराची ९९ नावे कोरलेली आहेत.",
        "जाळीतून येणारा सूर्यप्रकाश आत अत्यंत शांत आणि पवित्र वातावरण तयार करतो."
      ]
    },
    historicalEvidence: {
      en: "Recorded in the official court diary 'Amal-i Salih' by Muhammad Salih Kambo (1659).",
      hi: "मुहम्मद सालेह कंबोह की 'अमल-ए-सालेह' (1659) में जाली निर्माण का प्रामाणिक विवरण उपलब्ध है।",
      mr: "मुहम्मद सालेह कंबोह यांच्या 'अमल-ए-सालेह' या ऐतिहासिक दस्तऐवजात या जाळीचा उल्लेख आहे."
    },
    preservationStatus: {
      en: "Strictly climate-controlled; tourist entry inside the inner chamber perimeter is regulated to prevent humidity and carbon-dioxide degradation.",
      hi: "आंतरिक कक्ष में नमी और कार्बन डाइऑक्साइड से बचाव के लिए पर्यटकों की संख्या को नियंत्रित रखा जाता है।",
      mr: "आतील हवेतील ओलावा नियंत्रित ठेवण्यासाठी पर्यटकांच्या संख्येवर मर्यादा ठेवण्यात आली आहे."
    },
    imageUrl: "https://images.unsplash.com/photo-1592635196078-9ffc8f5f629f?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Pierced Marble Filigree (Jali)",
    materials: ["Makrana Marble Monolith", "Semi-Precious Gem Inlays", "Gold Leaf Accents"],
    dimensions: "Screen Height: 2.1 m • Chamber Span: 24 m",
    audioTranscript: {
      en: "You are inside the serene inner sanctum. The octagonal pierced marble screen filters sunlight onto the cenotaphs. Notice that Shah Jahan's tomb, added years later, is the only asymmetrical element in this monument of perfect symmetry.",
      hi: "आप पवित्र आंतरिक कक्ष में हैं। बारीक संगमरमरी जाली सूर्य के प्रकाश को छानकर लाती है। ध्यान दें कि शाहजहाँ की मज़ार पूरे स्मारक का एकमात्र असममित तत्व है।",
      mr: "आपण शांत गर्भगृहात आहात. संगमरवरी जाळीतून प्रकाश आत येतो. संपूर्ण रचनेमध्ये केवळ शाहजहान यांची नंतर जोडलेली समाधी हीच एकमेव असममित गोष्ट आहे."
    }
  },
  {
    id: 'yamuna-foundation',
    position: [0, -0.5, -8],
    cameraPosition: [0, 2, -14],
    cameraLookAt: [0, 0, -4],
    category: {
      en: "Civil Engineering",
      hi: "सिविल इंजीनियरिंग",
      mr: "पाया स्थापत्य अभियांत्रिकी"
    },
    title: {
      en: "Yamuna Embankment & Timber Well Foundations",
      hi: "यमुना नदी तट एवं काष्ठ कूप (Well) नींव",
      mr: "यमुना नदीकाठ व लाकडी विहिरींचा पाया"
    },
    subtitle: {
      en: "Deep Masonry Caissons & Sal Wood Beams Requiring Constant Moisture",
      hi: "यमुना जल से नमी प्राप्त करने वाली महोगनी/साल की लकड़ी की भूमिगत नींव",
      mr: "यमुनेच्या पाण्यावर अवलंबून असणारा साल वृक्षाच्या लाकडाचा खोल पाया"
    },
    description: {
      en: "The immense weight of the Taj Mahal rests upon a revolutionary foundation system of deep masonry wells filled with rubble and mortar, tied together with massive timbers of ebony and sal wood. This wood maintains its rock-like tensile strength only when submerged in constant river moisture.",
      hi: "ताजमहल का भारी वजन गहरे कुओं और आबनूस/साल की लकड़ी के विशाल स्लीपरों की अनूठी नींव पर टिका है। यह लकड़ी पानी की निरंतर नमी में रहने पर ही पत्थर जितनी मजबूत बनी रहती है।",
      mr: "ताजमहालाचा प्रचंड भार नदीकाठच्या विहिरी आणि साल वृक्षाच्या मजबूत लाकडावर आधारित पायावर पेलला गेला आहे. हे लाकूड यमुनेच्या पाण्यामुळे कायम ओले राहून दगडासारखे टणक बनते."
    },
    details: {
      en: [
        "Dozens of circular masonry wells were sunk deep into the riverbed until reaching hard bedrock.",
        "Timbers of Mahogany, Sal, and Teak become petrified and structurally reinforced when saturated with water.",
        "Falling Yamuna water tables in modern decades pose the greatest structural threat to the foundation beams.",
        "Supported on the north by a monumental red sandstone terrace overlooking the river curve."
      ],
      hi: [
        "नदी के तल में दर्जनों गहरे कुएं खोदे गए और उनमें चूना, गारा और पत्थर भरा गया।",
        "साल और शीशम की लकड़ी पानी में रहकर पत्थर जैसी कठोर (petrified) हो जाती है।",
        "आधुनिक समय में यमुना के घटते जलस्तर से नींव की लकड़ी सूखने का खतरा उत्पन्न होता है।",
        "उत्तर दिशा में नदी के किनारे लाल बलुआ पत्थर का विशाल चबूतरा बनाया गया है।"
      ],
      mr: [
        "नदीच्या पात्रात खोल विहिरी खोदून त्यामध्ये चुना आणि दगडांचा भराव करण्यात आला.",
        "साल आणि शिसवीचे लाकूड पाण्यामध्ये अधिक कठीण आणि टिकाऊ बनते.",
        "सध्याच्या काळात यमुनेतील पाण्याचे कमी होणारे प्रमाण या पायासाठी चिंतेची बाब आहे.",
        "उत्तर बाजूला नदीच्या दिशेने लाल वालुकाश्माचा मोठा कट्टा बांधला आहे."
      ]
    },
    historicalEvidence: {
      en: "Archaeological excavations and acoustic sonar tests conducted by the Central Building Research Institute (CBRI) in 1993 verified the well-caisson integrity.",
      hi: "1993 में केंद्रीय भवन अनुसंधान संस्थान (CBRI) के सोनार परीक्षणों ने कूप-नींव प्रणाली की पुष्टि की।",
      mr: "१९९३ मध्ये CBRI संस्थेने केलेल्या चाचण्यांमध्ये या लाकडी विहिरींच्या पायाची मजबूती सिद्ध झाली."
    },
    preservationStatus: {
      en: "Groundwater piezometers and telemetry stations continuously log moisture levels along the Yamuna bank.",
      hi: "यमुना किनारे भूमिगत जलस्तर और नमी की मात्रा मापने के लिए पीज़ोमीटर सेंसर लगाए गए हैं।",
      mr: "जमिनीतील ओलावा मोजण्यासाठी नदीकाठावर आधुनिक सेन्सर्स बसवण्यात आले आहेत."
    },
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    architecturalStyle: "Mughal Subterranean Caisson Foundation",
    materials: ["Sal Wood Timbers", "Hydraulic Lime Mortar", "Lakhauri Brick Masonry Wells"],
    dimensions: "Well Depth: 12-15 m below water table",
    audioTranscript: {
      en: "Look behind the monument towards River Yamuna. The entire structure rests upon deep masonry wells and massive sal wood beams. This revolutionary foundation relies on river moisture to maintain its strength.",
      hi: "स्मारक के पीछे यमुना नदी की ओर देखें। पूरी इमारत गहरे कुओं और साल की लकड़ी के विशाल बीम पर टिकी है, जिन्हें मजबूत रहने के लिए नदी की नमी की आवश्यकता होती है।",
      mr: "स्मारकाच्या मागे यमुना नदीकडे पाहा. संपूर्ण वास्तू लाकडी तुळया आणि विहिरींच्या पायावर उभी आहे. यमुनेचे पाणी या लाकडाला वर्षानुवर्षे मजबूत ठेवते."
    }
  }
];
