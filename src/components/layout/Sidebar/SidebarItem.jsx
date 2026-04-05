import * as Icons from "lucide-react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
    const Icon = Icons[item.icon];

    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                    ${isActive ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"}`
            }
        >
            <Icon size={18} />
            <span>{item.label}</span>
        </NavLink>
    );
};

export default SidebarItem;
