import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { H4, P } from '../../../../AbstractElements'

const ElementOne = () => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - present"
    iconClassName="bg-primary"
    icon={<i className="icon-pencil-alt"></i>}
  >
    <H4 className="vertical-timeline-element-subtitle">Miami, FL</H4>
    <P>
      Creative Direction, User Experience, Visual Design, Project
      Management, Team Leading
    </P>
  </VerticalTimelineElement>
  )
}

export default ElementOne