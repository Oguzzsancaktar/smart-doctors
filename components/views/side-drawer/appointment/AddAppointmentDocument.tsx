import React from 'react';
// Libs.
import { Textarea } from '@nextui-org/react';
// Constants.
import { themeColors } from '../../../../constants';
//Components.
import { CustomDropFileArea, DragDropFileUploader } from '../../..';
import { selectIcon } from '../../../../utils/selectIconUtils';

const AddAppointmentDocument = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <h5
        className={
          'h-[10rem] flex items-center justify-center text-[20px] text-easternBlue font-UbuntuBold px-[3rem] border-b-[1px] border-edgeWater  '
        }
      >
        Add a document for your doctor
      </h5>

      <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem)] mr-[1.5rem] py-[4rem] ">
        <div className="w-full pl-[3rem] pr-[1.5rem] h-[27rem]">
          <Textarea
            style={{
              height: '27rem',
              backgroundColor: 'white',
            }}
            css={{
              width: '100%',
              height: '27rem',
              border: '2px solid ' + themeColors.easternBlue,
              backgroundColor: 'white',
            }}
            className="createAppointmentTextArea"
            color="primary"
            labelPlaceholder="Type in a note for your doctor"
          />
        </div>

        <div className="pl-[3rem] pr-[1.5rem] mt-[1rem] h-[5rem]">
          <DragDropFileUploader
            children={<CustomDropFileArea />}
            classes={''}
            label={''}
            handleFileChange={function (file: File): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>

        <div className="flex items-center justify-center mt-[2rem]">
          <span className="mr-[1rem]">{selectIcon('file')}</span>
          <h3 className="mr-[0.5rem] font-UbuntuBold text-corduroy text-[1.5rem]">
            results_mr.pdf
          </h3>
          <h4 className=" text-corduroy text-[1.5rem]">
            uploaded 13.01.22 13:00:32
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AddAppointmentDocument;
