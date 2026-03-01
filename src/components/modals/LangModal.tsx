
import { useLanguage } from "@context/LanguageContext"
import languages from "@locales/languages"
import { Locale } from "@context/LanguageContext"

type LangModalProps= {
    locales:readonly Locale[],
    currentLang:string,
    isVisible?:boolean,
    onClose:()=>void,
}

// not necessary as an HELPER, so putting it here for now..
const mappingLang = {
    en:"English",
    de:"Deutsch",
    fr:"Français",
    ja:"日本語"
}

const LangModal = ({locales,currentLang,isVisible=false,onClose}: LangModalProps) =>{
    if (!isVisible) return null

    const { switchLanguage } = useLanguage();
    const { language } = useLanguage();
    
    const { langBtn, modalClose } = languages[language].navbar;
     return (
        <div className="absolute top-40 right-3 
        sm:top-50
        md:top-20 
        bg-secondary rounded p-6
        border
        ">
            {/* modal title */}
            <div className="mb-4 flex justify-center">
                <h2 className="text-center text-neutral font-bold">{langBtn}</h2>
            </div>

            {/* rendering lang button */}
           
            {locales.map((lang,key)=>{
                // get the status of the lang
                const isBetaLang = languages[lang].isBetaLang 
                return (<div key={key} className="flex mb-2 ">
                    <button className="btn rounded-xl" onClick={()=>{switchLanguage(lang)}}>
                        {isBetaLang ? `${mappingLang[lang]} (beta)`: mappingLang[lang]}
                    </button>
                </div>)
            })}

            {/* close modal button */}
            <button 
            className="mt-2 btn btn-outline hover:bg-accent text-neutral rounded"
            onClick={onClose}
            >
                <span>{modalClose}</span>
            </button>
        </div>
    ) 
}

export default LangModal;