const Portfolio = () => {
  return (
    <div>
      <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="pageTitle">Portfolio</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="portfolio-categ filter">
                <li className="all active">
                  <a href="#">All</a>
                </li>
                <li className="web">
                  <a href="#" title="">
                    Web design
                  </a>
                </li>
                <li className="icon">
                  <a href="#" title="">
                    Mobile App
                  </a>
                </li>
                <li className="graphic">
                  <a href="#" title="">
                    UI design
                  </a>
                </li>
              </ul>
              <div className="clearfix"></div>
              <div className="row">
                <section id="projects">
                  <ul id="thumbs" className="portfolio">
                    <li
                      className="item-thumbs col-lg-3 design"
                      data-id="id-0"
                      data-type="web"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/1.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/1.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 design"
                      data-id="id-1"
                      data-type="icon"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/2.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/2.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 photography"
                      data-id="id-2"
                      data-type="graphic"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/3.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/3.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 design"
                      data-id="id-0"
                      data-type="web"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/4.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/4.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 photography"
                      data-id="id-4"
                      data-type="web"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/5.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/5.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 photography"
                      data-id="id-5"
                      data-type="icon"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/6.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/6.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 design"
                      data-id="id-0"
                      data-type="web"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/7.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/7.jpg" alt=""></img>
                    </li>
                    <li
                      className="item-thumbs col-lg-3 design"
                      data-id="id-0"
                      data-type="graphic"
                    >
                      <a
                        className="hover-wrap fancybox"
                        data-fancybox-group="gallery"
                        title="Portfolio name"
                        href="assets/img/works/8.jpg"
                      >
                        <span className="overlay-img"></span>
                        <span className="overlay-img-thumb">
                          <i className="icon-info-blocks fa fa-code"></i>
                        </span>
                      </a>
                      <img src="assets/img/works/8.jpg" alt=""></img>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
