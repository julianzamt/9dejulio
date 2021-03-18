import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

import Hero from "components/hero/Hero.js";
import PlanDeEstudios from "components/features/PlanDeEstudios.js";
import QuienesSomos from "pages/QuienesSomos.js";
import Ubicacion from "components/features/Ubicacion.js";
import Docentes from "components/features/Docentes.js";
import Contacto from "components/forms/Contacto.js";
import Footer from "components/footers/Footer2.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <AnimationRevealPage disabled>
        <Hero />
        <QuienesSomos />
        <PlanDeEstudios />
        <Docentes />
        <Ubicacion />
        <Contacto />
        <Footer />
      </AnimationRevealPage>
    </BrowserRouter>
  )
}
