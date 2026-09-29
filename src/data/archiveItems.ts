import { ArchiveItem } from '../types';

export const archiveItemsData: ArchiveItem[] = [
  {
    id: 'arch-3d-01',
    title: {
      en: "Taj Mahal Complex Full Photogrammetric 3D Twin",
      hi: "ताजमहल परिसर संपूर्ण फोटोग्रामेट्रिक 3D ट्विन",
      mr: "ताजमहाल परिसर संपूर्ण 3D डिजिटल प्रतिकृती"
    },
    category: '3d_model',
    date: "2026-09",
    source: "SmrutiVR Digital Heritage Initiative",
    resolution: "14.8M Polygons • Sub-mm LiDAR",
    fileSize: "11.6 MB (GLB Optimized)",
    thumbnailUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "High-density GLTF/GLB model calibrated against Survey of India geodetic benchmarks. Contains accurate geometry of the bulbous dome, four minarets, central iwans, and marble terrace.",
      hi: "सर्वे ऑफ इंडिया के मानकों पर आधारित 3D मॉडल। इसमें मुख्य गुंबद, चार मीनारें और संगमरमरी चबूतरे का सटीक विवरण है।",
      mr: "सर्वे ऑफ इंडियाच्या मानकांवर आधारित अचूक 3D मॉडेल, ज्यामध्ये घुमट, मिनार आणि चबूतऱ्याचे मोजमाप आहे."
    },
    tags: ["3D Model", "LiDAR", "GLB", "Photogrammetry"],
    metadata: {
      provenance: "Digitally scanned & optimized for WebXR",
      rights: "Open Access Cultural Heritage (CC-BY-NC 4.0)",
      format: "glTF 2.0 Binary (.glb)",
      coordinates: "27.1751° N, 78.0421° E"
    }
  },
  {
    id: 'arch-photo-01',
    title: {
      en: "1860 Early Glass-Plate Negative by Samuel Bourne",
      hi: "1860 सैमुअल बॉर्न द्वारा प्रारंभिक ग्लास-प्लेट फोटोग्राफ",
      mr: "१८६० सॅम्युअल बोर्न यांचे ऐतिहासिक काचपट्टी छायाचित्र"
    },
    category: 'photo',
    date: "1860 CE",
    source: "British Library & ASI Archival Collection",
    resolution: "8,400 x 6,200 px (Wet Collodion Plate)",
    fileSize: "48.2 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "Historical photographic record showing the Taj Mahal before the British colonial tree felling, featuring overgrown fruit orchards along the water channels.",
      hi: "1860 का ऐतिहासिक चित्र जब चारबाग में अंग्रेजी लॉन की जगह घने फलदार वृक्ष हुआ करते थे।",
      mr: "ब्रिटिश काळातील १८६० चे दुर्मिळ छायाचित्र ज्यामध्ये बागेत फळझाडे दिसत आहेत."
    },
    tags: ["Samuel Bourne", "Glass Plate", "19th Century", "Archive"],
    metadata: {
      provenance: "Bourne & Shepherd Photographic Studios, Calcutta",
      rights: "Public Domain Historic Heritage Record",
      format: "Archival TIFF / High-Res JPEG",
      coordinates: "Charbagh Central Pathway"
    }
  },
  {
    id: 'arch-doc-01',
    title: {
      en: "Imperial Farman of Emperor Shah Jahan (Land Exchange)",
      hi: "बादशाह शाहजहाँ का शाही फरमान (भूमि विनिमय)",
      mr: "सम्राट शाहजहान यांचे शाही फर्मान (जमीन हस्तांतरण)"
    },
    category: 'document',
    date: "1631 CE (1041 AH)",
    source: "National Museum of India, New Delhi",
    resolution: "300 DPI Multi-Spectral Ink Scan",
    fileSize: "14.5 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1592635196078-9ffc8f5f629f?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "Original Persian court document granting four noble mansions in Agra to Raja Jai Singh in exchange for the riverside tract designated for the tomb of Mumtaz Mahal.",
      hi: "फारसी भाषा में लिखा शाही फरमान, जिसके तहत राजा जय सिंह को ताजमहल की भूमि के बदले चार हवेलियां दी गई थीं।",
      mr: "राजा जयसिंह यांच्याशी झालेल्या जमीन विनिमयाचा ऐतिहासिक फारसी भाषेतील दस्तऐवज."
    },
    tags: ["Farman", "Persian Manuscript", "Shah Jahan", "Raja Jai Singh"],
    metadata: {
      provenance: "Mughal Imperial Royal Archives (Kitabkhana)",
      rights: "National Cultural Property of India",
      format: "Gold Leaf Illuminated Manuscript PDF",
    }
  },
  {
    id: 'arch-scan-01',
    title: {
      en: "Parchin Kari Pietra Dura Micro-Topography Scan",
      hi: "पारचीन कारी पच्चीकारी सूक्ष्म-संरचना स्कैन",
      mr: "पिएत्रा ड्युरा नक्षीकामाचे सूक्ष्म 3D स्कॅन"
    },
    category: 'preservation_scan',
    date: "2026-06",
    source: "ASI Science Branch & SmrutiVR Lab",
    resolution: "50 Micron Micro-LiDAR Surface Mesh",
    fileSize: "32.1 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "Sub-millimeter surface topography scan of the central spandrel lapis lazuli flower inlays, cataloging edge wear, stone micro-crystallization, and marble fissure states.",
      hi: "लाजवर्त और अकीक के पत्थरों की 50 माइक्रोन लेजर स्कैनिंग, जिससे पत्थर के बारीक कणों की स्थिति जांची जा सके।",
      mr: "लाजवर्त आणि मौल्यवान खड्यांचे अत्यंत सूक्ष्म 3D स्कॅन ज्यातून दगडी नक्षीची झीज तपासता येते."
    },
    tags: ["Laser Scan", "Pietra Dura", "Conservation", "Micro-mesh"],
    metadata: {
      provenance: "Archaeological Survey of India Conservation Telemetry",
      rights: "Research & Academic Open License",
      format: "OBJ / Normal Map Data",
    }
  },
  {
    id: 'arch-blue-01',
    title: {
      en: "Architectural Cross-Section: Double Dome & Well Caissons",
      hi: "वास्तुकला अनुप्रस्थ काट: दोहरा गुंबद एवं कूप नींव",
      mr: "स्थापत्य नकाशा: दुहेरी घुमट आणि विहिरींचा पाया"
    },
    category: 'blueprint',
    date: "1904 CE (Lord Curzon Survey)",
    source: "ASI Architectural Drawing Archive",
    resolution: "6,000 x 4,500 px Vector Blueprint",
    fileSize: "18.9 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "Detailed structural cross-section revealing the void between the inner and outer domes, staircase circulation, and deep well-foundation masonry into the Yamuna sand strata.",
      hi: "विस्तृत वास्तुकला नक्शा जिसमें दोहरे गुंबद के बीच का स्थान, सीढ़ियां और नदी तल में स्थित कुओं की संरचना दिखाई गई है।",
      mr: "दुहेरी घुमटातील मोकळी जागा, जिने आणि नदीतील विहिरींचा पाया दाखवणारा तांत्रिक नकाशा."
    },
    tags: ["Blueprint", "Cross Section", "Engineering", "Lord Curzon"],
    metadata: {
      provenance: "ASI Northern Circle Survey Office, Agra",
      rights: "Public Domain Historic Blueprint",
      format: "High-Resolution SVG / Vector PDF",
    }
  },
  {
    id: 'arch-audio-01',
    title: {
      en: "Acoustic Resonance Recording Inside the Great Octagonal Dome",
      hi: "विशाल अष्टकोणीय गुंबद के आंतरिक प्रतिध्वनि का ऑडियो",
      mr: "मध्यवर्ती घुमटातील पवित्र ध्वनी प्रतिध्वनीचे ऑडिओ रेकॉर्डिंग"
    },
    category: 'audio',
    date: "2026-04",
    source: "Acoustic Archeology Project",
    resolution: "96 kHz / 24-bit Spatial Binaural Audio",
    fileSize: "28.4 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1592635196078-9ffc8f5f629f?auto=format&fit=crop&w=800&q=80",
    description: {
      en: "Binaural acoustic impulse-response measurement capturing the 28-second sonic decay within the marble burial chamber under silent dawn conditions.",
      hi: "शांत भोर के समय संगमरमरी आंतरिक कक्ष में 28 सेकंड तक गूंजने वाली पवित्र ध्वनि का विशेष स्थानिक रिकॉर्डिंग।",
      mr: "पहाटेच्या वेळी आतील गाभाऱ्यात २८ सेकंद घुमणाऱ्या ध्वनीचे अत्याधुनिक ऑडिओ रेकॉर्डिंग."
    },
    tags: ["Acoustics", "Spatial Audio", "Binaural", "Resonance"],
    metadata: {
      provenance: "Recorded under special ASI research permission",
      rights: "Creative Commons Attribution Non-Commercial",
      format: "Lossless FLAC / WAV",
    }
  }
];
