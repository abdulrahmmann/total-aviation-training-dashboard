import {useState} from "react";
import {SettingsMenuItems} from "../utils/Constants.js"; // Assuming this import path is correct

export const SettingsMenuItem = ({ItemIcon, ItemName, onItemMenuClick, isActive}) => {
    return (
        <div
            className={`flex items-center py-3 first:-mt-3 last:-mb-3 hover:text-primary font-GothamMedium cursor-pointer ${isActive ? 'text-primary' : ''}`}
            onClick={onItemMenuClick}>
            <img src={ItemIcon} alt={ItemName} className="object-contain mr-3"/>
            {ItemName}
        </div>
    );
}

export default function SettingsMenu() {
    const [activeItem, setActiveItem] = useState('Profile Info');
    const handleMenuItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    return (
        <div className={`sticky top-[104px]`}>
            <div className={`flex flex-col px-5 pt-5 pb-6 box box--stacked`}>
                {
                    SettingsMenuItems.map(item => (
                        <SettingsMenuItem
                            key={item.name}
                            ItemName={item.name}
                            ItemIcon={item.icon}
                            onItemMenuClick={() => handleMenuItemClick(item.name)} // Changed from onClick to onItemMenuClick
                            isActive={activeItem === item.name}
                        />
                    ))
                }
            </div>
        </div>
    );
}
