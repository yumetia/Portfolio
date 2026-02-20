
type LangModalProps= {
    locales:readonly string[],
    currentLang:string,
    isVisible?:boolean,
    onClose:()=>void,
}

const LangModal = ({locales,currentLang,isVisible=false,onClose}: LangModalProps) =>{


    const switchLang = (lang:string) =>{
        // store the new lang 
        localStorage.setItem("lang",lang);

        // set it as the new lang
        
    }
    if (!isVisible) return null
     return (
        <div className="absolute top-40 right-40 
        sm:right-70 md:top-20 md:right-30
        bg-primary rounded p-6
        ">
            {/* modal title */}
            <div className="mb-4 flex justify-center">
            <h2 className="text-center text-neutral font-bold"> lang</h2>
            </div>

            {/* rendering themes button */}
            
            {locales.map((lang:string,key:number)=>(
            <div key={key} className="flex mb-2 ">
                <button className="btn" onClick={()=>{switchLang(lang)}}>
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