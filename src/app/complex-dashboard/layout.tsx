export default function ComplexDashboardLayout({
    children,
    revenue, 
    notifications, 
    users,
    login
}: {
        children: React.ReactNode;
        revenue: React.ReactNode;
        notifications: React.ReactNode;
        users: React.ReactNode;
        login: React.ReactNode;
        // Add other props as needed
    }) {
    const isLoggedIn = true; // Replace with your actual login logic
    return  isLoggedIn ? (
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
    ) : (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Please log in to access the dashboard</h1>
            <div>{login}</div>
        </div>
    )
}
