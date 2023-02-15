import { IDoctor } from '../doctor';
import { IDoctorSpecialityItem } from '../doctor-speciality';

export default interface IAppointmentCreateDto {
  doctorId: IDoctor['id'];
  specialtyId: IDoctorSpecialityItem['id'];
  note: string;
  attachment: string;
  appointmentDate: string;
  appointmentTime: string;
}
