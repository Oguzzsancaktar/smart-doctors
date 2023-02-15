import { IPolyclinic } from '../models';

export const getDoctorLocationFromPolyclinic = (polyclinic: IPolyclinic) => {
  if (!polyclinic) return '';
  const { houseNo, street, zipCode } = polyclinic;
  return `${street}, ${houseNo} ${zipCode}`;
};
