import React from "react";

//import images
import jester from "../img/jester.png";
import pipedreams from "../img/pipe-dreams.PNG";
import fedBuilder from "../img/fed-builder.PNG";
import regex from "../img/regex-tutorial.PNG";
import fitness from "../img/Main-page.PNG";
import movies from "../img/movie-comparison.PNG";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below is a compilation of my recent works.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jesterapp.herokuapp.com/" data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={jester} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Jester</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Materialize Bcrypt MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://pipe-dreams.herokuapp.com/" data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={pipedreams} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pipe Dreams</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Bcrypt
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/WTRIII/Homework-12-Federation-Team-Builder-WTRIII" data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={fedBuilder} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Starship Troopers Federation Builder</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Node CLI 
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://wtriii.github.io/Project-1-Movie-Comparison-Site/" data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={movies} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Movie Comparison</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 APIs
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://gist.github.com/WTRIII/3a992ef519ac5fe01dac9071a6b9e785" data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={regex} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Regex Tutorial</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Regular Expressions</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://nosql-workout-tracker-wtriii.herokuapp.com/" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={fitness} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Fitness Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap NoSQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
