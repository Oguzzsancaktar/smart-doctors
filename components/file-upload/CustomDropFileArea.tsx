import React from 'react';
// Components.
import { Button } from '@nextui-org/react';
import { UploadIcon } from '../icons';
import { selectIcon } from '../../utils/selectIconUtils';
import { themeColors } from '../../constants';

const CustomDropFileArea = () => {
  return (
    <Button
      className="border-solid border-2  border-easternBlue h-full w-full  "
      auto
      color="primary"
      css={{ borderRadius: '0.6rem' }}
      size={'sm'}
      disabled={true}
    >
      {selectIcon('upload', themeColors.easternBlue)}
      <h4 className="font-UbuntuBold text-easternBlue text-[1.4rem] leading-[1.6rem] ml-[1rem]">
        Upload a document
      </h4>
    </Button>
  );
};

export default CustomDropFileArea;
