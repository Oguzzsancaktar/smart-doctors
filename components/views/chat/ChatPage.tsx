import React from 'react';
// Components.
import ChatConversationSection from './ChatConversationSection';
import ChatMessageSection from './ChatMessageSection';
// Contexts.
import { ChatProvider } from '../../../contexts/chatContext';
// Utils.
import { selectIcon } from '../../../utils/selectIconUtils';

const ChatPage = () => {
  // Todo Pages Layout is same they have head and body. Make them reusable component for maintain easiliy
  return (
    <ChatProvider>
      <div className="h-full bg-white flex flex-col rounded-[12px] ">
        <div className="h-[8rem] px-[4rem]  border-b-[1px] border-gallery flex items-center justify-between">
          <div
            className={
              'flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] text-easternBlue'
            }
          >
            <span className="mr-[1.8rem] ">{selectIcon('message')} </span>
            <span>Messages</span>
          </div>
        </div>

        <div className="px-[5rem] py-[2.5rem] h-[calc(100%-8rem)] flex flex-row w-full ">
          <div className="flex flex-col w-[38rem] min-w-[380px]">
            <ChatConversationSection />
          </div>
          <div className="w-[calc(100%-38rem)] border-[2px] border-easternBlue rounded-[12px]">
            <ChatMessageSection />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatPage;
