import { IDoctor } from '../doctor';
import { IDoctorSpeciality, IDoctorSpecialityItem } from '../doctor-speciality';
import { IPatient } from '../patient';

export default interface IAppointment {
  doctor: IDoctor;
  doctorId: IDoctor['id'];
  specialty: IDoctorSpeciality;
  specialtyId: IDoctorSpeciality['id'];
  note: string;
  attachment: string;
  appointmentDate: string;
  appointmentTime: string;
}
