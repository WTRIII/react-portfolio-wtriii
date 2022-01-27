import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div id="contact" className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div id="contact-paragraph">
                    <p>
                      Whether you want to get in touch, talk about a project
                      collaboration, or just say hi, I'd love to hear from
                      you.
                      <br />
                      <br />

                      Select the icons below for my resume, Github, or LinkedIn. Please contact me via LinkedIn.
                    </p>
                    {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                  </div>
                  <div className="socials">
                    <ul>
                      {/* <li>
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                            > */}
                      {/* <span className="ico-circle">
                                <i className="ion-social-codepen"></i>
                              </span>
                            </a>
                          </li> */}
                      <li>
                        <a
                          href="https://docs.google.com/document/d/1zEPz68p_yPvtmyFnxW0LGYCGqJBxTnKK-18g6bxsWd8/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-codepen"></i>
                          </span> 
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://github.com/WTRIII"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/william-t-renfroe-a146b065/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
