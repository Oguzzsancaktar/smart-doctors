import { Button } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import { useOutsideTrigger } from '../../hooks'

interface IProps {
  children: React.ReactElement
  isButton?: boolean
}

const ConfirmSelectButton: React.FC<IProps> = ({
  children,
  isButton = false,
}) => {
  // Refferances
  const componentRef = useRef(null)
  // States
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  // Handlers
  const handleConfirm = () => {
    setIsConfirmOpen(false)
  }

  // Setters
  const setChildren = () => {
    const updatedChildren = React.cloneElement(children as React.ReactElement, {
      onPress: () => setIsConfirmOpen(!isConfirmOpen),
      className:
        isButton &&
        'border-solid border-2 ' +
        (isConfirmOpen
          ? 'border-mineShaft bg-mineShaft text-white '
          : 'border-easternBlue bg-white text-easternBlue'),
    })

    return updatedChildren
  }

  // Hooks
  useOutsideTrigger(componentRef, () => setIsConfirmOpen(false))

  return (
    <div
      ref={componentRef}
      className="w-full flex flex-row h-full"
      onClick={() => setIsConfirmOpen(!isConfirmOpen)}
    >
      <div
        className={
          'h-full transition-all duration-1000  ' +
          (isConfirmOpen ? 'w-[calc(100%-100px)]  mr-[10px]' : 'w-full')
        }
      >
        {setChildren()}
      </div>
      { }
      <Button
        css={{
          borderWidth: '2px',
          borderRadius: '12px',
          borderColor: '$corduroy',
          fontSize: '16px',
          fontFamily: 'Ubuntu-Bold',
          width: '100%',
          height: '100%',
          transition: 'all 0.4 ease',
          minWidth: isConfirmOpen ? '100px' : '0px',
          padding: isConfirmOpen ? '0 1rem' : '0',
        }}
        className={
          'bg-easternBlue transition-all duration-1000 text-white ' +
          (isConfirmOpen
            ? 'w-[100px] max-w-[100px]  opacity-100'
            : 'w-[0px] max-w-0  opacity-0')
        }
        onPress={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  )
}

export default ConfirmSelectButton 
