import { IDoctor } from '../doctor';
import { IDoctorSpeciality } from '../doctor-speciality';

export default interface IAppointmentCreateDto {
  doctorId: IDoctor['id'];
  specialtyId: IDoctorSpeciality['id'];
  note: 'string';
  attachment: 'string';
  appointmentDate: '2023-02-10';
  appointmentTime: '13:45:42.0000000';
}
