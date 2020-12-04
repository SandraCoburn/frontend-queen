import React, { useState } from 'react';
import DataTable from '../Table/DataTable';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { LoaderSection } from './FileUpload.styles';

const FileUpload = () => {
  const [data, setData] = useState([]);
  const [fileList, setFileList] = useState([]);
  const request = ({ file, onSuccess }) => {
    setTimeout(() => {
      console.log('request', file);
      onSuccess('ok');
    }, 0);
  };

  const props = {
    beforeUpload: (file) => {
      if (file.type !== 'application/json') {
        message.error(`${file.name} is not a json file`);
        return false;
      }
      setFileList([...fileList, file]);
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = JSON.parse(e.target.result);
        console.log('file content', fileContent[0]);
        if (
          fileContent[0].domain !== undefined &&
          fileContent[0].visitors !== undefined &&
          fileContent[0].date !== undefined
        ) {
          setData(fileContent);
        } else {
          message.error(`${file.name} doesn't have the right data`);
        }
      };
      reader.readAsText(file);

      return true;
    },
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <>
      <LoaderSection>
        <div className="p">
          <p> Upload JSON documents</p>
        </div>
        <Upload customRequest={request} {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <div className="table">
          <DataTable data={data} />
        </div>
      </LoaderSection>
    </>
  );
};
export default FileUpload;
