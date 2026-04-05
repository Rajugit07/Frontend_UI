import SidebarItem from "./SidebarItem";

const SidebarSection = ({ section }) => {
    return (
        <div className="mb-6">
            <h3 className="text-xs text-gray-400 font-semibold mb-2">
                {section.title}
            </h3>

            <div className="space-y-1 px-4">
                {section.items.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SidebarSection;
