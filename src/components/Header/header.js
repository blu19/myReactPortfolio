import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSticky: false,
            isOpenSidebar: false,
        };

        this.openNavbar = this.openNavbar.bind(this);
        this.onHandleClickLink = this.onHandleClickLink.bind(this);
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('click', this.handleClickDocument);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('click', this.handleClickDocument);
    };

    openNavbar() {
        this.setState({ isOpenSidebar: true })
    };

    onHandleClickLink() {
        this.setState({ isOpenSidebar: false })
    };

    handleScroll = (event) => {
        if (window.scrollY > 10) {
            this.setState({ isSticky: true })
        } else {
            this.setState({ isSticky: false })
        }
    };

    handleClickDocument = (event) => {
        const { isOpenSidebar } = this.state;
        if (event.target.classList.contains('site-nav-backdrop')) {
            this.setState({ isOpenSidebar: false })
        }
    };

    render() {
        const { isSticky, isOpenSidebar } = this.state;
        const data = this.props.portfolioData;

        return (
          <div>
            <header
              className={`site-header ${isSticky ? 'site-header--sticky' : ''}`}
            >
              <div className='site-header-wrapper'>
                <div className='site-header-brand'>
                  <Link
                    className='site-header-link'
                    activeClass='site-nav-link-active'
                    to='home'
                    href='#home'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  ></Link>
                </div>
                <div className='site-header-spacer'></div>
                <button
                  type='button'
                  className='site-header-btn-mobile'
                  onClick={this.openNavbar}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18.338'
                    height='12'
                    viewBox='0 0 18.338 12'
                    className={`site-header-burger-icon ${
                      isSticky ? 'site-header-burger-icon-dark' : ''
                    }`}
                  >
                    <g
                      id='group6148'
                      data-name='group 6148'
                      transform='translate(-288 -20)'
                    >
                      <rect
                        id='rectangle2400'
                        data-name='rectangle 2400'
                        width='18.338'
                        height='2'
                        rx='1'
                        transform='translate(288 20)'
                        fill='#fff'
                      ></rect>
                      <rect
                        id='rectangle2401'
                        data-name='rectangle 2401'
                        width='14.94'
                        height='2'
                        rx='1'
                        transform='translate(288 25)'
                        fill='#fff'
                      ></rect>
                      <rect
                        id='rectangle2402'
                        data-name='rectangle 2402'
                        width='18.338'
                        height='2'
                        rx='1'
                        transform='translate(288 30)'
                        fill='#fff'
                      ></rect>
                    </g>
                  </svg>
                </button>
                {isOpenSidebar && (
                  <Fragment>
                    {' '}
                    <div className='site-nav-backdrop'></div>
                  </Fragment>
                )}
                <div
                  className={`site-navbar ${isOpenSidebar ? 'is-open' : ''}`}
                ></div>
                <ul
                  className={`site-nav site-sidebar ${
                    isOpenSidebar ? 'is-open' : ''
                  }`}
                >
                    <li className='site-nav__list'>
                        <Link
                            onClick={this.onHandleClickLink}
                            className='site-nav__link--active'
                            to='project'
                            href='#project'
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='site-nav__list'>
                        <Link
                            onClick={this.onHandleClickLink}
                            className='site-nav__link--active'
                            to='skills'
                            href='#skills'
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className='site-nav__list'>
                        <Link
                            onClick={this.onHandleClickLink}
                            className='site-nav__link--active'
                            to='experience'
                            href='#experience'
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className = 'site-nav__list'>
                        <Link
                        >
                            Email: brian.ulatowski@gmail.com
                        </Link>                        
                        
                  </li>
                </ul>
              </div>
            </header>
          </div>
        );
    };
};