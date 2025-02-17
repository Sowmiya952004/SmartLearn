import React, { useState } from 'react';

const Page4 = () => {
  const [steps, setSteps] = useState([]); // Array to store steps
  const [currentStep, setCurrentStep] = useState(''); // Current step being typed
  const [file, setFile] = useState(null); // Current file being uploaded
  const [editIndex, setEditIndex] = useState(null); // Index of the step being edited

  // Function to handle adding or editing a step
  const handleAddStep = () => {
    if (currentStep.trim() !== '' || file) {
      if (editIndex !== null) {
        // Edit the existing step
        const updatedSteps = [...steps];
        updatedSteps[editIndex] = { step: currentStep, file };
        setSteps(updatedSteps);
        setEditIndex(null); // Reset edit state
      } else {
        // Add a new step
        setSteps([...steps, { step: currentStep, file }]);
      }
      setCurrentStep(''); // Reset input field
      setFile(null); // Reset file
    }
  };

  // Function to handle file drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile); // Set dropped file
    }
  };

  // Function to handle file upload via input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Set selected file
    }
  };

  // Function to handle marking a step as completed
  const handleCompleteStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps[index].completed = !updatedSteps[index].completed;
    setSteps(updatedSteps);
  };

  // Function to handle editing a step
  const handleEditStep = (index) => {
    setCurrentStep(steps[index].step);
    setFile(steps[index].file);
    setEditIndex(index);
  };

  // Function to handle removing a step
  const handleRemoveStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f8ff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#4682b4',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        To Do
      </header>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '20px',
          gap: '20px',
        }}
      >
        {/* Column 1: Steps Saved */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#e8f1f9',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Steps Saved</h3>
          <ol style={{ fontSize: '16px', color: '#34495e' }}>
            {steps.length > 0 ? (
              steps.map((step, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '10px',
                    textDecoration: step.completed ? 'line-through' : 'none',
                  }}
                >
                  {step.step}
                  {step.file && (
                    <div style={{ fontSize: '14px', marginTop: '5px' }}>
                      <strong>File:</strong> {step.file.name}
                    </div>
                  )}
                  <div style={{ marginTop: '5px' }}>
                    <button onClick={() => handleCompleteStep(index)}>Complete</button>
                    <button onClick={() => handleEditStep(index)} style={{ marginLeft: '10px' }}>
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveStep(index)}
                      style={{ marginLeft: '10px' }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p style={{ color: '#7f8c8d' }}>No steps added yet.</p>
            )}
          </ol>
        </div>

        {/* Column 2: Step by Step */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Step by Step</h3>
          <input
            type="text"
            placeholder="Add your step..."
            value={currentStep}
            onChange={(e) => setCurrentStep(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
          <button
            onClick={handleAddStep}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4682b4',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            {editIndex !== null ? 'Update Step' : 'Add Step'}
          </button>
        </div>

        {/* Column 3: Drag Your Files */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#e8f1f9',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          }}
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3 style={{ color: '#2c3e50' }}>Drag Your Files</h3>
          <p style={{ color: '#34495e' }}>
            Drag and drop files here, or click below to upload.
          </p>
          <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
          {file && (
            <div style={{ fontSize: '14px', marginTop: '10px' }}>
              <strong>Selected File:</strong> {file.name}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#4682b4',
          padding: '10px',
          textAlign: 'center',
          color: 'white',
          fontSize: '18px',
        }}
      >
        Happy Journey
      </footer>
    </div>
  );
};

export default Page4;
