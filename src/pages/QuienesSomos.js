import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import TwoColWithButton from "components/features/TwoColWithButton.js";
import quienesSomosImg_500 from "../images/new/remera_500.jpg";
import quienesSomosImg_1000 from "../images/new/remera_1000.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <div id="quienes_somos">
      {" "}
      {/* div id Necesario para que matchee HashRouter */}
      <TwoColWithButton
        subheading={<Subheading>Quiénes Somos</Subheading>}
        heading="Pioneros del cooperativismo"
        buttonRounded={false}
        imageSrc={quienesSomosImg_500}
        imageSrcSet={`${quienesSomosImg_500} 500w, ${quienesSomosImg_1000} 501w`}
        description="Somos una Cooperativa de Enseñanza fundada en 1935. Desde entonces hemos construído un espacio inclusivo, a través de un equipo directivo y docente de inquebrantable vocación y compromiso."
      />
    </div>
  );
};
