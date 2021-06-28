import React from "react";
import tw from "twin.macro";
import TwoColWithButton from "components/features/TwoColWithButton.js";
import nuestrosValoresImg_500 from "../images/new/chicos_cool_500.jpg";
import nuestrosValoresImg_1000 from "../images/new/chicos_cool_1000.jpg";

export default () => {
  const Subheading = tw.span`uppercase tracking-wider text-sm`;

  return (
    <TwoColWithButton
      subheading={<Subheading>Nuestros Valores</Subheading>}
      heading="Cooperativismo, Autonomía, Inclusión."
      buttonRounded={false}
      textOnLeft={false}
      imageSrc={nuestrosValoresImg_500}
      imageSrcSet={`${nuestrosValoresImg_500} 500w, ${nuestrosValoresImg_1000} 501w`}
      description="Cooperativismo para hacer realidad los proyectos que nos unen. Autonomía para crecer. Inclusión para aprender a escucharnos."
    />
  );
};
