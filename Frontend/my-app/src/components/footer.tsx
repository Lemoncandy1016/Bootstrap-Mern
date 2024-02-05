const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Our Contact</h5>
              <div>
                <strong>Abovecompany Inc</strong>
                <br></br>
                JC Main Road, Near Silnile tower<br></br>
                Pin-21542 NewYork US.
              </div>
              <p>
                <i className="icon-phone"></i> (123) 456-789 - 1255-12584{" "}
                <br></br>
                <i className="icon-envelope-alt"></i> email@domainname.com
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Quick Links</h5>
              <ul className="link-list">
                <li>
                  <a href="#">Latest Events</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Latest posts</h5>
              <ul className="link-list">
                <li>
                  <a href="#">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </a>
                </li>
                <li>
                  <a href="#">
                    Pellentesque et pulvinar enim. Quisque at tempor ligula
                  </a>
                </li>
                <li>
                  <a href="#">
                    Natus error sit voluptatem accusantium doloremque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h5 className="widgetheading">Recent News</h5>
              <ul className="link-list">
                <li>
                  <a href="#">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </a>
                </li>
                <li>
                  <a href="#">
                    Pellentesque et pulvinar enim. Quisque at tempor ligula
                  </a>
                </li>
                <li>
                  <a href="#">
                    Natus error sit voluptatem accusantium doloremque
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  <span>
                    &copy; Above Site All right reserved. Template By{" "}
                  </span>
                  <a href="http://webthemez.com" target="_blank">
                    WebThemez
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="social-network">
                <li>
                  <a href="#" data-placement="top" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-placement="top" title="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-placement="top" title="Linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-placement="top" title="Pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-placement="top" title="Google plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
