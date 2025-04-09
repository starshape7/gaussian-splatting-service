import React from 'react';

function Viewer({ viewerUrl }) {
    return (
        <div className="viewer-container">
            <h3>3D Model Viewer</h3>
            <iframe
                src={viewerUrl}
                title="Viewer"
                style={{ width: '100%', height: '500px', border: 'none' }}
            />
        </div>
    );
}

export default Viewer;
