import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Resume.css';

const POSITIONS = [
  {
      company: 'TrackMaven',
      location: 'Washington, DC',
      date: 'August 2017 - Present',
      title: 'Software Engineer',
      details: []
  },
    {
        company: 'KCIC',
        location: 'Washington, DC',
        date: 'June 2016 - August 2017',
        title: 'Development Manager',
        details: [
          'Developed a SPA in React to act as the frontend interface for a suite of microservice backends',
          'Built out a microservice infrastructure on Docker and NGINX to expose Python and Node REST APIs',
          'Engineered a machine learning pipeline to stream SQL data and preprocess for downstream training of sklearn and tensorflow regression and classification models',
          'Implemented NLP models in gensim and spacy for tagging and classifying word vectors and named entities',
          'Led 40+ sprints through the development lifecycle, balancing risk, audit compliance and product delivery uptime',
          'Increased release frequency 33% by optimizing SDLC cycle times and automating the capture of SOC 2 audit data points',
          'Cultivated the technical expertise of consulting teams by training product management and value driven delivery techniques, cutting backlog waste an average of 20% per team',
        ]
    }, {
        company: 'KCIC',
        location: 'Washington, DC',
        date: 'June 2015 - June 2016',
        title: 'Lead QA Engineer',
        details: [
          'Developed a page object model test suite in C# for automated UI regression testing of a large scale web platform, providing over 85% coverage',
          'Created an API service to fetch and integrate remotely maintained BDD/Gherkin features on test suite deploy and execution',
          'Built a continuous integration pipeline to deploy a grid of nodes for parallelized and multi-browser execution of tests, reducing manual testing utilization over 40 hours per sprint',
          'Designed an API middleware service in Python to process webhook requests from the DevOps toolchain, automating triggers and dependencies in the DevOps workflow across independent services (Bamboo, Bitbucket, JIRA, Octopus, etc.)',
          'Transformed the quality of delivered work and institutional knowledge retainment company-wide by establishing knowledge bases for Tech and Consulting teams to transparently collaborate on projects, requirements, meetings, and timelines',
        ]
    },
    {
        company: 'ICF International',
        location: 'Fairfax, VA',
        date: 'August 2013 - June 2015',
        title: 'Test Lead',
        details: [
          'Developed automated tests for a web application using Python and Selenium WebDriver',
          'Led a team of test analysts through each release to perform regression and acceptance testing',
          'Performed code reviews of predictive algorithms written in SAS, unit tested logic and translated into pseudo code for requirements',
        ]
    }
]

const PositionList = React.createClass({
  render: function () {
    const positions = POSITIONS.map((position) => {
      return (
      <Position company={position.company}
        location={position.location}
        date={position.date}
        title={position.title}
        details={position.details}/>
      );
    });
    return (
      <div>
        {positions}
      </div>

    );
  },
});


const Position = React.createClass({
    render: function() {
        const positionDetails = this.props.details.map((detail) => {
            return (<PositionDetails detail={detail}/>);
        });

        return (
            <div className='ui items section'>
                <div className='ui item eight column grid'>
                    <div className='ui eight wide left floated column employment'>
                        <span className='company'>{this.props.company}</span>
                        <span> | </span>
                        <span className='location'>{this.props.location}</span>
                        <div className='position'>{this.props.title}</div>
                    </div>
                    <div className='ui three wide right floated right aligned column'>
                        <span className='employment-date'>{this.props.date}</span>
                    </div>
                </div>
                <div className='ui item content'>
                    <div className='ui items'>
                        {positionDetails}
                    </div>
                </div>
            </div>
        );
    }
});

class PositionDetails extends React.Component {
  render() {
    return (
          <div className='item'>
              <i className='right angle icon'></i>
              {this.props.detail}
          </div>
    )
  }
}

const Resume = () => (
    <div className='ui stackable container very padded segment'>
        <div className='ui eight column grid contact-header'>
            <div className='ui eight wide left floated column'>
                <div className='name'>Ryan M. Barnett</div>
                <div className='detail'>Washington, DC</div>
            </div>
            <div className='ui three wide right floated right aligned column'>
                <div className='detail'>&#114;&#121;&#097;&#110;&#064;&#098;&#097;&#114;&#110;&#101;&#116;&#116;&#046;&#105;&#111;</div>
                <div className='detail'>
                    <Link to='https://github.com/rmbrntt' target="_blank">github.com/rmbrntt</Link>
                </div>
            </div>
        </div>
        <div className='ui divider'></div>
        <div>
            <h3 className='ui header center aligned'>
                <span className='title'>experience</span>
            </h3>
            <PositionList />
        </div>

    </div>
)

export default Resume;
