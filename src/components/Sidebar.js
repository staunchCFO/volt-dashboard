
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routex } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey} 
        style={{
          backgroundColor: "transparent", 
          border: "tranparent",
          borderRadius: "10px"
        }}
      >
        <Accordion.Item eventKey={eventKey}
            style={{
              backgroundColor: "transparent", 
              border: "tranparent",
              borderRadius: "10px"
            }}
        >
          <Accordion.Button 
                as={Nav.Link} 
                className="d-flex justify-content-between align-items-center" 
                style={{
                  backgroundColor: "transparent", 
                  border: "tranparent",
                  borderRadius: "10px"
                }}
          >
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column" style={{backgroundColor: "transparent", borderColor: "1px solid #252063"}}>
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-secondary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routex.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block text-white`} style={{ backgroundColor: '#252063'}}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routex.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <p className='mt-5 mb-2' style={{fontSize: 12}}>Dashboard</p>
              <NavItem title="Dashboard" link={Routex.DashboardOverview.path} icon={faChartPie} />
              <p className='mt-2 mb-2' style={{fontSize: 12}}>All Users</p>
              <CollapsableNavItem eventKey="tables/" title="Users" icon={faUser}>
                <NavItem title="Existing Users" link={Routex.BootstrapTables.path} />
                <NavItem title="New Users" link={Routex.BootstrapTables.path} />
              </CollapsableNavItem>
              <p className='mt-2 mb-2' style={{fontSize: 12}}>All Trade Requests</p>
              <NavItem title="Trade Requests" icon={faHandHoldingUsd} link={Routex.Transactions.path} />
              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routex.Signin.path} />
                <NavItem title="Sign Up" link={Routex.Signup.path} />
                <NavItem title="Forgot password" link={Routex.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routex.ResetPassword.path} />
                <NavItem title="Lock" link={Routex.Lock.path} />
                <NavItem title="404 Not Found" link={Routex.NotFound.path} />
                <NavItem title="500 Server Error" link={Routex.ServerError.path} />
              </CollapsableNavItem>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
