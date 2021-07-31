import React, { useContext } from "react";

import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
  Container,
} from "react-bootstrap";

import {
  ChevronDown,
  ChevronUp,
  Dot,
  PlayCircleFill,
} from "react-bootstrap-icons";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div type="button" onClick={decoratedOnClick} style={{ padding: "5px" }}>
      {isCurrentEventKey ? (
        <ChevronUp style={{ marginRight: "15px" }} />
      ) : (
        <ChevronDown style={{ marginRight: "15px" }} />
      )}
      {children}
    </div>
  );
}

const Core = () => {
  const mainHeader = {
    fontSize: "28px",
    fontWeight: "900",
    justifyContent: "center",
  };
  const Mainsub = {
    fontSize: "13px",
    fontWeight: "200",
    display: "block",
    margin: "20px 0px",
  };

  const Header = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "17px",
    fontWeight: "900",
  };
  const Side = {
    fontSize: "13px",
    fontWeight: "200",
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <Container>
        <h2 style={mainHeader}>Course Content</h2>
        <span style={Mainsub}>
          00 sections <Dot /> 000 lectures <Dot /> 00h 00m total lenght
        </span>
        <Accordion eventKey="0">
          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="0">Introduction</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="1">
                Flutter Basics[QUIZ APP]
              </ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="2">
                Running Apps on Different Devices & Debugging Apps
              </ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="3">
                Widgets,Style,Adding Logic
              </ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="4">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="5">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="6">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="7">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="8">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="9">Subject Name</ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="10">
                Subject Name
              </ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={Header}>
              <ContextAwareToggle eventKey="11">
                Subject Name
              </ContextAwareToggle>
              <span style={Side}>
                15 lecture <Dot />
                0hr 00min
              </span>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
                <div style={{ padding: "10px" }}>
                  <span style={{ marginRight: "17px" }}>
                    <PlayCircleFill />
                  </span>
                  corse video
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
};

export default Core;
