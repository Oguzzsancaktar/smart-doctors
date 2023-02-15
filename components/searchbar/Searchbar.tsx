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
        }}
        aria-label="Search"
        className="h-full"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Search"
        contentLeft={selectIcon(icon, '30', themeColors.edgeWater)}
      />
      {/* <input type="text" placeholder="Search" className="w-full border-solid" /> */}
    </div>
  );
};

export default Searchbar;
