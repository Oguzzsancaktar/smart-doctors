import React, { useReducer } from 'react';
// Models
import { ICallResponse, IDoctor, ILanguage } from '../../../models';
//Constants
import { DOCTORS } from '../../../constants/apiEndpoints';
// APi.
import fetcher from '../../../api/fetcherConfig';
// Libs
import { Button, Collapse } from '@nextui-org/react';
// Utils
import { selectIcon } from '../../../utils/selectIconUtils';
import useSWR from 'swr';
// Components.
import { Searchbar } from '../../searchbar';
import { LanguageFilter, SpecialityFilter } from '../../filters';
import { FavoriteDoctorsListItem } from '../../favorites';
import map from 'lodash/map';
import { DoctorGeneralInfoCard, DoctorSpecialities } from '../../doctor';

function searchReducer(state, action) {
  switch (action.type) {
    case 'search':
      return { ...state, searchText: action.payload };
    case 'location':
      return { ...state, location: action.payload };
    case 'speciality':
      return { ...state, specialities: action.payload };
    case 'language':
      return { ...state, languages: action.payload };
    default:
      throw new Error();
  }
}

const initialState = {
  searchText: '',
  location: '',
  specialities: [],
  languages: [],
};

const DoctorSearchPage = () => {
  // State.
  const [searchState, searchDispatch] = useReducer(searchReducer, {
    count: initialState,
  });

  // Api.
  const { data: doctorsData, error } = useSWR<ICallResponse<IDoctor[]>>(
    DOCTORS,
    fetcher
  );

  return (
    <div className="h-full bg-white flex flex-col rounded-[12px] ">
      <div className="h-[8rem] px-[4rem]  border-b-[1px] border-gallery flex items-center justify-between">
        <div
          className={
            'flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] text-easternBlue'
          }
        >
          <span className="mr-[1.8rem] ">{selectIcon('stethoscope')} </span>
          <span>Doctor Search</span>
        </div>
      </div>

      <div className="pt-[4rem] h-[calc(100%-8rem)] flex flex-row w-full   ">
        <div className="px-[4rem] w-[40rem] border-r-[1px] border-edgeWater overflow-y-auto">
          <div className="w-full  flex flex-col justify-center items-center">
            <div className="w-full mb-[2rem]">
              <span className="mb-[1rem] inline-block font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem]">
                Search by name
              </span>
              <div className="w-full h-[5rem] ">
                <Searchbar icon="search" />
              </div>
            </div>

            <div className="w-full mb-[2rem] ">
              <span className=" mb-[1rem] inline-block font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem]">
                Location
              </span>
              <div className="w-full h-[5rem] ">
                <Searchbar icon="map-pin" />
              </div>
            </div>

            <div className="w-full mb-[2rem] ">
              <span className=" mb-[1rem] inline-block font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem]">
                Choose specialty
              </span>
              <div className="w-full h-[50rem] ">
                <SpecialityFilter />
              </div>
            </div>

            <div className="w-full mb-[2rem] ">
              <span className=" mb-[1rem] inline-block font-UbuntuBold text-corduroy text-[1.6rem] leading-[1.8rem]">
                Choose language
              </span>
              <div className="w-full h-[15rem] ">
                <LanguageFilter />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[4rem] w-[calc(100%-40rem)] overflow-y-auto">
          <Collapse.Group>
            {map(doctorsData?.value, (doctor, key) => {
              return (
                <Collapse
                  css={{ padding: '0px' }}
                  style={{ padding: '0px' }}
                  title={
                    <div className="flex justify-between items-center mr-[2rem]">
                      <DoctorGeneralInfoCard height="7rem" doctor={doctor} />
                      <Button
                        className="bg-easternBlue h-[4rem] px-[1rem]"
                        auto
                        size={'sm'}
                        color="primary"
                        css={{ borderRadius: '6px', width: '12rem' }}
                      >
                        <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
                          New Appointment
                        </h4>
                      </Button>
                    </div>
                  }
                >
                  <h3 className="font-UbuntuBold text-easternBlue text-[1.4rem] leading-[1.6rem] mb-[2rem]">
                    Specialities
                  </h3>
                  <DoctorSpecialities specialities={doctor.specialties} />
                </Collapse>
              );
            })}
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
};

export default DoctorSearchPage;
