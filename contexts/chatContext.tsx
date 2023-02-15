import { createContext, useContext, useMemo, useState } from 'react';
// Constants.
import { initialDoctor } from '../constants/initialValues';
// Models.
import { EUserType, IDoctor } from '../models';

const ChatStateContext = createContext({
  activeConversation: initialDoctor,
});

const ChatApiContext = createContext({
  setActiveConversation: (conversation: IDoctor) => {},
});

const useChatStateContext = () => {
  const context = useContext(ChatStateContext);

  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }

  return context;
};

const useChatApiContext = () => {
  const context = useContext(ChatApiContext);

  if (!context) {
    throw new Error('useChatApiContext must be used within a ChatProvider');
  }

  return context;
};

// Todo Change Logic IDoctor to IConversation
const ChatProvider = ({ children }: any) => {
  const [activeConversation, setActiveConversation] =
    useState<IDoctor>(initialDoctor);

  const chatApi = useMemo(() => {
    return {
      setActiveConversation: (conversation: IDoctor) =>
        setActiveConversation(conversation),
    };
  }, [setActiveConversation]);

  return (
    <ChatStateContext.Provider
      value={{
        activeConversation,
      }}
    >
      <ChatApiContext.Provider value={chatApi}>
        {children}
      </ChatApiContext.Provider>
    </ChatStateContext.Provider>
  );
};

export { ChatProvider, useChatStateContext, useChatApiContext };
