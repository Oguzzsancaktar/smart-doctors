import React from 'react'
// Components
import fetcher from '../../../api/fetcherConfig'
import { DoctorGeneralInfoCard } from '../card'
// Constants
import { DOCTORS } from '../../../constants/apiEndpoints'
// Libs
import useSWR from 'swr'
import map from 'lodash/map'
// Models
import {ICallResponse, IDoctor, IDoctorSpeciality} from '../../../models'
import { ConfirmSelectButton } from '../../button'

interface IProps { }
const SelectDoctorList: React.FC<IProps> = () => {
  const { data: doctorsData, error } = useSWR<ICallResponse<IDoctor[]>>(DOCTORS, fetcher)

  if (!doctorsData) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full flex flex-col pr-[1.5rem]">
      <ul className="w-full flex flex-col pl-[3rem]">
        {map(doctorsData.value, (doctor, index) => {
          return (
            <li
              className="w-full h-[9rem] border-b-[1px]  py-[1.7rem] border-gallery "
              key={index}
            >
              <ConfirmSelectButton>
                <DoctorGeneralInfoCard doctor={doctor} />
              </ConfirmSelectButton>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SelectDoctorList 
