'use client';

import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import { HiPhoto, HiPaperAirplane } from "react-icons/hi2";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import { FullMessageType } from "@/app/types";
import { find } from "lodash";
import MessageInput from "./MessageInput";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);
  const { conversationId } = useConversation();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setValue('message', '', { shouldValidate: true })
    await axios.post('/api/messages', {
      ...data, conversationId
    })
    window.location.reload()
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message}
          data={message}
        />
      ))}
      <div className="pt-24" ref={bottomRef} />
      <div className="py-4 px-4 bg-white border-t flex items-start gap-2 lg:gap-4 w-full">
        <HiPhoto size={30} className="text-sky-500" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
          <MessageInput id="message" register={register} errors={errors} required placeholder="Write a message" />
          <button type="submit" className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
            <HiPaperAirplane size={18} className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Body;