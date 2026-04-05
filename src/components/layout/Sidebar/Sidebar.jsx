import { SIDEBAR_ITEMS } from "./sidebar.constants";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
    return (
        <aside className="w-56 h-screen  border-r-2 border-dotted border-zinc-300 px-1 py-4">
            {SIDEBAR_ITEMS.map((section) => (
                <SidebarSection key={section.title} section={section} />
            ))}
        </aside>
    );
};

export default Sidebar;
