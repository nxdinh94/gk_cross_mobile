import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { home, location } from "ionicons/icons";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./App.module.css";

import Home from "./components/Home/Home";
import LocationFetcher from "./components/location";

function App() {
  return (
    <IonApp>
      <Router>
        <IonTabs>
          {/* IonRouterOutlet để điều hướng giữa các tab */}
          <IonRouterOutlet>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<LocationFetcher />} />
            </Routes>
          </IonRouterOutlet>

          {/* Thanh điều hướng */}
          <IonTabBar slot="bottom" className={classes.ionTabBar}>
            <IonTabButton tab="home" href="/">
              <div className={classes.ionTabButton}>
                <IonIcon icon={home} style={{ fontSize: "22px" }} />
                <IonLabel
                  class={classes.ionLabel}
                  style={{ textDecoration: "none" }}
                >
                  <p className={classes.tabText}>Home</p>
                </IonLabel>
              </div>
            </IonTabButton>
            <IonTabButton tab="location" href="/location">
              <div className={classes.ionTabButton}>
                <IonIcon icon={location} style={{ fontSize: "22px" }} />
                <IonLabel>
                  <p className={classes.tabText}>Location</p>
                </IonLabel>
              </div>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </Router>
    </IonApp>
  );
}

export default App;
