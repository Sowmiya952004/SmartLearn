import React, { useState } from 'react';

const CertiHub = () => {
  const [academicFolders, setAcademicFolders] = useState([]);
  const [extraFolders, setExtraFolders] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [files, setFiles] = useState([]);
  const [storedFiles, setStoredFiles] = useState({
    academic: {},
    extra: {},
  });
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const createFolder = (type) => {
    if (folderName.trim() === '') {
      alert('Please enter a folder name.');
      return;
    }

    if (type === 'academic') {
      setAcademicFolders([...academicFolders, folderName]);
      setStoredFiles({
        ...storedFiles,
        academic: { ...storedFiles.academic, [folderName]: [] },
      });
    } else if (type === 'extra') {
      setExtraFolders([...extraFolders, folderName]);
      setStoredFiles({
        ...storedFiles,
        extra: { ...storedFiles.extra, [folderName]: [] },
      });
    }

    setFolderName('');
  };

  const handleFileUpload = (folderType, folder) => {
    if (files.length === 0) {
      alert('Please select at least one file.');
      return;
    }

    const fileData = Array.from(files).map((file) => ({
      fileName: file.name,
      fileType: file.type,
      fileUrl: URL.createObjectURL(file),
    }));

    const updatedStoredFiles = { ...storedFiles };
    updatedStoredFiles[folderType][folder] = [
      ...(updatedStoredFiles[folderType][folder] || []),
      ...fileData,
    ];

    setStoredFiles(updatedStoredFiles);
    setFiles([]);
    alert('Files uploaded successfully!');
  };

  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
  };

  const handleBackToFolderList = () => {
    setCurrentFolder(null);
  };

  return (
    <div
      style={{
        backgroundColor: '#4682b4', // Blue background
        color: 'white', // White text
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#315a88',
          marginBottom: '20px',
        }}
      >
        <h1>CertiHub</h1>
      </header>

      {/* Body */}
      {currentFolder ? (
        <div>
          <h2>{currentFolder}</h2>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control mb-3"
            style={{ backgroundColor: '#315a88', color: 'white', borderColor: 'white' }}
          />
          <button
            onClick={() =>
              academicFolders.includes(currentFolder)
                ? handleFileUpload('academic', currentFolder)
                : handleFileUpload('extra', currentFolder)
            }
            className="btn btn-light mb-3"
            style={{ color: '#4682b4', backgroundColor: 'white' }}
          >
            Upload Files
          </button>
          <button
            onClick={handleBackToFolderList}
            className="btn btn-light"
            style={{ marginBottom: '20px' }}
          >
            Back to Folders
          </button>
          <h3>Uploaded Files:</h3>
          <ul>
            {(academicFolders.includes(currentFolder)
              ? storedFiles.academic[currentFolder]
              : storedFiles.extra[currentFolder]
            )?.map((file, index) => (
              <li key={index}>
                <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                  {file.fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="row">
          {/* Academic Folders */}
          <div className="col-md-6">
            <h3>Academic Folders</h3>
            <input
              type="text"
              value={folderName}
              onChange={handleFolderNameChange}
              className="form-control mb-3"
              placeholder="Enter folder name"
              style={{
                backgroundColor: '#315a88',
                color: 'white',
                borderColor: 'white',
              }}
            />
            <button
              onClick={() => createFolder('academic')}
              className="btn btn-light mb-3"
              style={{ color: '#4682b4', backgroundColor: 'white' }}
            >
              Create Academic Folder
            </button>

            <div className="d-flex flex-wrap folder-grid">
              {academicFolders.length === 0
                ? 'No folders created.'
                : academicFolders.map((folder, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: '#315a88',
                        color: 'white',
                        padding: '10px',
                        border: '1px solid white',
                        margin: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleFolderClick(folder)}
                    >
                      {folder}
                    </div>
                  ))}
            </div>
          </div>

          {/* Extra Folders */}
          <div className="col-md-6">
            <h3>Extras Folders</h3>
            <input
              type="text"
              value={folderName}
              onChange={handleFolderNameChange}
              className="form-control mb-3"
              placeholder="Enter folder name"
              style={{
                backgroundColor: '#315a88',
                color: 'white',
                borderColor: 'white',
              }}
            />
            <button
              onClick={() => createFolder('extra')}
              className="btn btn-light mb-3"
              style={{ color: '#4682b4', backgroundColor: 'white' }}
            >
              Create Extras Folder
            </button>

            <div className="d-flex flex-wrap folder-grid">
              {extraFolders.length === 0
                ? 'No folders created.'
                : extraFolders.map((folder, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: '#315a88',
                        color: 'white',
                        padding: '10px',
                        border: '1px solid white',
                        margin: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleFolderClick(folder)}
                    >
                      {folder}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#315a88',
          marginTop: '20px',
        }}
      >
        <p>Happy Journey</p>
      </footer>
    </div>
  );
};

export default CertiHub;
