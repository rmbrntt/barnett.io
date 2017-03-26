import React from 'react';
import {Router, Link} from 'react-router-dom';
import styles from './Resume.css';

const POSITIONS = [
    {
        company: 'KCIC',
        location: 'Washington, DC',
        date: 'June 2016 - Present',
        title: 'Development Process Manager',
        details: [
          'Optimized the SDLC workflow against bottlenecks and automated the capture of SOC 2 audit data points, streamlining the development process while decreasing time to market by 33%',
          'Drove the initiative to adopt and implement industry best practices such as continuous delivery, tech debt reduction, and point estimations to mitigate a pattern of high risk releases',
          'Cultivated the technical expertise of 15+ non-technical client teams by training product management and value driven delivery techniques, cutting backlog waste an average of 20% per client',
          'Transformed communication company-wide by founding knowledge bases for Dev, QA, Ops, and Consulting teams where meeting minutes, specs, processes, tasks, etc. could be collaborated on and shared across all lines of business, promoting collective expertise and transparency',
          'Facilitated the removal of team impediments, monitored sprint health, measured performance, and operated as primary point of contact for change management on every sprint',
          'Led 40+ releases through all lifecycle phases (Planning, Development, QA, UAT and Deployment), balancing development risks, audit compliance and product delivery uptime',
        ]
    }, {
        company: 'KCIC',
        location: 'Washington, DC',
        date: 'June 2015 - June 2016',
        title: 'Lead QA Engineer',
        details: [
          'Developed a regression test suite that pulled an API payload of business scenarios independently maintained by client teams which was bound to an automation framework coded in C# that covered over 80% of the platform',
          'Established the standard for requirements gathering by designing the BDD/Gherkin infrastructure on business models and repetitiously trained the method to all teams (technical and non-technical)',
          'Engineered a continuous integration pipeline to run a regression test suite as a grid of hub and nodes for parallel browser execution against a web application, reducing investment on manual testing by 40 hours per sprint and significantly decreasing defect rate',
          'Automated process analysis and performance indicators by developing a library of custom data analysis metrics in Python that leveraged data extracts from the JIRA API',
        ]
    },
    {
        company: 'ICF International',
        location: 'Fairfax, VA',
        date: 'August 2013 - June 2015',
        title: 'Test Lead',
        details: [
          'Performed peer code reviews of proprietary algorithms, validated unit tests and translated logic into flowcharts as supplements to requirements',
          'Developed automated tests for a web application using Python and Selenium WebDriver',
          'Led a team of test analysts to execute manual coverage of releases by designing test cases and scripts for functional, regression, and acceptance testing',
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
    <div className='ui container very padded segment'>
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
        <div>
            <h3 className='ui header center aligned'>
                <span className='title'>experience</span>
            </h3>
            <PositionList />
        </div>

    </div>
)

export default Resume;
