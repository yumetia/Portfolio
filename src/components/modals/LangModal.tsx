
import { useLanguage } from "@context/LanguageContext"
import languages from "@locales/languages"
import { Locale } from "@context/LanguageContext"

type LangModalProps= {
    locales:readonly Locale[],
    currentLang:string,
    isVisible?:boolean,
    onClose:()=>void,
}

const LangModal = ({locales,currentLang,isVisible=false,onClose}: LangModalProps) =>{
    if (!isVisible) return null

    const { switchLanguage } = useLanguage();
    const { language } = useLanguage();
    
    const langBtn = languages[language].navbar.langBtn;
     return (
        <div className="absolute top-40 right-40 
        sm:right-70 md:top-20 md:right-30
        bg-primary rounded p-6
        ">
            {/* modal title */}
            <div className="mb-4 flex justify-center">
            <h2 className="text-center text-neutral font-bold">{langBtn}</h2>
            </div>

            {/* rendering themes button */}
            
            {locales.map((lang,key)=>(
            <div key={key} className="flex mb-2 ">
                <button className="btn" onClick={()=>{switchLanguage(lang)}}>
                {lang}
                </button>
            </div>
            ))}

            {/* close modal button */}
            <button 
            className="mt-2 btn btn-outline hover:bg-accent text-neutral"
            onClick={onClose}
            >
            <span>{currentLang === "fr" ? "Fermer" : "Close"}</span>
            </button>
        </div>
    ) 
}

export default LangModal;