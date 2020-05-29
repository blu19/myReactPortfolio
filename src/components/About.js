import React from 'react';

function About() {
    return (
        <section id='about' className='about'>
          <div className='container'>
            <div
              className='profile-img'
              data-aos='fade-in'
              data-aos-delay={100}
            >
              <img src='assets/images/profile.jpg' alt='' />
            </div>
            <div
              className='about-details'
              data-aos='fade-in'
              data-aos-delay={200}
            >
              <div className='about-heading'>
                <h1>About</h1>
                <h6>Me</h6>
              </div>
              <p>
                Tech has long been a fascination of mine and it is driving the
                world forward. I enjoy figuring things out and why things work
                the way they do. As a lifelong learner with a passion in finding
                solutions, this eventually led me to programming, and by
                extension, web application development, which i’s problem
                solving at its core.
                <br />
                <br />
                I’m an aspiring full stack developer with experience in front
                end design, programming languages and database technologies,
                focusing on how they connect and interact with each other. It
                amazes me how powerful a few lines of code can be. Tech is
                ever-evolving and improving, which suits me in my thirst for
                continual learning and being my best as a developer and as a
                person.
              </p>
              <div className='social-media'>
                <ul className='nav-list'>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/brian-ulatowski/'
                      className='icon-link'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-linkedin' />
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://github.com/blu19'
                      className='icon-link'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-github' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;