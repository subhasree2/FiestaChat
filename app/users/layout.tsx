import React from "react";
import getUsers from "../actions/getUsers";
import Sidebar from '../components/sidebar/Sidebar';
import UserList from "./components/UserList";

interface LayoutProps {
    children: React.ReactNode;
}

export default async function UsersLayout({ children }: LayoutProps) {

    const users = await getUsers();
    console.log(users);
    
    return (
        // @ts-ignore
        <Sidebar>
            <div className="h-full ">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}