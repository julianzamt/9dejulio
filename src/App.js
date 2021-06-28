import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from "pages/Hero.js";
import PlanDeEstudios from "pages/PlanDeEstudios.js";
import QuienesSomos from "pages/QuienesSomos.js";
import Ubicacion from "./pages/Ubicacion.js";
import PlantelDocente from "pages/PlantelDocente.js";
import Contacto from "components/forms/Contacto.js";
import Footer from "components/footers/Footer2.js";
import { BrowserRouter } from "react-router-dom";
import ProyectoEducativo from "pages/ProyectoEducativo";
import NuestrosValores from "pages/NuestrosValores";
import PorQueElegirnos from "pages/PorQueElegirnos";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

export default function App() {
  const StyledContainer = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

  return (
    <BrowserRouter>
      <StyledContainer className="App">
        <Hero />
        <QuienesSomos />
        <ProyectoEducativo />
        <NuestrosValores />
        <PorQueElegirnos />
        <PlantelDocente />
        <PlanDeEstudios />
        <Ubicacion />
        <Contacto />
        <Footer />
      </StyledContainer>
    </BrowserRouter>
  );
}
