 import { useState } from 'react';

function ToggleLanguage() {

    const [language, setLanguage] = useState<'en' | 'fr'>('en');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
    };

    return (
        <button onClick={toggleLanguage} className="btn btn-ghost">
            {language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
        </button>
    );
}

export default ToggleLanguage;

