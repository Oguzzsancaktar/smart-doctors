import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'JPEG', 'PPTX', 'DOCX', 'PDF'];

interface IProps {
  children: React.ReactNode;
  classes: string;
  isMulti?: boolean;
  label: string;
  handleFileChange: (file: File) => void;
}

const DragDropFileUploader: React.FC<IProps> = ({
  isMulti = false,
  handleFileChange,
  label,
  classes,
  children,
}) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    handleFileChange(file);
    setFile(file);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      multiple={isMulti}
      label={label}
      classes={classes}
      children={children}
    />
  );
};

export default DragDropFileUploader;
