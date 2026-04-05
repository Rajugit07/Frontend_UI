import Card from "../ui/Card";
import { CARD_ITEMS } from "../ui/card.items";
import { Search } from "lucide-react";
import { ChevronsLeft } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import CreateKnowledgeBase from "../ui/CreateKnowledgeBase";

const Workspace = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex flex-col justify-evenly ml-6">
            {/* header */}
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Knowledge Base</p>
                <div className="space-x-4 flex items-center">
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-md border-zinc-200">
                        <span>
                            <Search className="w-4 h-4 text-zinc-200" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-none outline-none text-zinc-500 text-sm"
                        />
                    </div>
                    {/*  */}
                    <Button onClick={() => setOpen(true)} />
                </div>
            </div>
            {/* main content */}
            <div className="w-full h-auto overflow-y-clip border rounded-md border-zinc-300 mt-4 p-4 grid grid-cols-3 gap-4">
                {CARD_ITEMS.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
            {/* bottom navigation */}
            <div className="flex justify-between items-center mt-14">
                <div>6 rows</div>
                <div className=" flex gap-8">
                    <div className="flex gap-4 text-center ">
                        <p>Row per page</p>
                        <select
                            name=""
                            id=""
                            className="border rounded-md border-zinc-300 p-1 px-4"
                        >
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <div className="flex gap-4 border-l pl-4 border-zinc-300">
                        <p className="text-center">Page 1 of 1</p>
                        <div className="flex items-center gap-2 ">
                            <p className="border p-2 border-zinc-300 rounded-md">
                                <ChevronsLeft size={14} />
                            </p>
                            <p className="border p-2 border-zinc-300 rounded-md">
                                <ChevronLeft size={14} />
                            </p>
                            <p className="border p-2 border-zinc-300 rounded-md">
                                <ChevronRight size={14} />
                            </p>
                            <p className="border p-2 border-zinc-300 rounded-md">
                                <ChevronsRight size={14} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            {open && <CreateKnowledgeBase onClose={() => setOpen(false)} />}
        </div>
    );
};

export default Workspace;
