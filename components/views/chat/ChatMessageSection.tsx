import React, { useEffect } from 'react';
// Api.
import fetcher from '../../../api/fetcherConfig';
import { DOCTORS } from '../../../constants/apiEndpoints';

// Contexts.
import {
  useChatApiContext,
  useChatStateContext,
} from '../../../contexts/chatContext';
// Models
import { ICallResponse, IDoctor } from '../../../models';
// Utils.
import useSWR from 'swr';
import map from 'lodash/map';
import { selectIcon } from '../../../utils/selectIconUtils';
import { themeColors } from '../../../constants';
import { Input } from '@nextui-org/react';
import { ChatMessageItem } from '../../chat';

const ChatMessageSection = () => {
  // Contexts.
  const { activeConversation } = useChatStateContext();
  const { setActiveConversation } = useChatApiContext();
  // Api.
  const { data: doctorsData, error } = useSWR<ICallResponse<IDoctor[]>>(
    DOCTORS,
    fetcher
  );

  // Handlers.
  const handleConversationClick = (doctor: IDoctor) => {
    setActiveConversation(doctor);
  };

  // Lifecycle.
  useEffect(() => {
    if (doctorsData?.value) {
      setActiveConversation(doctorsData.value[0]);
    }
  }, [doctorsData]);

  return (
    <div className="h-full flex flex-col justify-between px-[2rem] pb-[4rem]">
      <div className="h-[5.8rem] flex items-center justify-between px-[1rem] border-b-[1px] border-jungleMist">
        <h3 className="font-UbuntuBold text-easternBlue text-[1.6rem] leading-[1.8rem]">
          {activeConversation.name + ' ' + activeConversation.surname}
        </h3>
        <div className="flex items-center">
          <span className="mr-[1rem]">
            {selectIcon('search', '15', themeColors.easternBlue)}
          </span>
          <span>{selectIcon('search', '15', themeColors.easternBlue)}</span>
        </div>
      </div>

      <div className="h-[calc(100%-5.8rem-5.8rem)] p-[1rem] overflow-y-auto">
        <ChatMessageItem
          isOwnMessage={false}
          text="Hello Mr. Poller, we have your appointment received and just wanted to confirm it again."
          senderPhoto={activeConversation.profileImage}
        />
        <ChatMessageItem
          isOwnMessage={true}
          text="Danke Herr Doktor. Das Formular zur Erstuntersuchung habe ich ausgefüllt und im System hochgeladen."
        />
        <ChatMessageItem
          isOwnMessage={true}
          text="Danke Herr Doktor. Das Formular zur Erstuntersuchung habe ich ausgefüllt und im System hochgeladen."
        />
      </div>

      <div className="h-[5.8rem] flex items-center justify-between p-[2rem] border-[2px] rounded-[12px] border-easternBlue mx-[1rem]">
        <span className="h-full flex items-center justify-center pr-[1rem] border-r-[1px] border-jungleMist">
          {selectIcon('upload-cloud', '15', themeColors.easternBlue)}
        </span>

        <div className="w-[calc(100%-25px-1rem-1rem-30px-1rem)]">
          <Input
            css={{
              borderRadius: '6px',
              width: '100%',
            }}
            style={{
              backgroundColor: 'white',
              padding: '0',
              fontSize: '1.4rem',
              color: themeColors.corduroy,
            }}
            color="primary"
            placeholder="Write a message"
            bordered
            // @ts-ignore nextui bug
            borderWeight="none"
            name="message-box"
            type="text"
          />
        </div>

        <span className="h-full flex items-center justify-center pl-[1rem] cursor-pointer">
          {selectIcon('bg-send-message', '15', themeColors.easternBlue)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessageSection;
