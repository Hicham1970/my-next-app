
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
            <div style={{ display: "flex" }}>
                <div style={{display:"flex", flexDirection:"column",}}>
                    <div>{users} {/**Component from user analytics */}</div>
                    <div>{revenue} {/**Component from Revenue metrics */}</div>
                </div>
                <div className="flex-1 flex">{notifications} {/**Composant from Notifications */}</div>
                
                
            </div>
        </div>
    ) 
}
