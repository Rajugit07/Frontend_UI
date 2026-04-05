import Input from "../ui/Input";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-12 bg-[image:var(--bg-gradient-main)] text-white px-4 rounded-xl">
            <div className="flex gap-2">
                <div>Logo</div>
                <div className="flex items-center px-4 py-0.5 rounded-md bg-secondary">
                    Workspace1
                    <span>
                        <ChevronDown size={18} />
                    </span>
                </div>
            </div>
            <div>
                <Input />
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <Bell size={20} className="text-blue-50" />
                </div>
                <div className="px-1.5 py-1 rounded-full bg-primary text-black font-semibold">
                    RP
                </div>
            </div>
        </div>
    );
};

export default Navbar;
