import { Plus } from "lucide-react";

const Button = ({ onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="text-sm border px-2 py-2 rounded-md border-none bg-primary text-white flex items-center gap-2 cursor-pointer"
            >
                <span>
                    <Plus size={18} />
                </span>
                Create New
            </button>
        </div>
    );
};

export default Button;
