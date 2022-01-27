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
                <a href="https://jesterapp.herokuapp.com/">
                  <div className="work-img">
                    <img src={jester} alt="Jester App" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Jester</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Materialize Bcrypt GraphQL

                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/WTRIII/jester">
                          <i className="ion-social-github">
                          </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://pipe-dreams.herokuapp.com/">
                  <div className="work-img">
                    <img src={pipedreams} alt="Pipe Dreams App" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pipe Dreams</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap Bcrypt
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                            <a href="https://github.com/cole-cochran/Pipe-Dreams">
                          <i className="ion-social-github">
                          </i>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/WTRIII/Homework-12-Federation-Team-Builder-WTRIII">
                  <div className="work-img">
                    <img src={fedBuilder} alt="Federation Builder" className="img-fluid" />
                  </div>
                </a>
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
                        <a href="https://github.com/WTRIII/Federation-Team-Builder-WTRIII">
                          <i className="ion-social-github">
                          </i>
                          </a>                        
                          </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://wtriii.github.io/Movie-Comparison-Site/" >
                  <div className="work-img">
                    <img src={movies} alt="movie comparison site" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Movie Comparison</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS APIs
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/WTRIII/Movie-Comparison-Site">
                          <i className="ion-social-github">
                          </i>
                          </a>                        
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://gist.github.com/WTRIII/3a992ef519ac5fe01dac9071a6b9e785">
                  <div className="work-img">
                    <img src={regex} alt="regex tutorial" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Regex Tutorial</h2>
                        <div className="w-more">
                          <span className="w-ctegory">A Regular Expressions gist.</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://gist.github.com/WTRIII/3a992ef519ac5fe01dac9071a6b9e785">
                          <i className="ion-social-github">
                          </i>
                          </a>                        
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://nosql-workout-tracker-wtriii.herokuapp.com/">
                  <div className="work-img">
                    <img src={fitness} alt="noSQL workout tracker" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Fitness Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap NoSQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/WTRIII/NoSQL-Workout-Tracker">
                          <i className="ion-social-github">
                          </i>
                          </a>                         
                          </div>
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

export default Portfolio;
