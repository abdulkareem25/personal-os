import React, { useState } from 'react';
import './pdf.scss';
import MacWindow from '../macwindow/MacWindow';

const PdfViewer = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFileUrl(url);
  };

  return (
    <MacWindow title="PDF Viewer" logo="/doc-icons/pdf.svg">
      <div className="pdf-window">
        {!fileUrl && (
          <div className="pdf-center">
            <label className="upload-btn">
                Upload PDF
              <input type="file" accept="application/pdf" hidden onChange={handleFileChange} />
            </label>
            <p className="hint">Upload a PDF to preview it</p>
          </div>
        )}

        {fileUrl && (
          <iframe
            src={fileUrl}
            title="PDF Preview"
            className="pdf-frame"
          />
        )}
      </div>
    </MacWindow>
  );
};

export default PdfViewer;