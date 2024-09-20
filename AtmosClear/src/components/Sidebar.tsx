
import React, { useState } from 'react';

interface SidebarItem {
    icon: string;
    label: string;
    href: string;
}

interface SidebarProps {
    items: SidebarItem[];
    onItemSelect?: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <a href={item.href} key={index} onClick={() => onItemSelect && onItemSelect(item.label)}>
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