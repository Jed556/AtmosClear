
import { useState } from 'react';
import logo from '../assets/images/logo.png';

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

export default function Sidebar({ items, onItemSelect }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (label: string) => {
        if (label === 'Logout') {
            localStorage.removeItem('loggedInUser');
        }
        if (onItemSelect) {
            onItemSelect(label);
        }
    };

    return (
        <aside style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="toggle">
                <div className="logo">
                    <img src={logo} />
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
                    <a href={item.href} key={index} onClick={() => handleItemClick(item.label)} className={item.active ? 'active' : ''}>
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