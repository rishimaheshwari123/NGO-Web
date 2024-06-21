import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Hello, how are you?",
      "know_more": "Know more about",
      "team_name": "Team Pahal Bareli",
      "foundation_helping": "Foundation for helping poor people",
      "our_culture": "Our Culture",
      "no_category_found": "No category found",
      "mission_statement": "We are driven by a singular mission: to extend a helping hand to those in need, fostering a community of care and compassion. Our initiatives encompass a wide range of services aimed at addressing various aspects of societal welfare. From providing free tiffin services to ensuring no one goes hungry, to supporting Wardha Ashram as a sanctuary for many seeking refuge, our commitment knows no bounds. Additionally, we organize food distribution drives, reaching out to the homeless and destitute with essential supplies. Moreover, our compassion extends to animals through our dedicated animal care initiatives, ensuring even the voiceless receive the love and care they deserve. At Team Pahal Bareli Foundation, we firmly believe in the power of collective effort and community support. Together, we strive to create a world where everyone has access to basic necessities and the opportunity to lead dignified lives. Join us in our mission to make a meaningful difference in the lives of those less fortunate.",
      "meet_our_team": "Meet with our team",
      "some_info_about_us": "Some Information you should know about us",
      "foundation_description_1": "Team Pahal Bareli Foundation, a non-government organization established in 2018, is dedicated to improving the well-being of all living beings. Our holistic approach encompasses humans, animals, and the environment, reflected in our innovative programs for the underprivileged, animal welfare, and environmental conservation.",
      "foundation_description_2": "We provide comprehensive support to the homeless, including medical care and educational opportunities, while also bringing joy to orphanages through essential supplies and recreational activities. Our commitment extends to rescuing and feeding stray dogs and engaging in tree planting initiatives for environmental sustainability.",
      "foundation_description_3": "We provide comprehensive support to the homeless, including medical care and educational opportunities, while also bringing joy to orphanages through essential supplies and recreational activities. Our commitment extends to rescuing and feeding stray dogs and engaging in tree planting initiatives for environmental sustainability.",
      "concern_about_our_mission": "Concern About Our Mission",
      "mission_title_1": "OUR MISSION",
      "mission_subTitle_1": "Concern About Our Mission",
      "mission_desc_1": "Team Pahal Bareli Foundation is a non-profit organization with the aim of improving the lives of individuals by providing basic necessities.",
      "mission_title_2": "OUR VISION",
      "mission_subTitle_2": "Concern About Our Mission",
      "mission_desc_2": "Our efforts are aimed at combating poverty and social isolation while reigniting hope for a better future. We believe that everyone has the right to equal access to the resources and opportunities needed for a dignified life and full participation in society. Our dream is a world without starvation, hunger, or poverty, and we are dedicated to making that vision a reality.",
      "mission_title_3": "OUR GOAL",
      "mission_subTitle_3": "Concern About Our Mission",
      "mission_desc_3": "With your participation, we aspire to uplift humanity by enhancing the well-being of all, including humans, animals, and the environment. Together, we can address imbalances in society by empowering underprivileged individuals and guiding them toward a world characterized by equality, dignity, and respect."
    }
  },
  hi: {
    translation: {
      "welcome": "नमस्ते, आप कैसे हैं?",
      "know_more": "के बारे में और जानें",
      "team_name": "टीम पहल बरेली",
      "foundation_helping": "गरीब लोगों की मदद के लिए संस्था",
      "our_culture": "हमारी संस्कृति",
      "no_category_found": "कोई श्रेणी नहीं मिली",
      "mission_statement": "हम एक विशिष्ट मिशन से प्रेरित हैं: जरूरतमंदों की मदद के लिए हाथ बढ़ाना, देखभाल और करुणा के समुदाय को बढ़ावा देना। हमारे प्रयास समाज कल्याण के विभिन्न पहलुओं को संबोधित करने वाली सेवाओं की एक विस्तृत श्रृंखला को शामिल करते हैं। मुफ्त टिफिन सेवाएं प्रदान करने से लेकर यह सुनिश्चित करने तक कि कोई भी भूखा न सोए, और शरण मांगने वालों के लिए वर्धा आश्रम को समर्थन देने तक, हमारी प्रतिबद्धता की कोई सीमा नहीं है। इसके अतिरिक्त, हम बेघर और बेसहारा लोगों तक आवश्यक आपूर्ति पहुंचाकर भोजन वितरण अभियान आयोजित करते हैं। इसके अलावा, हमारे समर्पित पशु देखभाल पहलों के माध्यम से जानवरों के प्रति हमारी करुणा बढ़ती है, यह सुनिश्चित करते हुए कि यहां तक कि वाणीहीन भी उन्हें मिलने वाला प्यार और देखभाल प्राप्त करें। टीम पहल बरेली फाउंडेशन में, हमें सामूहिक प्रयास और सामुदायिक समर्थन की शक्ति में दृढ़ विश्वास है। हम सभी के पास बुनियादी आवश्यकताओं और गरिमापूर्ण जीवन जीने के अवसर तक पहुंच हो, इस दुनिया को बनाने के लिए हम एक साथ प्रयास करते हैं। कम भाग्यशाली लोगों के जीवन में सार्थक अंतर लाने के हमारे मिशन में हमारे साथ जुड़ें।",
      "meet_our_team": "हमारी टीम से मिलें",
      "some_info_about_us": "हमारे बारे में कुछ जानकारी जो आपको पता होनी चाहिए",
      "foundation_description_1": "टीम पहल बरेली फाउंडेशन, 2018 में स्थापित एक गैर-सरकारी संगठन, सभी जीवित प्राणियों की भलाई में सुधार के लिए समर्पित है। हमारा समग्र दृष्टिकोण मनुष्यों, जानवरों और पर्यावरण को शामिल करता है, जो हमारे नवोन्मेषी कार्यक्रमों में परिलक्षित होता है जो वंचितों, पशु कल्याण और पर्यावरण संरक्षण के लिए हैं।",
      "foundation_description_2": "हम बेघर लोगों को व्यापक समर्थन प्रदान करते हैं, जिसमें चिकित्सा देखभाल और शैक्षिक अवसर शामिल हैं, जबकि अनाथालयों में आवश्यक आपूर्ति और मनोरंजक गतिविधियों के माध्यम से खुशी भी लाते हैं। हमारी प्रतिबद्धता आवारा कुत्तों को बचाने और खिलाने और पर्यावरणीय स्थिरता के लिए वृक्षारोपण पहल में शामिल होने तक फैली हुई है।",
      "foundation_description_3": "हम बेघर लोगों को व्यापक समर्थन प्रदान करते हैं, जिसमें चिकित्सा देखभाल और शैक्षिक अवसर शामिल हैं, जबकि अनाथालयों में आवश्यक आपूर्ति और मनोरंजक गतिविधियों के माध्यम से खुशी भी लाते हैं। हमारी प्रतिबद्धता आवारा कुत्तों को बचाने और खिलाने और पर्यावरणीय स्थिरता के लिए वृक्षारोपण पहल में शामिल होने तक फैली हुई है।",
      "concern_about_our_mission": "हमारे मिशन के बारे में चिंता",

            "mission_title_1": "हमारा मिशन",
        "mission_subTitle_1": "हमारे मिशन के बारे में चिंता",
        "mission_desc_1": "टीम पहल बरेली फाउंडेशन एक गैर-लाभकारी संगठन है जिसका उद्देश्य बुनियादी आवश्यकताओं को प्रदान करके व्यक्तियों के जीवन को बेहतर बनाना है।",
        "mission_title_2": "हमारी दृष्टि",
        "mission_subTitle_2": "हमारे मिशन के बारे में चिंता",
        "mission_desc_2": "हमारे प्रयास गरीबी और सामाजिक अलगाव से लड़ने और बेहतर भविष्य के लिए आशा को पुनः प्रज्वलित करने के उद्देश्य से हैं। हमारा मानना ​​है कि हर किसी को गरिमापूर्ण जीवन जीने और समाज में पूर्ण भागीदारी के लिए आवश्यक संसाधनों और अवसरों तक समान पहुंच का अधिकार है। हमारा सपना भूख, भूखमरी या गरीबी के बिना एक दुनिया है, और हम उस दृष्टि को वास्तविकता बनाने के लिए प्रतिबद्ध हैं।",
        "mission_title_3": "हमारा लक्ष्य",
        "mission_subTitle_3": "हमारे मिशन के बारे में चिंता",
        "mission_desc_3": "आपकी भागीदारी के साथ, हम सभी, जिसमें मनुष्य, पशु और पर्यावरण शामिल हैं, की भलाई को बढ़ाकर मानवता को ऊपर उठाने का लक्ष्य रखते हैं। एक साथ मिलकर, हम समाज में असमानताओं को दूर कर सकते हैं, वंचित व्यक्तियों को सशक्त बना सकते हैं और उन्हें समानता, गरिमा और सम्मान की विशेषता वाली दुनिया की ओर मार्गदर्शन कर सकते हैं।"
    
      
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
