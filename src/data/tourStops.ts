import { TourStop, TeleportWaypoint } from '../types';

export const tourStopsData: TourStop[] = [
  {
    id: 1,
    hotspotId: 'main-entrance',
    title: {
      en: "1. The Grand Gateway (Darwaza-i-Rauza)",
      hi: "1. शाही महाद्वार (दरवाज़ा-ए-रौज़ा)",
      mr: "१. भव्य महाद्वार (दरवाझा-ए-रौझा)"
    },
    narration: {
      en: "Welcome to the Taj Mahal Virtual Heritage Walk. We begin at the majestic southern gate, Darwaza-i-Rauza. Notice how the pointed red sandstone arch frames the pure white mausoleum in the distance.",
      hi: "ताजमहल वर्चुअल हेरिटेज वॉक में आपका स्वागत है। हम दक्षिणी शाही द्वार, दरवाज़ा-ए-रौज़ा से शुरुआत करते हैं। ध्यान दें कि लाल बलुआ पत्थर का मेहराब दूर से सफेद संगमरमर के मकबरे को कैसे फ्रेम करता है।",
      mr: "ताजमहाल व्हर्च्युअल फेरफटक्यामध्ये आपले स्वागत आहे. आपण सुरुवातीला दक्षिणेकडील महाद्वाराजवळ उभे आहोत. कमानीतून दिसणारे ताजमहालाचे पहिले दृश्य अप्रतिम आहे."
    },
    cameraPosition: [0, 5, 26],
    targetPosition: [0, 3, 20],
    historicalNote: {
      en: "Completed in 1648, featuring 22 little domed chhatris symbolizing the 22 years of total construction time.",
      hi: "1648 में पूर्ण, जिसकी 22 छोटी छतरियां निर्माण के कुल 22 वर्षों का प्रतीक हैं।",
      mr: "१६४८ मध्ये पूर्ण झालेल्या या दरवाजावरील २२ छत्र्या बांधकामाच्या २२ वर्षांचे प्रतीक आहेत."
    },
    architecturalHighlight: {
      en: "Optical framing: stepping forward appears to expand the horizon while the tomb holds majestic proportion.",
      hi: "प्रकाशीय प्रभाव: आगे बढ़ने पर दृश्य का विस्तार होता है जबकि मुख्य मकबरा अपनी भव्यता बनाए रखता है।",
      mr: "दृष्टीभ्रम: पुढे जाताना वास्तूचा विस्तार जाणवतो."
    },
    durationSec: 15
  },
  {
    id: 2,
    hotspotId: 'charbagh-garden',
    title: {
      en: "2. The Charbagh Paradise Garden & Reflecting Pool",
      hi: "2. चारबाग (स्वर्ग का उद्यान) एवं जल कुंड",
      mr: "२. चारबाग स्वर्गीय उद्यान आणि प्रतिबिंब तलाव"
    },
    narration: {
      en: "We advance down the central pathway into the Persian Charbagh garden. Four stone watercourses divide the landscape into four quadrants representing the celestial rivers of paradise.",
      hi: "हम चारबाग के केंद्रीय मार्ग पर आगे बढ़ते हैं। चार पत्थर की नहरें बगीचे को चार भागों में बांटती हैं जो स्वर्ग की चार पवित्र नदियों का प्रतीक हैं।",
      mr: "आपण बागेच्या मुख्य मार्गावरून पुढे जात आहोत. चार जलवाहिन्या बागेला चार भागात विभागतात."
    },
    cameraPosition: [0, 3.5, 14],
    targetPosition: [0, 2, 8],
    historicalNote: {
      en: "The central marble cistern reflects the Taj Mahal with mirror symmetry when water is still.",
      hi: "केंद्रीय संगमरमर का कुंड शांत जल में ताजमहल का हुबहू दर्पण प्रतिबिंब दिखाता है।",
      mr: "मध्यवर्ती संगमरवरी तलावात संपूर्ण ताजमहालाचे प्रतिबिंब दिसते."
    },
    architecturalHighlight: {
      en: "Strict bilateral symmetry across north-south and east-west axes.",
      hi: "उत्तर-दक्षिण और पूर्व-पश्चिम अक्षों पर पूर्ण ज्यामितीय समरूपता।",
      mr: "चारही दिशांना अचूक सममितीची रचना."
    },
    durationSec: 15
  },
  {
    id: 3,
    title: {
      en: "3. The Elevated Marble Plinth & Terrace",
      hi: "3. विशाल संगमरमरी चबूतरा",
      mr: "३. उंच संगमरवरी चबूतरा"
    },
    narration: {
      en: "Ascending to the elevated terrace. The 7-meter high plinth is paved entirely with pure Makrana marble, isolating the monument against the sky so no earthly buildings compete with its silhouette.",
      hi: "हम 7 मीटर ऊँचे मुख्य संगमरमरी चबूतरे पर आ गए हैं। इसे पूरे सफेद संगमरमर से बनाया गया है ताकि नीले आकाश की पृष्ठभूमि में केवल ताजमहल की भव्यता ही दिखे।",
      mr: "आपण ७ मीटर उंच चबूतऱ्यावर आलो आहोत. संपूर्ण पांढऱ्या संगमरवरामुळे आकाशाच्या पार्श्वभूमीवर ही वास्तू अप्रतिम दिसते."
    },
    cameraPosition: [0, 3.8, 8.5],
    targetPosition: [0, 2.5, 2],
    historicalNote: {
      en: "The plinth sits directly on reinforced masonry wells to distribute its massive load along the Yamuna bank.",
      hi: "चबूतरे का भार नदी के किनारे गहरे कुओं और नींव के जाले पर संतुलित किया गया है।",
      mr: "हा चबूतरा नदीकाठच्या खोल विहिरींच्या पायावर पेलला गेला आहे."
    },
    architecturalHighlight: {
      en: "Geometric floor tiling creates subtle optical contrast under bright sun and moonlight.",
      hi: "फर्श पर संगमरमर की टाइलिंग धूप और चाँदनी में अद्भुत चमक बिखेरती है।",
      mr: "संगमरवरी फरशी सूर्यप्रकाश आणि पौर्णिमेच्या चांदण्यात चकाकते."
    },
    durationSec: 14
  },
  {
    id: 4,
    hotspotId: 'central-dome',
    title: {
      en: "4. The Great Bulbous Onion Dome",
      hi: "4. मुख्य विशाल अमरूद गुंबद",
      mr: "४. मुख्य भव्य घुमट"
    },
    narration: {
      en: "Look upward at the 73-meter central dome. Engineered with a double-shell structure, the inner dome creates a reverberating acoustic sanctuary, while the outer shell defines Agra's iconic skyline.",
      hi: "ऊपर 73 मीटर ऊँचे केंद्रीय गुंबद को देखें। दोहरी संरचना वाला यह गुंबद भीतर मधुर गूँज उत्पन्न करता है और बाहर से विश्वप्रसिद्ध भव्यता प्रदान करता है।",
      mr: "७३ मीटर उंच असणारा हा घुमट दुहेरी रचनेने बांधला आहे, ज्यामुळे आतील ध्वनी दीर्घकाळ घुमतो."
    },
    cameraPosition: [0, 7.5, 9.5],
    targetPosition: [0, 8.5, 0],
    historicalNote: {
      en: "Capped with a 9.5m finial adorned with Islamic crescent and traditional Indian lotus motifs.",
      hi: "शीर्ष पर 9.5 मीटर ऊँचा कलश है जिसमें इस्लामी अर्धचंद्र और भारतीय कमल का संगम है।",
      mr: "शिखरावर ९.५ मीटरचा सुवर्ण कलश आहे."
    },
    architecturalHighlight: {
      en: "Double-dome void distributes stress and insulates the tomb chamber from extreme summer heat.",
      hi: "दोहरा गुंबद गर्मी से सुरक्षा प्रदान करता है और संरचनात्मक भार को कम करता है।",
      mr: "दुहेरी घुमटामुळे उन्हाळ्यातही आतील गाभारा थंड राहतो."
    },
    durationSec: 16
  },
  {
    id: 5,
    hotspotId: 'four-minarets',
    title: {
      en: "5. The Four Outward-Tilting Minarets",
      hi: "5. चार भूकंपरोधी मीनारें",
      mr: "५. चार भूकंपरोधक मिनार"
    },
    narration: {
      en: "We examine the 40-meter minarets anchoring the corners of the plinth. Notice their subtle 2.5-degree outward tilt—an early architectural safety feature designed to protect the central dome from seismic collapse.",
      hi: "अब हम चबूतरे के कोनों पर स्थित 40 मीटर ऊँची मीनारों को देखते हैं। इनका बाहर की ओर 2.5 डिग्री झुकाव भूकंप के समय मुख्य मकबरे को सुरक्षित रखने के लिए बनाया गया था।",
      mr: "कोपऱ्यांवरील ४० मीटर उंच मिनार पाहा. भूकंपाच्या वेळी मुख्य घुमटाचे रक्षण करण्यासाठी ते थोडे बाहेर झुकलेले आहेत."
    },
    cameraPosition: [-7, 5, 8.5],
    targetPosition: [-6.8, 4.5, 6.8],
    historicalNote: {
      en: "Constructed with white marble over brick core with internal spiral stairways of 163 steps.",
      hi: "ईंट के कोर पर संगमरमर की परत और भीतर 163 सीढ़ियों वाला घुमावदार मार्ग।",
      mr: "आत १६३ पायऱ्यांचा जिना असून वर सुंदर छत्री आहे."
    },
    architecturalHighlight: {
      en: "Acts as vertical frames balancing the horizontal expanse of the podium.",
      hi: "स्मारक के क्षैतिज विस्तार को संतुलित करने वाले ऊर्ध्वाधर स्तंभ।",
      mr: "वास्तूच्या सौंदर्याला परिपूर्ण चौकट देणारे खांब."
    },
    durationSec: 15
  },
  {
    id: 6,
    hotspotId: 'pietra-dura',
    title: {
      en: "6. Parchin Kari: Pietra Dura Gem Inlays",
      hi: "6. पारचीन कारी: संगमरमर में बहुमूल्य रत्न",
      mr: "६. पारचीन कारी: संगमरवरातील रत्नजडीत काम"
    },
    narration: {
      en: "Stepping closer to the main facade arches. Here you can admire Parchin Kari—intricate inlays of lapis lazuli, jasper, jade, and carnelian fitted seamlessly into pure white marble.",
      hi: "मुख्य मेहराब के पास आएँ। यहाँ पारचीन कारी की अनूठी नक्काशी है—लाजवर्त, अकीक और जेड जैसे कीमती पत्थरों को संगमरमर में बिना किसी जोड़ के जड़ा गया है।",
      mr: "मुख्य कमानीजवळ या. येथे लाजवर्त आणि इतर मौल्यवान खड्यांचे अप्रतिम नक्षीकाम दिसते."
    },
    cameraPosition: [0, 2.5, 5],
    targetPosition: [0, 2.8, 3.8],
    historicalNote: {
      en: "Over 42 quintals of semiprecious stones sourced from Afghanistan, Tibet, China, and Ceylon.",
      hi: "अफगानिस्तान, तिब्बत, चीन और श्रीलंका से 42 क्विंटल से अधिक रत्न मंगवाए गए थे।",
      mr: "विविध देशांतून आणलेले दुर्मीळ खडे यात वापरले आहेत."
    },
    architecturalHighlight: {
      en: "Calligraphic inscriptions dynamically enlarge higher up so they appear uniform from ground level.",
      hi: "सुलेखन के अक्षर ऊपर बड़े किए गए हैं ताकि नीचे से देखने पर एक समान आकार के लगें।",
      mr: "कॅलिग्राफीची अक्षरे वरच्या भागात मोठी केल्यामुळे खालून समान दिसतात."
    },
    durationSec: 16
  },
  {
    id: 7,
    hotspotId: 'cenotaphs-screen',
    title: {
      en: "7. The Historical Chronicle of Shah Jahan & Mumtaz",
      hi: "7. शाहजहाँ एवं मुमताज़ का ऐतिहासिक आख्यान",
      mr: "७. शाहजहान आणि मुमताझ महल यांची अमर गाथा"
    },
    narration: {
      en: "Here in the octagonal memorial chamber, the cenotaphs honor Arjumand Banu Begum (Mumtaz Mahal) and Emperor Shah Jahan. Built between 1632 and 1653, it engaged over 20,000 master artisans across Asia.",
      hi: "अष्टकोणीय कक्ष में मुमताज़ महल और शाहजहाँ की प्रतीकात्मक मज़ारें स्थित हैं। 1632 से 1653 के बीच 20,000 से अधिक शिल्पकारों ने मिलकर इसे साकार किया।",
      mr: "या अष्टकोनी दालनात मुमताझ महल आणि शाहजहान यांच्या समाध्या आहेत. १६३२ ते १६५३ या काळात २०,००० कारागिरांनी ही वास्तू साकारली."
    },
    cameraPosition: [0, 2, 2.8],
    targetPosition: [0, 1.8, 0],
    historicalNote: {
      en: "The pierced marble jali screen enclosing the tombs took 10 dedicated years of master craftsmanship.",
      hi: "मज़ारों के चारों ओर संगमरमर की नक्काशीदार जाली को तराशने में 10 वर्ष लगे थे।",
      mr: "समाधीभोवतीची जाळी कोरण्यासाठी १० वर्षे लागली."
    },
    architecturalHighlight: {
      en: "Mumtaz's cenotaph is in exact center; Shah Jahan's asymmetrical placement marks his later passing in 1666.",
      hi: "मुमताज़ की मज़ार केंद्र में है; शाहजहाँ की मज़ार 1666 में उनकी मृत्यु के बाद बनाई गई।",
      mr: "मुमताझ महलची समाधी मध्यभागी तर शाहजहान यांची समाधी बाजूला आहे."
    },
    durationSec: 15
  },
  {
    id: 8,
    hotspotId: 'yamuna-foundation',
    title: {
      en: "8. Digital Preservation & Subterranean Future",
      hi: "8. डिजिटल संरक्षण एवं भविष्य की सुरक्षा",
      mr: "८. डिजिटल संवर्धन आणि भविष्यातील रक्षण"
    },
    narration: {
      en: "We conclude at the Yamuna riverfront. Beneath our feet, timber well-foundations support the massive weight. Through SmrutiVR's 3D digital twins and laser telemetry, we preserve this monument for future generations.",
      hi: "हमारा यह टूर यमुना तट पर समाप्त होता है। हमारे नीचे काष्ठ-कूप नींव पूरी इमारत को थामे हुए है। स्मृति VR के डिजिटल ट्विन के माध्यम से हम इस अमूल्य धरोहर को सदैव के लिए सुरक्षित कर रहे हैं।",
      mr: "आपला हा प्रवास यमुना तीरावर पूर्ण होतो. लाकडी विहिरींच्या पायावर ही वास्तू उभी आहे. स्मृती VR च्या माध्यमातून आपण हा वारसा पुढील पिढ्यांसाठी जतन करत आहोत."
    },
    cameraPosition: [0, 3, -10],
    targetPosition: [0, 1, -4],
    historicalNote: {
      en: "The timber foundation wells require stable river moisture to maintain compressive rigidity.",
      hi: "नींव के काष्ठ कुओं को मजबूत रहने के लिए नदी की निरंतर नमी आवश्यक है।",
      mr: "लाकडाचा पाया मजबूत राहण्यासाठी नदीच्या पाण्याची आवश्यकता असते."
    },
    architecturalHighlight: {
      en: "High-resolution LiDAR scans capture sub-millimeter surface geometries for structural monitoring.",
      hi: "उच्च-सटीक LiDAR लेजर स्कैनिंग द्वारा सूक्ष्म बदलावों की डिजिटल निगरानी की जाती है।",
      mr: "LiDAR स्कॅनिंगने प्रत्येक सूक्ष्म भागाची डिजिटल नोंद ठेवली जाते."
    },
    durationSec: 15
  }
];

