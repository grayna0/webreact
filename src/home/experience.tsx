import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Home.scss";
import experiences from "../compoent/index";
import { Experience } from "../compoent/index";

type ExperiencesProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperiencesProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="icon"
          />
        </div>
      }
    >
      <div>
        <h3>{experience.title}</h3>
        <p style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience2 = () => {
  return (
    <div>
      <h2 className='text-center'> EXPERIENCE</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience2;
