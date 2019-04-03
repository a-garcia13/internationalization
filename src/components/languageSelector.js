import localeEsMessages from "../locales/es.json";
import localeEnMessages from "../locales/en.json";

export default function LanguageSelector(lenguage){
    if(lenguage==='es'){
        return localeEsMessages;
    } else {
        return localeEnMessages;
    }
}