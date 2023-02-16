import { Input } from '@nextui-org/react';
import React from 'react';
import { selectIcon } from '../../utils/selectIconUtils';
import { themeColors } from '../../constants';

interface IProps {
  icon?: string;
}

const Searchbar: React.FC<IProps> = ({ icon = 'search' }) => {
  return (
    <div className="w-full h-full">
      <Input
        css={{
          height: '100%',
          border: '2px solid' + themeColors.easternBlue,
        }}
        style={{
          fontSize: '14px',
        }}
        aria-label="Search"
        className="h-full"
        clearable
        bordered
        fullWidth
        // @ts-ignore nextui bug
        borderWeight="none"
        color="primary"
        size="lg"
        placeholder="Search"
        contentLeftStyling={true}
        contentLeft={
          <div className="w-[14px]">
            {selectIcon(icon, '10', themeColors.easternBlue)}
          </div>
        }
      />
      {/* <input type="text" placeholder="Search" className="w-full border-solid" /> */}
    </div>
  );
};

export default Searchbar;
