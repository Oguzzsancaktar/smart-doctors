import { IDoctorSpeciality } from '../doctor-speciality';
import IWorkHours from './IWorkHours';

export default interface IHoursOfWork {
  specialty: IDoctorSpeciality;
  dayOfWeek: string;
  hours: IWorkHours[];
}
