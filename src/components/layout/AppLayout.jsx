import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Workspace from "./Workspace";

const AppLayout = () => {
    return (
        <div className="h-full flex flex-col p-4">
            <nav className="shrink-0">
                <Navbar />
            </nav>
            <div className="flex flex-1 overflow-hidden ">
                <div className="w-[15%] h-full">
                    <Sidebar />
                </div>
                <div className="w-[85%] h-full overflow-y-auto">
                    <Workspace />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
