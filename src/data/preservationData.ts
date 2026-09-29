import { PreservationProject } from '../types';

export const preservationProjectsData: PreservationProject[] = [
  {
    id: 'proj-01',
    title: {
      en: "Taj Mahal Sub-Millimeter LiDAR Scanning & Structural Twin",
      hi: "ताजमहल सब-मिलीमीटर LiDAR लेजर स्कैनिंग एवं डिजिटल ट्विन",
      mr: "ताजमहाल सब-मिलीमीटर LiDAR लेझर स्कॅनिंग व डिजिटल प्रतिकृती"
    },
    category: {
      en: "Laser Scanning & Digital Twin",
      hi: "लेजर स्कैनिंग एवं डिजिटल ट्विन",
      mr: "लेझर स्कॅनिंग व डिजिटल ट्विन"
    },
    description: {
      en: "Deploying high-resolution terrestrial LiDAR sensors across the 42-acre complex to record micro-fissures, stone weathering, and soil subsidence along the Yamuna riverfront.",
      hi: "यमुना तट पर पत्थर के क्षरण और सूक्ष्म दरारों की डिजिटल रिकॉर्डिंग के लिए उच्च-सटीक स्थलीय लेजर सेंसर स्थापित करना।",
      mr: "यमुना तीरावरील दगडी झीज आणि सूक्ष्म भेगांची डिजिटल नोंद ठेवण्यासाठी अत्याधुनिक लेझर स्कॅनिंग करणे."
    },
    progress: 92,
    targetFund: 2500000, // INR
    raisedFund: 2300000,
    leadInstitution: "ASI Science Branch & SmrutiVR Labs",
    status: 'Active',
    keyObjectives: {
      en: [
        "Generate 100M+ point cloud archive for open academic research.",
        "Model seismic stress response under varying earthquake magnitudes.",
        "Establish baseline surface maps before annual monsoon weathering."
      ],
      hi: [
        "शैक्षणिक अनुसंधान हेतु 100M+ पॉइंट क्लाउड डेटाबेस तैयार करना।",
        "भूकंप की स्थिति में संरचनात्मक तनाव का वैज्ञानिक विश्लेषण।",
        "मानसून से पहले सतह का बेसलाइन डिजिटल नक्शा तैयार करना।"
      ],
      mr: [
        "संशोधनासाठी १०० दशलक्ष पॉईंट्सचा डेटाबेस तयार करणे.",
        "भूकंपरोधी क्षमतेचे संगणकीय परीक्षण करणे.",
        "पावसाळ्यापूर्वी दगडी भागांचे डिजिटल मॅपिंग करणे."
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'proj-02',
    title: {
      en: "Raigad Fort High-Altitude Drone Photogrammetry",
      hi: "रायगढ़ किला उच्च-उंचाई ड्रोन फोटोग्रामेट्री",
      mr: "किल्ले रायगड हाय-अल्टीट्यूड ड्रोन छायाचित्रण"
    },
    category: {
      en: "Aerial Topography",
      hi: "हवाई स्थलाकृति",
      mr: "हवाई सर्वेक्षण"
    },
    description: {
      en: "Multi-rotor RTK drone mapping of the sheer cliff fortifications of Raigad Fort in the Western Ghats to document inaccessible bastion walls and rainwater harvesting cisterns.",
      hi: "पश्चिमी घाट में रायगढ़ किले के दुर्गम बुर्जों और प्राचीन जल संचयन तालाबों की मैपिंग हेतु ड्रोन सर्वेक्षण।",
      mr: "सह्याद्रीतील दुर्गम कडे, बुरुज आणि जलसाठ्यांचे अचूक 3D मॅपिंग करण्यासाठी ड्रोन सर्वेक्षण."
    },
    progress: 45,
    targetFund: 1800000,
    raisedFund: 810000,
    leadInstitution: "Maharashtra Directorate of Archaeology & SmrutiVR",
    status: 'Phase 2',
    keyObjectives: {
      en: [
        "Capture orthomosaic elevation models of the 820m mountain peak.",
        "Document ancient Maratha water management architecture.",
        "Create VR educational tours for students in rural schools."
      ],
      hi: [
        "820 मीटर पर्वत शिखर का सटीक डिजिटल मॉडल तैयार करना।",
        "प्राचीन मराठा जल प्रबंधन प्रणाली का दस्तावेजीकरण।",
        "ग्रामीण विद्यालयों के छात्रों के लिए VR शैक्षिक अनुभव का निर्माण।"
      ],
      mr: [
        "८२० मीटर उंच शिखराचा अचूक 3D नकाशा तयार करणे.",
        "छत्रपती शिवाजी महाराजांच्या काळातील जलव्यवस्थापनाचे दस्तऐवजीकरण.",
        "ग्रामीण भागातील विद्यार्थ्यांसाठी VR अभ्यासक्रम तयार करणे."
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'proj-03',
    title: {
      en: "Parchin Kari Pietra Dura Micro-Scanning & Stone DNA Archive",
      hi: "पारचीन कारी पच्चीकारी सूक्ष्म-स्कैनिंग एवं स्टोन आर्काइव",
      mr: "पिएत्रा ड्युरा नक्षीकाम सूक्ष्म स्कॅनिंग आणि खडे जतन प्रकल्प"
    },
    category: {
      en: "Material Science",
      hi: "पदार्थ विज्ञान",
      mr: "पदार्थ विज्ञान"
    },
    description: {
      en: "Cataloging the 28 mineral varieties used in the imperial floral inlays using non-destructive X-ray fluorescence (XRF) and 50-micron surface scans to assist master craftsmen during restoration.",
      hi: "बिना नुकसान पहुँचाए 28 प्रकार के रत्नों की संरचना का डिजिटल डेटाबेस तैयार करना ताकि पारंपरिक कारीगरों को संरक्षण में मदद मिल सके।",
      mr: "२८ प्रकारच्या मौल्यवान खड्यांचे अचूक वैज्ञानिक विश्लेषण करून कारागिरांना संवर्धनासाठी डिजिटल मार्गदर्शक पुरवणे."
    },
    progress: 78,
    targetFund: 1200000,
    raisedFund: 940000,
    leadInstitution: "National Research Laboratory for Conservation (NRLC)",
    status: 'Research',
    keyObjectives: {
      en: [
        "Map spectral fingerprints of genuine Badakhshan Lapis and Khotan Jade.",
        "Document traditional inlay chisel techniques from hereditary artisan families.",
        "Enable AI-driven stone color matching for conservation replacement."
      ],
      hi: [
        "पारंपरिक रत्नों के स्पेक्ट्रल फिंगरप्रिंट का डिजिटल संग्रह।",
        "पारंपरिक कारीगर परिवारों की प्राचीन छेनी तकनीकों का वीडियो संग्रह।",
        "संरक्षण हेतु AI आधारित रंग मिलान तकनीक का विकास।"
      ],
      mr: [
        "मौल्यवान खड्यांचे वैज्ञानिक स्पेक्ट्रल विश्लेषण करणे.",
        "पारंपरिक कारागिरांच्या कौशल्याचे व्हिडिओ दस्तऐवजीकरण.",
        "AI तंत्रज्ञानाच्या साहाय्याने अचूक खड्यांची निवड करणे."
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1592635196078-9ffc8f5f629f?auto=format&fit=crop&w=800&q=80"
  }
];

export const telemetryStats = {
  totalMonuments: 5,
  pointCloudCount: "14,842,650",
  dataArchivedTB: "32.4 TB",
  virtualVisitors: "48,290",
  heritageStampsIssued: "12,410",
  activeSensors: 42,
  agraAQI: 72, // Moderate / Good for Heritage Zone
  marbleHealthIndex: 96.4, // Percentage
  yamunaWaterLevelMeters: 4.8, // Healthy for timber foundations
  temperatureDegC: 26.5,
  humidityPercent: 54,
  historicalDocumentsCount: 165
};
