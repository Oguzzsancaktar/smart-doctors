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
    <li className="flex w-full h-[3rem] mb-[1rem] ">
      <div className="w-[20px] h-[20px] mr-[2rem]">
        <Checkbox css={{ width: '100%', height: '100%' }} size="lg" />
      </div>
      <p className="font-UbuntuBold text-easternBlue  text-[16px] leading-[18px] ">
        {language.name}
      </p>
    </li>
  );
};

export default LangugaeFilterItem;
