import * as LucideIcons from "lucide-react";

const Card = ({ title, description, date, icons }) => {
    const Icon = LucideIcons[icons];

    return (
        <div className="flex flex-col justify-between border border-zinc-200 rounded-lg p-4 h-52 bg-white">
            {/* Top Section */}
            <div className=" border-zinc-200 pb-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-base  font-semibold text-zinc-800 capitalize">
                        {title}
                    </h2>
                    <Icon size={18} className="text-zinc-500" />
                </div>

                <p className="text-sm text-zinc-600 mt-2">{description}</p>
            </div>

            {/* Bottom Section */}
            <p className="text-xs text-zinc-500 mt-3 border-t border-zinc-200 pt-4">
                Created on: {date}
            </p>
        </div>
    );
};

export default Card;
