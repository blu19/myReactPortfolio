import React from 'react';

function Portfolio() {
    return (
      <div>
        <section className='portfolio' id='portfolio'>
          <div className='container'>
            <div className='section-heading'>
              <h1>Portfolio</h1>
              <h6>What I've done</h6>
            </div>
            {/* port1 */}
            <div className='portfolio-item'>
              <div className='portfolio-description'>
                <h1>Cocktails?</h1>
                <a
                  href='https://guarded-everglades-88887.herokuapp.com/'
                  target='_blank'
                  className='cta'
                  rel='noopener noreferrer'
                >
                  Visit site <i className='far fa-eye' />
                </a>{' '}
                <br />
                <a
                  href='https://github.com/blu19/Quarantini'
                  target='_blank'
                  className='cta'
                  rel='noopener noreferrer'
                >
                  View Code <i className='fab fa-github' />
                </a>{' '}
                <br />
                {/* <a href='javascript:void(0)' className='cta expandDetails'>
                  More info
                  <br />
                  <div className='arrowDown'>
                    <i className='fas fa-chevron-down' />
                  </div>
                  <div className='arrowUp'>
                    <i className='fas fa-chevron-up' />
                  </div>
                </a> */}
              </div>
              <div
                className='portfolio-img'
                data-aos='fade-in'
                data-aos-delay={100}
              >
                <img src='assets/images/cocktailsApp.jpeg' alt='' />
              </div>
              <div className='portfolio-long'>
                <img
                  className='extrapic'
                  align='right'
                  src='assets/images/membersPic.jpeg'
                  alt=''
                />
                <div className='subheading'>GOAL:</div>
                <p>
                  Cocktails? Is a mobile responsive web application built from
                  scratch by four collaborators, designed to give users
                  different ideas for drinks based on a given main ingredient.
                  Using a server side API, users can use it when out and
                  wondering what they should order or while at home, what they
                  can make.
                  <br />
                  <br />
                  The user inputs an ingredient and can search through drink
                  options that include that ingredient. Then they are provided
                  the drink name, instructions on how to make the drink, a
                  recipe with amounts of various ingredients, and a photo of the
                  drink. Users can ‘like’ and save drinks they enjoy, which then
                  pins the drink name on the side and they can easily return to
                  the drink whenever they would like. The app is hosted by
                  Heroku with cloud based database JawsDB, that saves user data.
                  <br />
                  <br />
                  The landing page is a short video, has buttons linking to
                  signup and login pages. The signup page includes inputs for
                  email, password, date of birth and a username. The email
                  includes a validator to ensure an email is entered. The
                  password has a validator to ensure that the password entered
                  is within the necessary range of the number of characters. The
                  date of birth has a validator to ensure users are over 21 in
                  order to use the app, and if not, sends them to a fun age
                  appropriate page. And the app features a logout function so
                  users can ensure their liked drinks are protected.
                  <img
                    className='extrapic'
                    align='right'
                    src='assets/images/signUp.jpeg'
                    alt=''
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img
                    className='extrapic'
                    align='right'
                    src='assets/images/login.jpeg'
                    alt=''
                  />
                </p>
              </div>
            </div>
            {/* /port1 */}
            {/* port2 */}
            <div className='portfolio-item'>
              <div
                className='portfolio-img'
                data-aos='fade-in'
                data-aos-delay={100}
              >
                <img src='assets/images/inOrOutLanding.png' alt='' />
              </div>
              <div className='portfolio-description'>
                <h1>In or Out?</h1>
                <a
                  href='https://abautista3712.github.io/In-or-Out/'
                  target='_blank'
                  className='cta'
                  rel='noopener noreferrer'
                >
                  Visit site <i className='far fa-eye' />
                </a>{' '}
                <br />
                <a
                  href='https://github.com/abautista3712/In-or-Out'
                  target='_blank'
                  className='cta'
                  rel='noopener noreferrer'
                >
                  View Github <i className='fab fa-github' />
                </a>{' '}
                <br />
                {/* <a href='javascript:void(0)' className='cta expandDetails'>
                  More info
                  <br />
                  <div className='arrowDown'>
                    <i className='fas fa-chevron-down' />
                  </div>
                  <div className='arrowUp'>
                    <i className='fas fa-chevron-up' />
                  </div>
                </a> */}
              </div>
              <div className='break' />
              <div className='portfolio-long'>
                <img
                  className='extrapic'
                  align='right'
                  src='assets/images/outOrInLanding.png'
                  alt=''
                />
                <div className='subheading'>GOAL:</div>
                <p>
                  In or Out is a website application built from scratch designed
                  to simplify an everyday problem. Utilizing integrated data
                  from several server-side API requests, "In or Out" simplifies
                  the decision making between creating meal alternatives or
                  finding a great local eatery at a desired location.
                  <br />
                  <br />
                  If "In" is chosen, the user can input a food item which will
                  then provide several recipe options. Each result displays the
                  amount of time it takes to complete, dish rating, serving
                  size, and a link displaying the step by step process to
                  complete the meal.
                  <br />
                  <br />
                  <img
                    className='extrapic extrapic3'
                    align='right'
                    src='assets/images/inRecipes.png'
                    alt=''
                  />
                  If "Out" is chosen, the user is prompted to input both a
                  specific food and/or the desired location they wish to search.
                  Once entered, the display will provide several options
                  depending on the original input. Each item listed will include
                  the name of the location, average rating, address, phone
                  number, and a link redirecting the user to customer reviews.
                  <br />
                  <br />
                  In or Out is hosted GitHub and is designed to be responsive.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img
                    className='extrapic extrapic4'
                    align='right'
                    src='assets/images/outRestaurants.png'
                    alt=''
                  />
                </p>
              </div>
            </div>
            {/* /port2 */}
          </div>
        </section>
      </div>
    );
}

export default Portfolio;