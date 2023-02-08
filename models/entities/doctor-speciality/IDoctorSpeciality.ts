import IDoctorSpecialityItem from './IDoctorSpecialityItem';

export default interface IDoctorSpeciality {
  id: string;
  name: string;
  children: IDoctorSpecialityItem[];
}
