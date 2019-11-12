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
import {
  Card,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Footer from "../components/Footers/SimpleFooter";


class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col lg="8" xs="12">
                  <h4 className="mt-5 text-center">
                    O Briosense quer fazer com que a compreensão torne as coisas leves e suportáveis.
                </h4>
                  <div className="mt-4 pull-left col-xs-6">
                    <Button className="btn-1" color="primary" type="button">
                      Play Store
                    {"  "}
                      <span className="btn-inner--icon ml-2">
                        <img src={require("assets/img/icons/common/google-play-store.svg")} />
                      </span>
                    </Button>
                  </div>
                  <div className="mt-4 pull-right col-xs-6">
                    <Button className="btn-1" color="primary" type="button">
                      App Store
                    {"  "}
                      <span className="btn-inner--icon ml-2">
                        <img src={require("assets/img/icons/common/app-store.svg")} />
                      </span>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col lg="12" xs="12">

                  <div className="mt-5 pull-left col-lg-4">
                    <img src={require("assets/img/brand/elementos1-01-1.png")}
                      className="img-fluid"
                    />
                    <h1 className="text-center heading-section text-primary mb-md-1">GEOLOCALIZAÇÃO</h1>
                    <h6 className="text-center display-4">Encontre psicólogos
                  próximos de você</h6>
                    <p className="text-center lead">O profissional que você preferir, no momento que você precisar, pertinho de você.</p>
                  </div>

                  <div className="mt-5 pull-left col-lg-4">
                    <img src={require("assets/img/brand/elementos2-02-1.png")}
                      className="img-fluid"
                    />
                    <h1 className="text-center heading-section text-primary mb-md-1">CONTEÚDO</h1>
                    <h6 className="text-center display-4">Compreensão e autoestima para ler, assistir e ouvir</h6>
                    <p className="text-center lead">Assuntos relevantes sobre cultura e o mundo em geral, contextualizados com a saúde mental.</p>
                  </div>

                  <div className="mt-5 pull-right col-lg-4">
                    <img src={require("assets/img/brand/elementos3-03.png")}
                      className="img-fluid"
                    />
                    <h1 className="text-center heading-section text-primary mb-md-1">DIÁLOGO</h1>
                    <h6 className="text-center display-4">Para pessoas, todos os tipos delas.</h6>
                    <p className="text-center lead">Os traços humanos nos diferenciam, trabalhar esses pontos resgata a importância das relações.</p>
                  </div>

                </Col>
              </Row>

              <Row className="mt-5 mb-5">
                <Col lg="12" xs="12">
                <Card className="bg-secondary shadow border-0 pull-left col-lg-5">
                    <h1 className="display-3">Compreender & cuidar</h1>
                    <h4 className="lead">Deixar os grilos de lado nem sempre é a melhor opção, não é porque seu problema não é visível que ele é menos digno de atenção.</h4>
                    <Button className="btn-1 m-2" color="primary" type="button">
                      Leia Sobre
                    {"  "}
                      <span className="btn-inner--icon ml-2">
                        <i className="ni ni-bold-right"></i>
                      </span>
                    </Button>
                    <Button className="btn-1 m-2" color="primary" type="button">
                      Para Terapia
                    {"  "}
                      <span className="btn-inner--icon ml-2">
                        <i className="ni ni-button-play"></i>
                      </span>
                    </Button>
                  </Card>

                  <Card className="col-lg-7 pull-left">
                    <img src={require("assets/img/brand/sobre2.1-01.png")}
                      className="img-fluid"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
