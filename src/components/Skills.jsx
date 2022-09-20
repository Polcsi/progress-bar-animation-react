import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { skillsInfo } from "../skillsInfo";
import { changeVisibility } from "../progressAnimation";

const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <div className="section-title">
          <h1 className="skills-title text-shadow">Skills</h1>
        </div>
        <VisibilitySensor
          onChange={changeVisibility}
          partialVisibility
          offset={{ bottom: 50 }}
        >
          {({ isVisible }) => (
            <div className="skills-container">
              {skillsInfo.map((singleSkill) => {
                const { id, title, progress } = singleSkill;
                return (
                  <article key={id}>
                    <div className="title">
                      <h3>{title}</h3>
                    </div>
                    <div className="percentage">
                      <div style={{ height: 30 }}>
                        {isVisible ? (
                          <CountUp
                            duration={2}
                            start={0}
                            suffix=" %"
                            end={progress}
                          />
                        ) : (
                          progress + "%"
                        )}
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div
                        id="progressTrackRef"
                        datatarget={progress}
                        className="progress-track counterSkills"
                        style={{
                          width: isVisible ? 0 + "%" : 1 + "%",
                        }}
                      ></div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </VisibilitySensor>
      </div>
    </>
  );
};

export default Skills;
