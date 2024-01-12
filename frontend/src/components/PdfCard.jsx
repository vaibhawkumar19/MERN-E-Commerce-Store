import React, { useState } from 'react';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const PdfCard = ({ title, url }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(url);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-[600px] h-[400px] pdf-card flex flex-col items-center justify-center bg-pink-300 mb-10 rounded-lg p-4 animation-card">
      <EmbedPDF>
        <a href={url}>
          Click here to download the PDF
        </a>
      </EmbedPDF>
      <h2 className='text-lg font-bold pdf-card-heading text-center'>{title}</h2>
    </div>
  );
};

export default PdfCard;

