import React from 'react';
import $ from 'jquery';
import './style.css';

class ProjectCard extends React.Component {

  expand(e) {

    $('.expandDetails').on('click', function () {
      $(this).parent().siblings('.portfolio-long').slideToggle(500);
      $(this).children('.arrowDown').toggle();
      $(this).children('.arrowUp').toggle();
    });
  }

  render() {
  return(
    <div className='card'>
      <div className='img-container'>
        <img width='300' alt={this.props.name} src={this.props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Name:</strong> {this.props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {this.props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {this.props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => this.props.removeFriend(this.props.id)} className='remove'>
        𝘅
      </span>
      <button className="cta expandDetails" onClick={this.expand()}>
        More info
        <div className="arrowDown">
            <i className="fas fa-chevron-down"></i>
        </div>
        <div className="arrowUp">
            <i className="fas fa-chevron-up"></i>
        </div>
      </button>
      <div className="portfolio-long">
      {this.props.long}
      </div>
    </div> 
  )}
}

export default ProjectCard;