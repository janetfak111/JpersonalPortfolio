import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter1.svg";
import colorSharp from "../assets/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                          <h2>
                            Skills
                        </h2>
                        <p>I am currently deeply engaged in the dynamic world of React development.<br></br>With a strong foundation in HTML and CSS. </p>
                        <Carousel
                         responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                    <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="JavaScript" />
                                    <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CSS" />
                                    <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                    <h5>React</h5>
                            </div>
                    </Carousel>
                    </div>
                    </div>
                    </div>
                    </div>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );

};