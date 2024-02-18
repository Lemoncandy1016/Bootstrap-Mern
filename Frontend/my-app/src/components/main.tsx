import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const Main = () => {
  const restoredData: any = localStorage.getItem("authToken");

  // const parsedData = JSON.parse(restoredData);

  let data: any;
  let username = "";
  if (restoredData) {
    data = jwtDecode(restoredData ?? "");
    username = data["username"];
  }

  // const [username, setusername] = useState("");

  // setusername(data.username);

  return (
    <div className="wrapper">
      <section className="callaction">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aligncenter">
                <h1 className="aligncenter">Hi {username}</h1>
                <h1 className="aligncenter">Our Featured Courses</h1>
                <span
                  className="clear spacer_responsive_hide_mobile "
                  style={{ height: "13px", display: "block" }}
                ></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus temporibus perferendis nesciunt
                quam repellendus nulla nemo ipsum odit corrupti consequuntur
                possimus, vero mollitia velit ad consectetur. Alias, laborum
                excepturi nihil autem nemo numquam, ipsa architecto non, magni
                consequuntur quam.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="skill-home">
              <div className="skill-home-solid clearfix">
                <div className="col-md-3 text-center">
                  <span className="icons c1">
                    <i className="fa fa-trophy"></i>
                  </span>
                  <div className="box-area">
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores quae porro consequatur aliquam, incidunt eius
                      magni provident
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c2">
                    <i className="fa fa-picture-o"></i>
                  </span>
                  <div className="box-area">
                    <h3>UI Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores quae porro consequatur aliquam, incidunt eius
                      magni provident
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c3">
                    <i className="fa fa-desktop"></i>
                  </span>
                  <div className="box-area">
                    <h3>Interaction</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores quae porro consequatur aliquam, incidunt eius
                      magni provident
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c4">
                    <i className="fa fa-globe"></i>
                  </span>
                  <div className="box-area">
                    <h3>User Experiance</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores quae porro consequatur aliquam, incidunt eius
                      magni provident
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonial-area">
        <div className="testimonial-solid">
          <div className="container">
            <div className="testi-icon-area">
              <div className="quote">
                <i className="fa fa-microphone"></i>
              </div>
            </div>
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="0"
                  className=""
                >
                  <a href="#"></a>
                </li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="1"
                  className=""
                >
                  <a href="#"></a>
                </li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="2"
                  className="active"
                >
                  <a href="#"></a>
                </li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="3"
                  className=""
                >
                  <a href="#"></a>
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="item">
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi.
                  </p>
                  <p>
                    <b>- Mark John -</b>
                  </p>
                </div>
                <div className="item">
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi.
                  </p>
                  <p>
                    <b>- Jaison Warner -</b>
                  </p>
                </div>
                <div className="item active">
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi.
                  </p>
                  <p>
                    <b>- Tony Antonio -</b>
                  </p>
                </div>
                <div className="item">
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi.
                  </p>
                  <p>
                    <b>- Leena Doe -</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aligncenter">
                <h2 className="aligncenter">Courses We Offer</h2>
                <span
                  className="clear spacer_responsive_hide_mobile "
                  style={{ height: "13px", display: "block" }}
                ></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus temporibus perferendis nesciunt
                quam repellendus nulla nemo ipsum odit corrupti consequuntur
                possimus, vero mollitia velit ad consectetur. Alias, laborum
                excepturi nihil autem nemo numquam, ipsa architecto non, magni
                consequuntur quam.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="textbox">
                <h3>Heading Course</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vest sit amet, consec ibulum molestie lacus. Aenean
                  nonummy hendrerit mauris. Phasellus porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
