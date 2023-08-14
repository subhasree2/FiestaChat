import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

interface ConversationsLayoutProp {
    children: React.ReactNode
}

export default async function ConversationsLayout({ children }: ConversationsLayoutProp) {

    const conversations = await getConversations();
    return (
        // @ts-ignore
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
    )
}