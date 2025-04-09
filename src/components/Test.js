import React, { useState, useRef } from 'react';
import axios from 'axios';

function Test() {
    const [statusMessage, setStatusMessage] = useState('');
    const [viewerUrl, setViewerUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileUpload = async () => {
        if (!fileInputRef.current.files || fileInputRef.current.files.length === 0) {
            alert('Please select files to upload.');
            return;
        }

        const formData = new FormData();
        Array.from(fileInputRef.current.files).forEach((file) => {
            formData.append('files', file);
        });

        try {
            setIsLoading(true);
            setStatusMessage('Uploading files...');
            const response = await axios.post('http://localhost:8080/upload/auto', formData);
            const outputUUID = response.data.outputUUID;
            setViewerUrl(`http://localhost:8080/output/${outputUUID}/point_cloud/iteration_10/index.html`);
            setStatusMessage('Upload successful!');
        } catch (error) {
            console.error('Upload failed:', error);
            setStatusMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>File Upload Test</h2>
            <p>Upload files to process with the AI model.</p>
            <div style={{ margin: '20px 0' }}>
                <input
                    type="file"
                    ref={fileInputRef}
                    multiple
                    style={{ display: 'none' }}
                    id="fileInput"
                />
                <label
                    htmlFor="fileInput"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'inline-block',
                        marginRight: '10px',
                    }}
                >
                    Choose Files
                </label>
                <button
                    onClick={handleFileUpload}
                    disabled={isLoading}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: isLoading ? '#ccc' : '#007bff',
                        color: '#fff',
                        borderRadius: '5px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        border: 'none',
                    }}
                >
                    {isLoading ? 'Uploading...' : 'Upload'}
                </button>
            </div>
            <p style={{ color: statusMessage.includes('error') ? 'red' : 'green' }}>
                {statusMessage}
            </p>
            {viewerUrl && (
                <div style={{marginTop: '20px'}}>
                    <p>File processed successfully. View the result:</p>
                    <a href={viewerUrl} target="_blank" rel="noopener noreferrer">
                        Open Viewer
                    </a>
                </div>
            )}
        </div>
    );
}

export default Test;
