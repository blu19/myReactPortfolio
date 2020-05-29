import React from 'react';
import { Document } from 'react-pdf';

function ResumeCV() {
    return (
      <div>
        <Document>
            <a
                target='_blank'
                href='./BrianUlatowski2020.pdf'
                className='nav-links'
                style={{ color: 'red' }}
            >
                Resume/CV
            </a>
        </Document>
      </div>
    );
}

export default ResumeCV;