import { IPolyclinic } from '../models';

export const getDoctorLocationFromPolyclinic = (polyclinic: IPolyclinic) => {
  const { houseNo, street, zipCode } = polyclinic;
  return `${street}, ${houseNo} ${zipCode}`;
};
