
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

    return(
    <aside className={`sidebar bg-light ${isOpen ? 'd-block' : 'd-none'}`}>
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <div className="d-flex align-items-center">
                <img src="assets/images/logo.png" alt="Logo" className="me-2" />
                <h2 className="m-0">Atmos<span className="text-primary">Clear</span></h2>
            </div>
            <button className="btn btn-outline-secondary" onClick={handleToggle}>
                <span className="material-icons-sharp">close</span>
            </button>
        </div>

        <div className="list-group list-group-flush">
            {items.map((item, index) => (
                <a href={item.href} key={index} className="list-group-item list-group-item-action d-flex align-items-center" onClick={() => onItemSelect && onItemSelect(item.label)}>
                    <span className="material-icons-sharp me-2">{item.icon}</span>
                    <h3 className="m-0">{item.label}</h3>
                </a>
            ))}
        </div>
    </aside>
    );
};

export default Sidebar;