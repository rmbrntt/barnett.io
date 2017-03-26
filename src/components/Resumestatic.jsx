import React from 'react';
import {Router, Link} from 'react-router-dom';
import styles from './Resume.css';

const Resume = () => (
    <div className='ui container segment'>
        <div className='ui eight column grid contact-header'>
            <div className='ui eight wide left floated column'>
                <div className='name'>Ryan M. Barnett</div>
                <div className='detail'>Washington, DC</div>
            </div>
            <div className='ui three wide right floated right aligned column'>
                <div className='detail'>&#114;&#121;&#097;&#110;&#064;&#098;&#097;&#114;&#110;&#101;&#116;&#116;&#046;&#105;&#111;</div>
                <div className='detail'>
                    <Link to='https://github.com/rmbrntt'>github.com/rmbrntt</Link>
                </div>
            </div>

        </div>
        <div className='ui divider'></div>
        <div className='ui items section'>
          <h3 className='ui header center aligned'>
            <span className='title'>experience</span>
          </h3>
            <div className='ui item eight column grid'>
                <div className='ui eight wide left floated column employment'>
                    <span className='company'>KCIC | </span>
                    <span className='location'> Washington, DC</span>
                    <div className='position'>Development Process Manager</div>
                </div>
                <div className='ui three wide right floated right aligned column'>
                    <span className='employment-date'>June 2016 - Present</span>
                </div>
            </div>
            <div className='ui item content'>
                <div className='ui items'>
                    <div className='item'>
                        <i className='right angle icon'></i>Optimized the SDLC workflow against bottlenecks and automated the capture of SOC 2 audit data points, streamlining the development process while decreasing time to market by 33%</div>
                    <div className='item'>
                        <i className='right angle icon'></i>Drove the initiative to adopt and implement industry best practices such as continuous delivery, tech debt reduction, and point estimations to mitigate a pattern of high risk releases</div>
                    <div className='item'>
                        <i className='right angle icon'></i>Cultivated the technical expertise of 15+ non-technical client teams by training product management and value driven delivery techniques, cutting backlog waste an average of 20% per client</div>
                </div>
            </div>
        </div>

    </div>
)

export default Resume;
