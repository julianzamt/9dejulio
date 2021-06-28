import React from "react";
import tw from "twin.macro";
import TwoColWithButton from "components/features/TwoColWithButton.js";
import proyectoEducativoImg_500 from "../images/new/computacion_profe_500.jpg";
import proyectoEducativoImg_1000 from "../images/new/computacion_profe_1000.jpg";

export default () => {
  const Subheading = tw.span`uppercase tracking-wider text-sm`;
  return (
    <div>
      <TwoColWithButton
        subheading={<Subheading>Proyecto educativo</Subheading>}
        heading="Acompañamos el crecimiento"
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={proyectoEducativoImg_500}
        imageSrcSet={`${proyectoEducativoImg_500} 500w, ${proyectoEducativoImg_1000} 501w`}
        description="Trabajamos con grupos reducidos, priorizando los aspectos humanos y sociales de los adolescentes. Nuestro propósito: que descubran recursos y habilidades, amplíen sus horizontes, cooperen con sus pares."
        backgroundColor={{ backgroundColor: "#ecc94b", marginLeft: "-2em", marginRight: "-2em", paddingRight: "2em", paddingLeft: "2em" }}
      />
    </div>
  );
};
