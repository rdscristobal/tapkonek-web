import IconLogo from "../../assets/img/tapkonek-icon.png";
import Logo from "../../assets/img/tapkonek-logo.png";
import Placeholder from "../../assets/img/cover-image1.jpg";

const Main = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img
              src={IconLogo}
              className="navbar-brand-image img-fluid"
              alt="TapKonek"
            />
            TapKonek
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Products
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Reviews
                </a>
              </li> */}

              {/* <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li> */}
            </ul>

            <div className="ms-lg-3">
              <a
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Member Area
                <i className="bi-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mx-auto">
              {/* <em className="small-text">welcome to Barista.co</em> */}

              {/* <h1>TapKonek</h1> */}
              <img src={Logo} className="img-fluid" alt="TapKonek" />

              <p className="text-white mb-4 pb-lg-2">
                Experience the exclusivity of our bespoke, personalized card
                crafted precisely to suit your needs.
              </p>

              {/* <a
                className="btn custom-btn custom-border-btn smoothscroll me-3"
                href="#section_2"
              >
                Our Story
              </a> */}

              <a
                className="btn custom-btn smoothscroll me-2 mb-2"
                href="#section_3"
              >
                <strong>Shop Now</strong>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-slides"></div>
      </section>

      <section className="blue-section section-padding" id="section_2">
        <div className="section-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-12 text-center mb-5 pb-lg-2">
              <h1 className="text-white">How to get started</h1>
            </div>
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <img
                  src={IconLogo}
                  className="custom-image inverted img-fluid"
                  alt=""
                />
                {/* <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className="custom-video"
                  poster=""
                >
                  <source
                    src="videos/pexels-mike-jones-9046237.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="about-video-info d-flex flex-column">
                  <h4 className="mt-auto">We Started Since 2009.</h4>

                  <h4>Best Cafe in Klang.</h4>
                </div> */}
              </div>
            </div>

            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              <em className="text-white">STEP 1</em>

              <h2 className="text-white mb-3">Choose & Order</h2>

              <p className="text-white">
                Start by selecting a TapKonek unit and proceeding through our
                checkout process. Upon payment submission, await your
                confirmation email with your order number.
              </p>

              <p className="text-white">
                For personlized or premium TapKonek devices, anticipate an email
                from our team containing guidelines on designing your card from
                inception to completion.
              </p>

              {/* <p className="text-white">
                The café was run by a friendly and hospitable couple, Mr. and
                Mrs. Johnson. Barista Cafe is free Bootstrap 5 HTML layout
                provided by{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a>
                .
              </p> */}

              {/* <a
                href="#barista-team"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Meet Baristas
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="gray-section section-padding" id="section_2">
        <div className="section-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              <em className="text-white">STEP 2</em>

              <h2 className="text-white mb-3">Choose & Order</h2>

              <p className="text-white">
                Start by selecting a TapKonek unit and proceeding through our
                checkout process. Upon payment submission, await your
                confirmation email with your order number.
              </p>

              <p className="text-white">
                For personlized or premium TapKonek devices, anticipate an email
                from our team containing guidelines on designing your card from
                inception to completion.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <img src={IconLogo} className="custom-image img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-section section-padding" id="barista-team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-5 pb-lg-2">
              <h2 className="text-white">Choose your TapKonek</h2>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="team-block-wrap">
                <div className="product-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">
                      TapKonek
                      <br /> Cards
                    </h4>

                    {/* <p className="badge ms-4">
                      <em>Senior</em>
                    </p> */}
                  </div>

                  {/* <p className="text-white mb-0">
                    your favourite coffee daily lives.
                  </p> */}
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={Placeholder}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-block-wrap">
                <div className="product-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">
                      Custom
                      <br />
                      TapKonek Card
                    </h4>

                    {/* <p className="badge ms-4">
                      <em>Barista</em>
                    </p> */}
                  </div>

                  {/* <p className="text-white mb-0">
                    your favourite coffee daily consectetur.
                  </p> */}
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={Placeholder}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-section section-padding" id="section_2">
        <div className="section-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              <em className="text-white">Update at anytime!</em>

              <h2 className="text-white mb-3">TapKonek Profile</h2>

              <p className="text-white">
                When you TapKonek order arrives, scan the QR Code on your
                product and set up your TapKonek profile. This profile is
                included in the price of your TapKonek product.
              </p>

              <p className="text-white">
                Your profile enables you to share all your contact details,
                social media accounts, websites, and much more! Click the link
                below to view our TapKonek profile.
              </p>
              <a
                className="btn custom-btn smoothscroll me-2 mb-2"
                href="#section_3"
              >
                <strong>View Profile</strong>
              </a>
            </div>
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <img src={IconLogo} className="custom-image img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-section section-padding" id="barista-team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={IconLogo}
                        className="inverted img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="text-white">QUICK AND CONVENIENT</h3>
                      <p className="text-white">
                        Automatically reads data using NFC function with a
                        single map.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={IconLogo}
                        className="inverted img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="text-white">REUSABLE</h3>
                      <p className="text-white">
                        Helps save the environment and save printing costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={IconLogo}
                        className="inverted img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="text-white">BRANDING OPPORTUNITY</h3>
                      <p className="text-white">
                        Make a lasting impression for your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={IconLogo}
                        className="inverted img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="text-white">TECHNOLOGY ADVANCEMENT</h3>
                      <p className="text-white">
                        Utilizes the NFC function, reading and sharing
                        information with a single tap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="menu-section section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="menu-block-wrap">
                <div className="text-center mb-4 pb-lg-2">
                  <em className="text-white">Delicious Menu</em>
                  <h4 className="text-white">Breakfast</h4>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Pancakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$12.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Toasted Waffle</h6>

                    <span className="underline"></span>

                    <strong className="text-white ms-auto">
                      <del>$16.50</del>
                    </strong>

                    <strong className="ms-2">$12.00</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>
                      Fried Chips
                      <span className="badge ms-3">Recommend</span>
                    </h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$15.0</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Pancakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$12.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Banana Cakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$18.0</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="menu-block-wrap">
                <div className="text-center mb-4 pb-lg-2">
                  <em className="text-white">Favourite Menu</em>
                  <h4 className="text-white">Coffee</h4>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Latte</h6>

                    <span className="underline"></span>

                    <strong className="text-white ms-auto">
                      <del>$12.50</del>
                    </strong>

                    <strong className="ms-2">$7.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>
                      White Coffee
                      <span className="badge ms-3">Recommend</span>
                    </h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$5.90</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Chocolate Milk</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$5.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Greentea</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$7.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Dark Chocolate</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$7.25</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="reviews-section section-padding section-bg"
        id="section_4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-white">Reviews by Customers</em>

              <h2 className="text-white">Testimonials</h2>
            </div>

            <div className="timeline">
              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Sandra</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-container timeline-container-right">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/senior-man-white-sweater-eyeglasses.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Don</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Olivia</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="gray-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <em className="text-white">Say Hello</em>
              <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
            </div>

            <div className="col-lg-6 col-12">
              <form
                action="#"
                method="post"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Name <sup className="text-danger">*</sup>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Jackson"
                      required={true}
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Jack@gmail.com"
                      required={true}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      How can we help?
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required={true}
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-5 col-12 mx-auto mt-3">
                  <button type="submit" className="form-control">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.366320508502!2d120.59853207608055!3d18.193082482838143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ec6211d6d2583%3A0x5ff2f7999449b182!2sJbt%20prints!5e0!3m2!1sen!2sph!4v1718283471995!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-section section-padding" id="barista-team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    target="_new"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-tiktok"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-linkedin"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-spotify"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 me-auto">
              <em className="text-white d-block mb-4">Where to find us?</em>

              <strong className="text-white">
                <i className="bi-geo-alt me-2"></i>
                5JV2+6CQ, Biak-na-Bato St, Laoag City, 2900 Ilocos Norte
              </strong>
            </div>

            <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
              <em className="text-white d-block mb-4">Contact</em>

              <p className="d-flex mb-1">
                <strong className="me-2">Phone:</strong>
                <a href="tel: 305-240-9671" className="site-footer-link">
                  (65) 305 2409 671
                </a>
              </p>

              <p className="d-flex">
                <strong className="me-2">Email:</strong>

                <a
                  href="mailto:info@yourgmail.com"
                  className="site-footer-link"
                >
                  hello@barista.co
                </a>
              </p>
            </div>

            <div className="col-lg-5 col-12">
              <em className="text-white d-block mb-4">Opening Hours.</em>

              <ul className="opening-hours-list">
                <li className="d-flex">
                  Monday - Friday
                  <span className="underline"></span>
                  <strong>9:00 - 18:00</strong>
                </li>

                <li className="d-flex">
                  Saturday
                  <span className="underline"></span>
                  <strong>11:00 - 16:30</strong>
                </li>

                <li className="d-flex">
                  Sunday
                  <span className="underline"></span>
                  <strong>Closed</strong>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-12 mt-4">
              <p className="copyright-text mb-0">
                Copyright © TapKonek Philippines 2024. All Rights Reserved.
                {/* <a
                  rel="sponsored"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
