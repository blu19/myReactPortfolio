import React from 'react';

function Services() {
    return (
        <div>
            <section className='services' id='services'>
                <div className='container'>
                    <div className='section-heading'>
                    <h1>Services</h1>
                    <h6>What I can do for you</h6>
                    </div>
                    <div className='my-skills'>
                    <div className='skill' data-aos='fade-in' data-aos-delay={100}>
                        <div className='icon-container'>
                        <i className='fas fa-pencil-ruler' />
                        </div>
                        <h1>Web Design</h1>
                        <p>
                        Each project I take on deserves going the extra mile in
                        finding the right look.
                        </p>
                    </div>
                    <div className='skill' data-aos='fade-in' data-aos-delay={200}>
                        <div className='icon-container'>
                        <i className='fas fa-laptop-code' />
                        </div>
                        <h1>Web Development</h1>
                        <p>
                        The building process of utilizing multiple technologies in
                        connecting the whole responsive web application from start to
                        finish is pretty exciting to me.
                        </p>
                    </div>
                    <div className='skill' data-aos='fade-in' data-aos-delay={300}>
                        <div className='icon-container'>
                        <i className='fas fa-paint-brush' />
                        </div>
                        <h1>Mobile Apps </h1>
                        <p>
                        Finding real world solutions by skillfully handling data via
                        user friendly applications offer unlimited possibilities.
                        </p>
                    </div>
                    </div>
                    <div className='skillIcons'>
                    <div className='skillIcon-box'>
                        <i className='devicon-react-plain colored' />
                        <span className='skillIcon-title'>
                        <p>React</p>
                        </span>
                    </div>
                    <div className='skillIcon-box'>
                        <i className='devicon-javascript-plain colored' />
                        <span className='skillIcon-title'>
                        <p>Javascript</p>
                        </span>
                    </div>
                    <div className='skillIcon-box'>
                        <i className='devicon-css3-plain colored' />
                        <span className='skillIcon-title'>
                        <p>CSS3</p>
                        </span>
                    </div>
                    <div className='skillIcon-box'>
                        <i className='devicon-bootstrap-plain colored' />
                        <span className='skillIcon-title'>
                        <p>Bootstrap</p>
                        </span>
                    </div>
                    <div className='skillIcon-box'>
                        <i className='devicon-jquery-plain colored' />
                        <span className='skillIcon-title'>
                        <p>jQuery</p>
                        </span>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;