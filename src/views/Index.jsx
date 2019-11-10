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
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Buttons from "./IndexSections/Buttons.jsx";
import Inputs from "./IndexSections/Inputs.jsx";
import CustomControls from "./IndexSections/CustomControls.jsx";
import Menus from "./IndexSections/Menus.jsx";
import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Progress from "./IndexSections/Progress.jsx";
import Pagination from "./IndexSections/Pagination.jsx";
import Pills from "./IndexSections/Pills.jsx";
import Labels from "./IndexSections/Labels.jsx";
import Alerts from "./IndexSections/Alerts.jsx";
import Typography from "./IndexSections/Typography.jsx";
import Modals from "./IndexSections/Modals.jsx";
import Datepicker from "./IndexSections/Datepicker.jsx";
import TooltipPopover from "./IndexSections/TooltipPopover.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
import Icons from "./IndexSections/Icons.jsx";
import Login from "./IndexSections/Login.jsx";
import Download from "./IndexSections/Download.jsx";

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
                  <h4 className="text-center">
                    O Briosense quer fazer com que a compreensão torne as coisas leves e suportáveis.
                </h4>
                <div className="mt-4 pull-left col-xs-6">
                  <Button className="btn-1" color="primary" type="button">
                    Play Store
                    {"  "}
                    <span className="btn-inner--icon ml-2">
                    <img src={require("assets/img/icons/common/google-play-store.svg")}/>
                    </span>
                  </Button>
                  </div>
                  <div className="mt-4 pull-right col-xs-6">
                  <Button className="btn-1" color="primary" type="button">
                    App Store
                    {"  "}
                    <span className="btn-inner--icon ml-2">
                    <img src={require("assets/img/icons/common/app-store.svg")}/>
                    </span>
                  </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Buttons />
        </main>
      </>
    );
  }
}

export default Index;
