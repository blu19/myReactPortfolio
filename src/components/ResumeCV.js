import React from 'react';
import image1 from '../imagesFront/BrianLiangUlatowski.jpeg';

function ResumeCV() {
    return (
      <div>
        <section className='resume' id='resume'>
          <div className='container'>
            <div className='section-heading'>
              <h1>Resume/CV</h1>
                <img src={ image1 } alt=''/>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ResumeCV;