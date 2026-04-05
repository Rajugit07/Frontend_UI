import { Search } from "lucide-react";

const Input = () => {
    return (
        <div className="w-sm h-8 flex items-center gap-x-2  bg-secondary  border-none border-zinc-200 p-2 rounded-md ">
            <Search className="w-4 h-4 text-zinc-200" />
            <input
                type="text"
                placeholder="Search.."
                className="w-full outline-none"
            />
        </div>
    );
};

export default Input;
