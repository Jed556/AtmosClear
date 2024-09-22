import React, { useState } from 'react';

const Darkmode: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode-variables');
    };

    return (
        <div>
            <div className={`dark-mode ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                <span className={isDarkMode ? 'active' : ''}></span>
                <span className={isDarkMode ? '' : 'active'}></span>
            </div>
        </div>
    );
};

export default Darkmode;