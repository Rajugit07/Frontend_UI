import { ChevronDown } from "lucide-react";

const CreateKnowledgeBase = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-end bg-black/30 ">
            <div className="w-[30%] h-full bg-white p-4 shadow-lg space-y-4 relative">
                {/* header */}

                <div className="pb-5 border-b border-gray-300">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-[#1a1a3a] leading-tight">
                                Create New Knowledge Base
                            </h2>
                            <p className="text-[14.5px] text-[#7a7a9a] mt-1 leading-snug">
                                Best for quick answers from documents, websites
                                and text files.
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-0.5 p-1 rounded-md cursor-pointer"
                        >
                            X
                        </button>
                    </div>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-[14.5px] font-medium text-[#1a1a3a]">
                        Name (Cannot be edited later)
                        <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-10 px-3.5 text-[13px] text-[#1a1a3a] placeholder-[#b0b0cc] border border-[#e0e0f0] rounded-lg outline-none bg-white"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                    <label className="text-[14.5px] font-medium text-[#1a1a3a]">
                        Description
                    </label>
                    <textarea
                        placeholder="Description"
                        rows={5}
                        className="w-full px-3.5 py-3 text-[13px] text-[#1a1a3a] placeholder-[#b0b0cc] border border-[#e0e0f0] rounded-lg outline-none  bg-white resize-none"
                    />
                </div>

                {/* Vector Store */}
                <div className="flex flex-col gap-2">
                    <label className="text-[14.5px] font-medium text-[#1a1a3a]">
                        Vector Store
                        <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <div className="relative">
                        <button className="w-full h-10 px-3.5 text-[13px] text-[#1a1a3a] border border-[#e0e0f0] rounded-lg bg-white flex items-center justify-between  outline-none">
                            <span>Qdrat</span>
                            <span
                                className={`text-[#9b99c4] transition-transform duration-200`}
                            >
                                <ChevronDown size={18} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* LLM Embedding Model */}
                <div className="flex flex-col gap-2">
                    <label className="text-[14.5px] font-medium text-[#1a1a3a]">
                        LLM Embedding Model
                        <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <div className="relative">
                        <button className="w-full h-10 px-3.5 text-[13px] text-[#1a1a3a] border border-[#e0e0f0] rounded-lg bg-white flex items-center justify-between ">
                            <span className="truncate pr-2">
                                text-embedding-ada-002
                            </span>
                            <span>
                                <ChevronDown size={18} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* footer */}
                <button className="bg-primary text-sm text-white px-4 py-2 rounded-md absolute bottom-4 right-4">
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreateKnowledgeBase;
