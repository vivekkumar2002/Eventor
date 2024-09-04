import * as React from "react";
import "./Dashboard.css";
import usePrivateRoute from "../login/usePrivateRoute";
import Header from "../header/Header";
// import ResponsiveAppBar from "../header/Test";

const Home = ({ isAuthenticated }) => {
  // Use the usePrivateRoute hook to secure the route
  usePrivateRoute(isAuthenticated);

  return (
    <div>
      <>
        {/* <ResponsiveAppBar/> */}
        <div
          style={{
            position: "relative",
            backgroundImage: `url(./images/pic10.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "0",
            maxWidth: "100%",
            overflow:'hidden',
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: "12",
              minHeight: "100vh",
            }}
          >
            <main>
              <Header />
              <section className="section hero" id="hero-section">
                <div className="container">
                  <div className="hero-content">
                    <p className="section-subtitle" />
                    <h2 className="hero-title">
                      "Seamless Events, Timeless Memories."
                    </h2>
                    <p className="hero-text" style={{width:'50%'}}>
                      Create, celebrate, and captivate with our seamless event
                      management. From concept to execution, we turn moments
                      into unforgettable memories.
                    </p>
                    <div className="btn-group">
                      <a href="#" className="btn btn-primary">
                        Contact Us
                      </a>
                      <a href="#" className="btn btn-outline">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div
            style={{
              content: "",
             // background: 'url("./images/char.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "absolute",
              top: "10%",
              right: "-20%",
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
          />
        </div>
        {/* 
- #DESTINATION
*/}
        <section className="section destination">
          <div className="container">
            <p className="section-subtitle">Events</p>
            <h2 className="h2 section-title">Choose Your Events</h2>
            <ul className="destination-list">
              <li className="w-50">
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/images-01.jpg"
                      width={1140}
                      height={1100}
                      loading="lazy"
                      alt="Malé, Maldives"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle" />
                    <h3 className="h3 card-title">Wedding</h3>
                  </div>
                </a>
              </li>
              <li className="w-50">
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/images-11.jpg"
                      width={1140}
                      height={1100}
                      loading="lazy"
                      alt="Bangkok, Thailand"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle" />
                    <h3 className="h3 card-title">Social Events</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/images-1.jpg"
                      width={1110}
                      height={480}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle" />
                    <h3 className="h3 card-title">Corporate Events</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/images-5.jpg"
                      width={1110}
                      height={480}
                      loading="lazy"
                      alt="Kathmandu, Nepal"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle" />
                    <h3 className="h3 card-title">Music Events</h3>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="destination-card">
                  <figure className="card-banner">
                    <img
                      src="./assets/images/images-10.jpg"
                      width={1110}
                      height={480}
                      loading="lazy"
                      alt="Jakarta, Indonesia"
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-subtitle" />
                    <h3 className="h3 card-title">Birthday Events</h3>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* 
- #POPULAR
*/}
        <section className="section popular">
          <div className="container">
            <p className="section-subtitle">Featured Events</p>
            {/* <h2 class="h2 section-title">Most Popular Events</h2> */}
            <ul className="popular-list">
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/01.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="Kuala Lumpur, Malaysia"
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="sparkles-outline" />
                      <time dateTime="P12D">52 bookings</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-price">From 1 lakh</div>
                      <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <data value={52}>(52)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        Some reviews are long, but they have a story to tell to
                        give you a really good point of view.
                      </a>
                    </h3>
                    <address className="card-location">Wedding</address>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/about.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="Kuala Lumpur, Malaysia"
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="sparkles-outline" />
                      <time dateTime="P12D">34 bookings</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-price">From 20000</div>
                      <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <data value={34}>(34)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        Incredibly professional and reliable! EVENTOR made our
                        corporate event a huge success. Their coordination and
                        execution were flawless..
                      </a>
                    </h3>
                    <address className="card-location"></address>
                  </div>
                </div>
              </li>
              <li>
                <div className="popular-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/images-03.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="Kuala Lumpur, Malaysia"
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="sparkles-outline" />
                      <time dateTime="P12D">30 bookings</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-price">From 15000.00</div>
                      <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <data value={28}>(28)</data>
                      </div>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        Exceeded expectations! Eventor made my daughter's
                        birthday party unforgettable with their exceptional
                        planning and organization..
                      </a>
                    </h3>
                    <address className="card-location"></address>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
- #ABOUT
*/}
        <section className="section about">
          <div className="container">
            <div className="about-content">
              <p className="section-subtitle">About Us</p>
              <h2 className="h2 section-title">
                Crafting Unforgettable Moments
              </h2>
              <p className="about-text"></p>
              <ul className="about-list">
                <li className="about-item">
                  <div className="about-item-icon">
                    <ion-icon name="compass" />
                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">Customized Packages</h3>
                    <p className="about-item-text">
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some.
                    </p>
                  </div>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <ion-icon name="briefcase" />
                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">Friendly price</h3>
                    <p className="about-item-text">
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some.
                    </p>
                  </div>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <ion-icon name="umbrella" />
                  </div>
                  <div className="about-item-content">
                    <h3 className="h3 about-item-title">
                      Expertise and Experience
                    </h3>
                    <p className="about-item-text">
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some.
                    </p>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn btn-primary">
                Booking Now
              </a>
            </div>
            <figure className="about-banner">
              <img
                src="./assets/images/AMP-event-managements.png"
                width={756}
                height={842}
                loading="lazy"
                alt=""
                className="w-100"
              />
            </figure>
          </div>
        </section>
        {/* 
- #BLOG
*/}
        <section className="section blog">
          <div className="container">
            <p className="section-subtitle">From The Blog Post</p>
            <h2 className="h2 section-title">Latest News &amp; Articles</h2>
            <ul className="blog-list">
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/images-1.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="In the ever-evolving landscape of event management, 2024 promises to be a year of innovation and creativity. From immersive experiences to sustainable practices, the industry 
                is witnessing exciting new trends that are reshaping the way events are planned and executed.."
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="time-outline" />
                      <time dateTime="12-04"> 10 Feb</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author-avatar.png"
                            width={30}
                            height={30}
                            alt="Jony bristow"
                          />
                        </figure>
                        <div>
                          <a href="#" className="author-name">
                            Hari om
                          </a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">
                        10:30 AM
                      </time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        In the ever-evolving landscape of event management.....
                      </a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <ion-icon
                        name="arrow-forward-outline"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/images-03.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="A good traveler has no fixed plans and is not intent on arriving."
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="time-outline" />
                      <time dateTime="12-04">08 Feb</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author-avatar.png"
                            width={30}
                            height={30}
                            alt="Jony bristow"
                          />
                        </figure>
                        <div>
                          <a href="#" className="author-name">
                            Vivek
                          </a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">
                        10:30 AM
                      </time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">The Art of Creating Memorable Events:</a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <ion-icon
                        name="arrow-forward-outline"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src="./assets/images/images-8.jpg"
                        width={740}
                        height={518}
                        loading="lazy"
                        alt="A good traveler has no fixed plans and is not intent on arriving."
                        className="img-cover"
                      />
                    </a>
                    <span className="card-badge">
                      <ion-icon name="time-outline" />
                      <time dateTime="12-04">07 Feb</time>
                    </span>
                  </figure>
                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="author-wrapper">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author-avatar.png"
                            width={30}
                            height={30}
                            alt="Jony bristow"
                          />
                        </figure>
                        <div>
                          <a href="#" className="author-name">
                            Shashhank
                          </a>
                          <p className="author-title">Admin</p>
                        </div>
                      </div>
                      <time className="publish-time" dateTime="10:30">
                        10:30 AM
                      </time>
                    </div>
                    <h3 className="card-title">
                      <a href="#">
                        As the event management landscape continues..
                      </a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <ion-icon
                        name="arrow-forward-outline"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
  - #FOOTER
*/}
        <footer
          className="footer"
          style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}
        >
          <div className="container">
            <div className="footer-top">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Top Events</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Wedding, Mysuru
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Music Event, Goa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Farewell, jind
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Anniversary, bangalore
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Corporate event, Bangalore
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Categories</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Wedding
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Music Event
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Fashion Event
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Birthday party
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Social event
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Quick links</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
              <div className="footer-list">
                <p className="footer-list-title">Get a newsletter</p>
                <p className="newsletter-text">
                  For the latest deals and tips, travel no further than your
                  inbox
                </p>
                <form action="" className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    required=""
                    placeholder="Email address"
                    className="newsletter-input"
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <a href="#" className="logo">
                Eventor
              </a>
              <p className="copyright">
                © 2024 <a href="#" className="copyright-link" />.
              </p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* 
  - #GO TO TOP
*/}
        <a href="#top" className="go-top" data-go-top="" aria-label="Go To Top">
          <ion-icon name="chevron-up-outline" />
        </a>
        {/* 
  - custom js link
*/}
        {/* 
  - ionicon link
*/}
      </>
    </div>
  );
};

export default Home;
