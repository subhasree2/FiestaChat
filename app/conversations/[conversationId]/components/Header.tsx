"use client";
import useOtherUser from "@/app/hooks/useOtherUser";
import Link from "@/node_modules/next/link";
import { Conversation, User } from "@prisma/client";
import { HiChevronLeft } from "react-icons/hi2";
import { BsFillPersonFill } from 'react-icons/bs';

interface HeaderProp {
    conversation: Conversation
}

const Header: React.FC<HeaderProp> = ({ conversation }) => {
    const otherUser = useOtherUser(conversation);

    return (
        <div className="bg-white w-full flex border-b-[1px] py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
            <div className="flex gap-3 items-center">
                <Link href="/conversations" className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer">
                    <HiChevronLeft size={32} />
                </Link>
                <BsFillPersonFill size={20} />
                <div className="flex flex-col">
                    <div>
                        {otherUser.name}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;