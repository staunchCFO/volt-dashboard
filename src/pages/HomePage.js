import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routex } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routex.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routex.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routex.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routex.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routex.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routex.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routex.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routex.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routex.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routex.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routex.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routex.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routex.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routex.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routex.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routex.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routex.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routex.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routex.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routex.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routex.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routex.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routex.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routex.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routex.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routex.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routex.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routex.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routex.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routex.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routex.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routex.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routex.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routex.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routex.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routex.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routex.NotFound.path} />
  </Switch>
);
