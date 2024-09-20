
import React, { useState } from 'react';
import { useEffect } from 'react';

interface SidebarItem {
    icon: string;
    label: string;
    active?: boolean;
    href: string;
}

interface SidebarProps {
    items: SidebarItem[];
    onItemSelect?: (label: string) => void;
}

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};
const Sidebar: React.FC<SidebarProps> = ({ items, onItemSelect }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="toggle">
                <div className="logo">
                    <img src="assets/images/logo.png" />
                    <h2>Atmos<span className="primary">Clear</span></h2>
                </div>
                <div className="close" id="close-btn" onClick={handleToggle}>
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar">
                {items.map((item, index) => (
                    <a href={item.href} key={index} onClick={() => onItemSelect && onItemSelect(item.label)} className={item.active ? 'active' : ''}>
                        <span className="material-icons-sharp">
                            {item.icon}
                        </span>
                        <h3>{item.label}</h3>
                    </a>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;