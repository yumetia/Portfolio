

import languages from "@locales/languages";

type ThemeModalProps = {
    themes: string[];
    language:keyof typeof languages;
    isVisible?:boolean;
    onClose:()=>void;
}

const ThemeModal = ({ themes,language,isVisible=false,onClose }: ThemeModalProps) => {
    
    const { themeBtn  } = languages[language].navbar 


    const handleTheme = (theme:string) =>{
        // 1) get the current theme
        // 2) change with the theme pressed
        // 3) storing in local storage
        // 1 & 2)
        const html = document.documentElement;
        html.dataset.theme = theme;

        // 3)
        localStorage.setItem("theme",theme);
    }

    if (!isVisible) return null
    return (
        <div className="absolute top-40 right-50 
        sm:right-40
        md:top-20 
        bg-primary rounded p-6
        border
        ">
            {/* modal title */}
            <div className="mb-4 flex justify-center">
            <h2 className="text-center text-neutral font-bold">{ themeBtn }</h2>
            </div>

            {/* rendering themes button */}
            {themes.map((theme:string,key:number)=>(
            <div key={key} className="flex mb-2 ">
                <button className="btn" onClick={()=>{handleTheme(theme)}}>
                {theme}
                </button>
            </div>
            ))}

            {/* close modal button */}
            <button 
            className="mt-2 btn btn-outline hover:bg-accent text-neutral"
            onClick={onClose}
            >
            <span>{language === "fr" ? "Fermer" : "Close"}</span>
            </button>
        </div>
    ) 
}


export default ThemeModal