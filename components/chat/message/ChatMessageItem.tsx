import { Avatar } from '@nextui-org/react';
import React from 'react';

interface IProps {
  isOwnMessage: boolean;
  text: string;
  senderPhoto?: string;
}
const ChatMessageItem: React.FC<IProps> = ({
  isOwnMessage,
  text,
  senderPhoto,
}) => {
  const renderSwitch = () => {
    switch (isOwnMessage) {
      case true:
        return (
          <div className="border-[2px] border-easternBlue rounded-[8px] my-[2rem] w-auto max-w-[80%] pl-[2rem] py-[1.5rem] ml-auto mr-[2rem] flex relative">
            <span className="text-easternBlue w-[calc(100%-30px)]  text-[12px] leading-[13px]">
              {text}
            </span>
            <span className="w-[30px] text-center absolute bottom-[10px] right-[10px] text-[12px] leading-[13px] text-easternBlue ">
              09:30
            </span>
          </div>
        );
      case false:
        return (
          <div className="flex my-[2rem]">
            <span className="w-[4rem] h-[4rem] mx-[2rem]">
              <Avatar
                squared
                src={senderPhoto}
                text="Faisal"
                size={'xl'}
                bordered={false}
                //@ts-ignore // next ui bug - contribute
                borderWeight={'none'}
              />
            </span>

            <div className="border-[2px] border-corduroy rounded-[8px] w-auto max-w-[80%] pl-[2rem] py-[1.5rem] mr-auto flex relative">
              <span className="text-corduroy w-[calc(100%-30px)]  text-[12px] leading-[13px]">
                {text}
              </span>
              <span className="w-[30px] text-center absolute bottom-[10px] right-[10px] text-[12px] leading-[13px]">
                09:30
              </span>
            </div>
          </div>
        );
      default:
        return (
          <div className="border-[2px] border-corduroy rounded-[8px] my-[2rem] w-auto max-w-[80%] pl-[2rem] py-[1.5rem] mr-auto flex relative">
            <span className="text-corduroy w-[calc(100%-30px)]  text-[12px] leading-[13px]">
              {text}
            </span>
            <span className="w-[30px] text-center absolute bottom-[10px] right-[10px] text-[12px] leading-[13px]">
              09:30
            </span>
          </div>
        );
    }
  };

  return renderSwitch();
};

export default ChatMessageItem;
