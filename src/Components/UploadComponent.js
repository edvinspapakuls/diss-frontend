import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [googleToken, setGoogleToken] = useState('');
  const [oneDriveToken, setOneDriveToken] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('googleToken', googleToken);
    formData.append('oneDriveToken', oneDriveToken);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      alert('Upload successful!');
      console.log(res.data);
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Google Access Token"
        value={googleToken}
        onChange={(e) => setGoogleToken(e.target.value)}
      />
      <input
        type="text"
        placeholder="OneDrive Access Token"
        value={oneDriveToken}
        onChange={(e) => setOneDriveToken(e.target.value)}
      />
      <button onClick={handleUpload}>Upload to Both</button>
    </div>
  );
};

export default UploadComponent;
