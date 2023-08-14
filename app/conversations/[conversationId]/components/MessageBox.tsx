"use client";

import { FullMessageType } from "@/app/types/index";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { BsFillPersonFill } from 'react-icons/bs';
import { format } from "date-fns";

interface MessageBoxProps {
    data: FullMessageType;
    isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
    const session = useSession();
    const isOwn = session?.data?.user?.email === data?.sender?.email;
    const seenList = (data.seen || []).filter((user) => user.email !== data?.sender?.email).map((user) => user.name).join(',');

    const container = clsx(`flex gap-3 p-4`, isOwn && 'justify-end');
    const body = clsx('flex flex-col gap-2', isOwn && 'items-end');
    const message = clsx('text-sm overflow-hidden p-2 rounded-lg w-fit text-center', isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100');

    return (
        <div className={container}> 
            <div className={body}>
                <div className="flex items-center gap-1 justify-stretch">
                    <div className="text-sm text-gray-700 pr-4">
                        <div>{data.sender.name}</div>
                    </div>
                    <div className="text-xs text-gray-400">
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div className={message}>
                    <div>{data.body}</div>
                </div>
                {isLast && isOwn && seenList.length>0 && (
                    <div className="text-xs font-light text-gray-500">
                        {`Seen by ${seenList}`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageBox;