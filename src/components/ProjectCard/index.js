import React from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
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
  return (
    <div className='card'>
      <div className='content'>
        <ul>
          <li>
            <strong>Project Name:</strong> {this.props.name}
          </li>
          <li>
            <strong>App URL:</strong>{' '}
            <a href={this.props.site} target='_blank' rel='noopener noreferrer'>
              <Button>Check it out!</Button>
            </a>
          </li>
          <li>
            <strong>Github:</strong>{' '}
            <a
              href={this.props.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>See the code!</Button>
            </a>
          </li>
          <div className='img-container'>
            <img width='600' alt={this.props.name} src={this.props.image} />
          </div>
          <Button className='cta expandDetails' onClick={this.expand()}>
            More info
            <div className='arrowDown'>
              <i className='fas fa-chevron-down'></i>
            </div>
            <div className='arrowUp'>
              <i className='fas fa-chevron-up'></i>
            </div>
          </Button>
          <div className='portfolio-long'>{this.props.long}</div>
          <li>
            <strong>Description:</strong> {this.props.description}
          </li>
        </ul>
      </div>
    </div>
  );}
}

export default ProjectCard;