import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg"
import emailjs from 'emailjs-com';
import { ThreeDots } from 'svg-loaders-react'
import "./Contacto.css"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Title = tw.h2`sm:inline-block text-center sm:text-left`
const SubTitle = tw.h5`text-xs text-center -mx-8 py-4`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`flex justify-center items-center w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

const ButtonFeedbackContainer = tw.div`flex items-baseline`

export default () => {

  // Send Form message Logic
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState(false)
  const [user_name, setUser_name] = useState('')
  const [user_email, setUser_email] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true)
    emailjs.sendForm('service_sg8wqzq', 'contact_form', e.target, 'user_9V1qkGZ2lb3Ng0n670lEh')
      .then((result) => {
        console.log(result.text);
        setIsLoading(false);
        setFeedback(true)
        setTimeout(() => {
          setFeedback(false)
          setUser_name('')
          setUser_email('')
          setMessage('')
        }, 5000)
      }, (error) => {
        console.log(error.text);
        setIsLoading(false);
      });
  }

  return (
    <Container id="contacto">
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <Title>Contactanos</Title>
            <form onSubmit={sendEmail}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="user_name">Nombre y Apellido</Label>
                    <Input id="user_name" type="text" name="user_name" value={user_name} placeholder="Tu nombre aquí" onChange={(e) => setUser_name(e.target.value)} />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="user_email">Email</Label>
                    <Input id="user_email" type="email" name="user_email" value={user_email} placeholder="Tu email aquí" onChange={(e) => setUser_email(e.target.value)} />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="message">Mensaje</Label>
                    <TextArea id="message" name="message" value={message} placeholder="No olvides dejar mail y/o teléfono y horario de contacto. ¡Gracias!" onChange={(e) => setMessage(e.target.value)} />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <ButtonFeedbackContainer>
                {isLoading ? <SubmitButton><ThreeDots fill="pink" width="70px" height="1.3em" /></SubmitButton> : <SubmitButton type="submit" value="Submit">Enviar</SubmitButton>}
                {feedback ? <div className="feedback__contact">¡Enviado! A la brevedad nos pondremos en contacto.</div> : null}
              </ButtonFeedbackContainer>
              <SubTitle>4931-1578 - institutoprivado9dejulio@gmail.com - La Rioja 660, CABA</SubTitle>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
