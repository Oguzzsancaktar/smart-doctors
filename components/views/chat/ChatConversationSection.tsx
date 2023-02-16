import React, { useEffect } from 'react';
// Api.
import fetcher from '../../../api/fetcherConfig';
import { DOCTORS } from '../../../constants/apiEndpoints';
// Components.
import { Searchbar } from '../../searchbar';
import { DoctorGeneralInfoCard } from '../../doctor';
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

const ChatConversationSection = () => {
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
    <React.Fragment>
      <div className="h-[5rem] px-[2rem] mb-[2rem] ">
        <Searchbar />
      </div>

      <div className="h-[10rem] ">
        <DoctorGeneralInfoCard isActive={true} doctor={activeConversation} />
      </div>

      <ul className="h-[calc(100%-10rem-5rem)] overflow-y-auto">
        {map(doctorsData?.value, (doctor) => {
          if (doctor.id !== activeConversation.id) {
            return (
              <li
                className="w-full h-[10rem] border-b-[1px] py-[2rem] border-gallery cursor-pointer "
                onClick={handleConversationClick.bind(this, doctor)}
              >
                <DoctorGeneralInfoCard doctor={doctor} />
              </li>
            );
          }
        })}
      </ul>
    </React.Fragment>
  );
};

export default ChatConversationSection;
