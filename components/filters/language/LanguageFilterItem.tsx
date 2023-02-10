import React from 'react';

// Models.
import { ILanguage } from '../../../models';
// Libs.
import map from 'lodash/map';
// Components.
import { Checkbox } from '@nextui-org/react';

interface IProps {
  language: ILanguage;
}
const LangugaeFilterItem: React.FC<IProps> = ({ language }) => {
  if (!language) return <div>No Data</div>;

  return (
    <li className="w-full flex flex-row items-center pr-[1.5rem] h-[2rem]  mb-[1rem] pl-[1.5rem]">
      <Checkbox size="xl" />
      <p>{language.name}</p>
    </li>
  );
};

export default LangugaeFilterItem;
