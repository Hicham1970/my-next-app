export default function ComplexDashboardLayout({
    children,
    revenue, 
    notifications, 
    users
}: {
        children: React.ReactNode;
        revenue: React.ReactNode;
        notifications: React.ReactNode;
        users: React.ReactNode;
    }) {
    return (
        <div>
            <div>{children}</div> {/**Content from page.tsx */}
            <div className="flex gap-4 min-h-screen"> 
                <div className="w-1/2"> 
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
            <div className="w-1/2 h-screen flex align-center justify-center align-items-center   gap-4"> 
                    {notifications}
                </div>
            </div>
        </div>
    ) 
}
