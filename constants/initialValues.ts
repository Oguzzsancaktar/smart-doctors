import { IDoctor, IDoctorSpeciality, IDoctorSpecialityItem } from '../models';

export const initialSpeciality: IDoctorSpeciality = {
  id: '',
  name: '',
  children: [],
};

export const initialSpecialityItem: IDoctorSpecialityItem = {
  id: '',
  name: '',
};

export const initialDoctor: IDoctor = {
  id: '',
  name: '',
  surname: '',
  email: '',
  phone: '',
  gender: 2,
  birthDate: '',
  profileImage: '',
  title: '',
  biography: '',
  specialties: [],
  languages: [],
  polyclinics: [],
  hoursOfWork: [],
};