export const teleportWaypoints: TeleportWaypoint[] = [
  {
    id: 'entrance',
    name: {
      en: "Main Entrance (Darwaza-i-Rauza)",
      hi: "शाही प्रवेश द्वार (दरवाज़ा-ए-रौज़ा)",
      mr: "मुख्य महाद्वार (दरवाझा-ए-रौझा)"
    },
    description: {
      en: "Stand at the monumental southern gateway framing the distant white marble tomb.",
      hi: "दक्षिणी द्वार पर खड़े होकर पूरे ताजमहल का पहला दृश्य देखें।",
      mr: "महाद्वाराजवळ उभे राहून ताजमहालाचे पहिले दर्शन घ्या."
    },
    position: [0, 0.5, 24],
    rotationY: Math.PI,
    iconName: "DoorOpen"
  },
  {
    id: 'garden-center',
    name: {
      en: "Charbagh Lotus Reflecting Pool",
      hi: "चारबाग हौज-ए-कौसर जल कुंड",
      mr: "चारबाग जलकुंड"
    },
    description: {
      en: "The iconic viewpoint by the central marble pool with mirror reflections.",
      hi: "केंद्रीय संगमरमर के तालाब के पास प्रसिद्ध प्रतिबिंब बिंदु।",
      mr: "तलावाकाठचे प्रसिद्ध प्रतिबिंब स्थान."
    },
    position: [0, 0.5, 12],
    rotationY: Math.PI,
    iconName: "Trees"
  },
  {
    id: 'main-platform',
    name: {
      en: "Main Marble Plinth & Steps",
      hi: "मुख्य संगमरमरी चबूतरा एवं सीढ़ियां",
      mr: "मुख्य चबूतरा व पायऱ्या"
    },
    description: {
      en: "Elevated view directly before the monumental facade arch (Iwan).",
      hi: "मुख्य मेहराब के ठीक सामने संगमरमरी चबूतरे का दृश्य।",
      mr: "मुख्य कमानीसमोरील विहंगम दृश्य."
    },
    position: [0, 0.5, 5],
    rotationY: Math.PI,
    iconName: "Maximize2"
  },
  {
    id: 'dome-view',
    name: {
      en: "Central Dome Elevated Viewpoint",
      hi: "केंद्रीय गुंबद शीर्ष दृश्य",
      mr: "मध्यवर्ती घुमट दृश्य"
    },
    description: {
      en: "Close-range elevated perspective of the 73m marble dome and golden finial.",
      hi: "73 मीटर ऊँचे गुंबद और कलश का निकटवर्ती दृश्य।",
      mr: "७३ मीटर उंच घुमट आणि कलशाचे जवळून दर्शन."
    },
    position: [0, 4.5, 6],
    rotationY: Math.PI,
    iconName: "CircleDot"
  },
  {
    id: 'minaret-side',
    name: {
      en: "South-West Minaret Base",
      hi: "दक्षिण-पश्चिम मीनार आधार",
      mr: "नैऋत्य मिनार पाया"
    },
    description: {
      en: "Examine the 40m octagonal minaret and its deliberate outward incline.",
      hi: "40 मीटर ऊँची मीनार और इसके बाहर की ओर झुकाव का अध्ययन करें।",
      mr: "४० मीटर उंच अष्टकोनी मिनाराचे निरीक्षण करा."
    },
    position: [-6.5, 0.5, 6.5],
    rotationY: Math.PI * 0.75,
    iconName: "Compass"
  },
  {
    id: 'river-view',
    name: {
      en: "Yamuna River Terrace & Foundations",
      hi: "यमुना नदी किनारा चबूतरा",
      mr: "यमुना नदीकाठ कट्टा"
    },
    description: {
      en: "Rear sandstone terrace overlooking the river curves and timber well foundations.",
      hi: "यमुना नदी की ओर लाल बलुआ पत्थर के चबूतरे का दृश्य।",
      mr: "यमुना नदीच्या पात्राचे आणि लाकडी पायाचे दृश्य."
    },
    position: [0, 0.5, -6],
    rotationY: 0,
    iconName: "Waves"
  }
];
