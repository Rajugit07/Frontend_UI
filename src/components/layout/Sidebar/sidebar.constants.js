export const SIDEBAR_ITEMS = [
    {
        title: "MY PROJECTS",
        items: [
            { label: "Agents", icon: "Bot", path: "/agents" },
            { label: "AI Models", icon: "Cpu", path: "/models" },
            { label: "Library", icon: "Book", path: "/library" },
        ],
    },
    {
        title: "ORCHESTRATOR",
        items: [
            { label: "Published", icon: "Upload", path: "/published" },
            { label: "Machines", icon: "Monitor", path: "/machines" },
            { label: "Queues", icon: "List", path: "/queues" },
            { label: "Triggers", icon: "Zap", path: "/triggers" },
            { label: "Jobs", icon: "Briefcase", path: "/jobs" },
            { label: "Executions", icon: "Play", path: "/executions" },
            { label: "Vault", icon: "Shield", path: "/vault" },
            {
                label: "Knowledge Base",
                icon: "BookOpen",
                path: "/kb",
                active: true,
            },
            { label: "Key Store", icon: "Key", path: "/keystore" },
        ],
    },
    {
        title: "ADMIN",
        items: [
            { label: "Tenant", icon: "IdCard", path: "/idcard" },
            { label: "Integration", icon: "Workflow", path: "/workflow" },
        ],
    },
];
