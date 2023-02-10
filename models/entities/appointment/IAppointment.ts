import { IDoctor } from '../doctor';
import { IDoctorSpeciality, IDoctorSpecialityItem } from '../doctor-speciality';
import { IPatient } from '../patient';

export default interface IAppointment {
  id: string;
  patientId: string;
  specialty: IDoctorSpeciality;
  specialtyId: IDoctorSpecialityItem['id'];
  note: string;
  attachment: string;
  appointmentDate: string;
  appointmentTime: string;
  status: number;
}
