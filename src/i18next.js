import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/english.json";
import hi from "./lng/hindi.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		hi: {
			translation: hi,
		},
	},
	lng: localStorage.getItem("lng") || "en",
});

export default i18next;
