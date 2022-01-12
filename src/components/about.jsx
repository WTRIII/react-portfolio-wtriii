import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        }

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am an full stack web developer that has just started my journey of coding. I graduated from the University of Texas at Austin Coding Bootcamp in December of 2020. I graduated from Virginia Military Institute and began a career in the U.S. Army. I became an Armor Officer and served in Fort Benning with a Cavalry unit. After serving my time for my country, I decided to serve my community and moved back to Austin. Here, I started working for a non-profit organization in the medical industry and continued there through the worst of the COVID-19 pandemic. Now, I feel my calling is in tech and so I decided to learn coding. Full stack web development is just the first step in my journey to being in the tech world. When I am not coding or taking care of my cats, you can find me in the gym, moving that weight. I also like to read, socialize with my friends, and chow down on a delicious spaghetti."
        },
        {
          id: "second-p-about",
          content:
            "In addition to being an entry level web developer, I am also an accomplished project manager. I managed a variety of projects in the Army as well as in the medical industry and am familiar with most corporate concepts. Something else that sets me apart from other devs is my ability to talk clearly to anyone. In my past, I needed to talk to and work with people from all walks of life - from Generals to high school graduates, from locals to foreigners. As such, I am comfortable interacting with most people and can publically speak quite well."
        },
        {
          id: "third-p-about",
          content:
            "In terms of languages and skills, I learned the following from the coding bootcamp: React, MERN, MongoDB, JavaScript, MySQL, Jquery, Handlebars, Bootstrap, HTML, CSS."
            
        }

        
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
