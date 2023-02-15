import { Button } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import { useOutsideTrigger } from '../../hooks';

interface IProps {
  children: React.ReactElement;
  isButton?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;

  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmSelectButton: React.FC<IProps> = ({
  children,
  isButton = false,
  isDisabled = false,
  isSelected = false,
  onConfirm,
  onCancel,
}) => {
  // Refferances
  const componentRef = useRef(null);
  // States
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Handlers
  const handleConfirm = () => {
    setIsConfirmOpen(false);
    onConfirm && onConfirm();
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
    onCancel && onCancel();
  };

  // Setters
  const setChildren = () => {
    const updatedChildren = React.cloneElement(children as React.ReactElement, {
      onPress: () => !isDisabled && setIsConfirmOpen(!isConfirmOpen),
      className:
        isButton &&
        'border-solid border-2 ' +
          (isSelected
            ? 'border-easternBlue bg-easternBlue text-white '
            : isConfirmOpen
            ? 'border-mineShaft bg-mineShaft text-white '
            : 'border-easternBlue bg-white text-easternBlue'),
    });

    return updatedChildren;
  };

  // Hooks
  useOutsideTrigger(componentRef, () => setIsConfirmOpen(false));

  return (
    <div
      ref={componentRef}
      className="w-full flex flex-row h-full"
      onClick={() => !isDisabled && setIsConfirmOpen(!isConfirmOpen)}
    >
      <div
        className={
          'h-full transition-all duration-1000 ' +
          (isConfirmOpen ? ' w-[calc(100%-160px)]  mr-[10px]' : 'w-full')
        }
      >
        {setChildren()}
      </div>

      <div
        className={
          'flex transition-all duration-1000  ' +
          (isConfirmOpen
            ? 'w-[160px] max-w-[160px]  opacity-100'
            : 'w-[0px] max-w-0  opacity-0')
        }
      >
        <Button
          css={{
            borderWidth: '2px',
            borderRadius: '12px',
            borderColor: '$corduroy',
            fontSize: '16px',
            fontFamily: 'Ubuntu-Bold',
            width: 'calc(100%-40px-1rem)',
            height: '100%',
            transition: 'all 0.4 ease',
            minWidth: isConfirmOpen ? '100px' : '0px',
            padding: isConfirmOpen ? '0 1rem' : '0',
            marginRight: '1rem',
          }}
          className={'transition-all duration-1000 bg-easternBlue  text-white '}
          onPress={handleConfirm}
        >
          Confirm
        </Button>

        <Button
          css={{
            borderWidth: '2px',
            borderRadius: '12px',
            borderColor: '$corduroy',
            fontSize: '16px',
            fontFamily: 'Ubuntu-Bold',
            width: '40px',
            height: '100%',
            transition: 'all 0.4 ease',
            minWidth: isConfirmOpen ? '40px' : '0px',
            padding: '0',
          }}
          className={
            'transition-all duration-1000 bg-roofTerracotta text-white '
          }
          onPress={handleCancel}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default ConfirmSelectButton;
