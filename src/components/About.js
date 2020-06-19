import React from "react";
import { Container, Row, Col } from "reactstrap";
import telechargement from "../components/telechargement.jpg";
import { useTranslation } from "react-i18next";

const About = (props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col xs="6" sm="6" md="6">
          <p>{t("About.1")}</p>
        </Col>
        <Col xs="6" sm="6" md="6">
          <img
            src={telechargement}
            alt="telechargement"
            style={{
              width: "100.02%",
              height: "100%",
              position: "absolute",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
