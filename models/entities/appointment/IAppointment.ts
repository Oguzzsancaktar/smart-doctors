import { IDoctor } from '../doctor';
import { IPatient } from '../patient';

export default interface IAppointment {
  doctor: IDoctor;
  patient: IPatient;
  date: number;
  duration: number;
}
