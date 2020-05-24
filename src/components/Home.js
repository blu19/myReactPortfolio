import React from 'react';

function Home() {
    return (
        <div>
            <div className='landing-text'>
                <h1>Brian Ulatowski</h1> <br />
                {/* animated h6 */}
                <h6>
                    Full Stack
                    <span
                    className='txt-type'
                    data-wait='1000ms'
                    data-words='["Developer"]'
                    />
                </h6>
                <a className='landingBtn' href='#portfolio'>
                    <p> See my work! </p>
                </a>
            </div>
        </div>
    );
}

export default Home;