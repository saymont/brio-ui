/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-dark">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">

                <div className="floating-cards">
                  <h1 className="display-1 text-center text-white" style={{ "font-size": "3.9em" }}>
                    Entenda-se.
                    </h1>

                  <h2 className="text-center lead text-white" style={{ "font-size": "1.7em" }}>
                    Uma plataforma de cuidados com a saúde mental que pensa na autoestima de pessoas de verdade, para que possam fazer mais em um futuro próximo.
                    </h2>
                </div>
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10" sm="10">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/element-1-02-1024x577.png")}
                      style={{ height: "100%", width: "100%" }}
                    />
                    <div className="btn-wrapper mt-1">
                      <Button
                        className="btn-1 ml-1 btn btn-outline-default mb-3 mb-sm-0"
                        size="lg"
                      >
                        <span className="btn-inner--text">Para terapia</span>
                        {"  "}
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-bold-right" />
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
