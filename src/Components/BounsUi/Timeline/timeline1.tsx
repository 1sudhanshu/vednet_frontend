import { Fragment } from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import { H4, Image, P } from "../../../AbstractElements";

const Timeline1 = () => {
    const images= require.context('../../../assets/images/banner/',true);
    const dynamicImage = (image:string) => {
      return images(`./${image}`);
    };
  return (
    <Fragment>
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 14"
          iconClassName="bg-primary cd-timeline-img"
          icon={<i className="icon-pencil-alt"></i>}>
          <H4 className="vertical-timeline-element-subtitle">
          Start With This 1
          </H4>
          <P>
          Explain any new understanding or fresh insights about the problem. This is the content of the Testing.
          </P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 18"
          iconClassName="bg-secondary cd-timeline-img"
          icon={<i className="icon-video-camera"></i>}
        >
          <H4 className="vertical-timeline-element-subtitle">
          Video Tutorial 2
          </H4>
          <div className="embed-responsive embed-responsive-21by9 m-t-20">
            <iframe
              src="https://www.youtube.com/embed/wpmHZspl4EM"
              allowFullScreen
              title="myFrame"
            ></iframe>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 24"
          iconClassName="bg-success cd-timeline-img"
          icon={<i className="icon-image"></i>}
        >
          <H4 className="vertical-timeline-element-subtitle">
          Layout Drafts 3
          </H4>
          <Image
            className="img-fluid p-t-20"
            src={dynamicImage('1.jpg')}
            alt="timelineImg1"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 14"
          iconClassName="bg-info cd-timeline-img"
          icon={<i className="icon-pulse"></i>}
        >
          <H4 className="vertical-timeline-element-subtitle">
          Audio Tutorial 4
          </H4>
          <audio controls preload="none">
            <source
              src={require("../../../assets/audio/horse.ogg")}
              type="audio/ogg"
            />
            {"Your browser does not support the audio element."}
          </audio>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 18"
          iconClassName="bg-warning cd-timeline-img"
          icon={<i className="icon-image"></i>}
        >
          <H4 className="vertical-timeline-element-subtitle">
          Team Work 5 
          </H4>
          <Image
            className="img-fluid p-t-20"
            src={dynamicImage('3.jpg')}
            alt="timelineImg2"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 26"
          iconClassName="bg-danger cd-timeline-img"
          icon={<i className="icon-pencil-alt"></i>}
        >
          <H4 className="vertical-timeline-element-subtitle">Final Testing</H4>
          <P>
          This is the content of the last section
          </P>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
};
export default Timeline1;
