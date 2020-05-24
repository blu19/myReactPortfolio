import React from 'react';

function Personal() {
    return (
        <div>
            <section className='personal' id='personal'>
                <div className='container'>
                    <div className='section-heading'>
                    <h1>Personal</h1>
                    <h6>Who is the person behind the keyboard?</h6>
                    <img style={{ marginTop: '1rem' }} width='300px' src alt='' />
                    </div>
                    <div className='bio'>
                    <p>
                        I look forward to meeting you if I haven’t already! My goal is
                        to find solutions that improve my life and those of others. I’ve
                        spent 14 years as a successful Mathematics educator, supporting
                        students’ learning, growth, and development as problem solvers.
                        I am a person who cares deeply about others, dedicated to the
                        task at hand, and believe that there is a solution, even when
                        there doesn't seem to be, we just haven't found it yet.
                        <br />
                        <br />
                        In addition to my interest in tech, I have a strong passion for
                        exploring the world by going to places that speak other
                        languages and have different cultures than here. I live an
                        active lifestyle, have a thirst for understanding how stuff
                        works, and play well with others.
                    </p>
                    <br />
                    <p></p> <br />
                    <ul>
                        <li>Completed LA Marathon</li>
                        <li>Lived in Cambodia, Vietnam, Costa Rica</li>
                        <li>Traveled to over 25 countries</li>
                        <li>Budget traveler, love Finding travel deals</li>
                        <li>Fear of heights</li>
                        <li>Picky Eater</li>
                        <li>Conversational in Vietnamese and Spanish</li>
                    </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Personal;