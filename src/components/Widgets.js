
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";

import teamMembers from "../data/teamMembers";


export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>

        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>
                {percentage}%
              </span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

