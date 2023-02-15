import { IDoctorSpeciality } from '../doctor-speciality';
import { IHoursOfWork } from '../hours-of-work';
import { ILanguage } from '../language';
import { IPolyclinic } from '../polyclinic';

export default interface IDoctor {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  gender: number;
  birthDate: string;
  profileImage: string;
  title: string;
  biography: string;
  specialties: IDoctorSpeciality[];
  languages: ILanguage[];
  polyclinics: IPolyclinic[];
  hoursOfWork: IHoursOfWork[];
}
