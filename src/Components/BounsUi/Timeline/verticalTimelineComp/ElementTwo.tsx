import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { H4 } from '../../../../AbstractElements'


const ElementTwo = () => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2020"
    iconClassName="bg-secondary"
    icon={<i className="icon-video-camera"></i>}
  >
    <H4 className="vertical-timeline-element-subtitle">
      San Francisco, CA
    </H4>
    <div className="embed-responsive embed-responsive-21by9 m-t-20">
      <iframe
        src="https://www.youtube.com/embed/wpmHZspl4EM"
        allowFullScreen
        title="myFrame"
      ></iframe>
    </div>
  </VerticalTimelineElement>
  )
}

export default ElementTwo