import getCurrentUser from '@/app/actions/getCurrentUser';
import React from 'react';
import DesktopSidebar from '../sidebar/DesktopSidebar';

interface SidebarProps {
    children: React.ReactNode;
}

async function Sidebar({ children }: SidebarProps) {
    const currentUser = await getCurrentUser();
    return (
        <div className='h-full'>
            <DesktopSidebar currentUser={currentUser!}/>
            <main className='lg:pl-20 h-full'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar;