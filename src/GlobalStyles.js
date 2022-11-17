import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

import RingsBg from "./images/rings-bg.svg";

const GlobalStyle = createGlobalStyle`
/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
*{
  box-sizing: border-box;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  body {
    margin: 0;
    padding: 0;
    background: #000000;
    font-family: Mazzard L, Open-Sans, Helvetica, Sans-Serif;
    color: #ffffff;
  }
  button {
    font-family: Mazzard L, Open-Sans, Helvetica, Sans-Serif;
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
  html, body {
    scroll-behavior: smooth;
}
`;
export const Background = styled.div`
  position: relative;
  overflow: hidden;
  background-image: url(${RingsBg}),
    radial-gradient(
      ellipse 370px 300px at top left,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    ),
    radial-gradient(
      ellipse 490px 400px at right,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    ),
    radial-gradient(
      ellipse 180px 180px at right,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    ),
    radial-gradient(
      ellipse 170px 170px at left,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%
    );
  background-position: right -45rem top 40rem, left top, right top -105rem,
    right top -30rem, left top 25rem;
  background-repeat: no-repeat;
  @media (min-width: 992px) {
    background-image: url(${RingsBg}),
      radial-gradient(
        ellipse 700px 600px at top left,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 400px 300px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 250px 250px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 500px 280px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 265px 265px,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 920px 580px,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 100%
      );

    background-position: right center, left top, right -30rem top -80rem,
      right -37rem top 15rem, center top 35rem, left -37rem top 45rem,
      left -30rem bottom -120rem;
  }
  @media (min-width: 1400px) {
    background-image: url(${RingsBg}),
      radial-gradient(
        ellipse 700px 600px at top left,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 350px 200px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 250px 250px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 500px 280px,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 265px 265px,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 920px 580px,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 100%
      );
  }
`;
/*blue gradient*/
export const DecorationMobile = styled.div`
  width: ${(props) => props.w || "480px"};
  height: ${(props) => props.h || "280px"};
  border-radius: 270px;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  transform: rotate(-45deg);
  background: radial-gradient(
      50% 50%,
      rgba(0, 65, 218, 0.115) 0%,
      rgba(40, 0, 153, 0.115) 70%,
      transparent 100%
    )
    no-repeat;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const Decoration = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    width: 1180px;
    height: 700px;
    border-radius: 350px;
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    transform: rotate(-45deg);
    background: radial-gradient(
        50% 50%,
        rgba(0, 65, 218, 0.115) 0%,
        rgba(40, 0, 153, 0.115) 70%,
        transparent 100%
      )
      no-repeat;
  }
`;

export const Container = styled.div`
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
  @media (min-width: 1700px) {
    max-width: 105rem;
    padding: 0;
  }
`;

export const SectionWrap = styled(motion.div)`
  padding: 40px 0;
  @media (min-width: 576px) {
    padding: 50px 0;
  }
  @media (min-width: 768px) {
    padding: 70px 0;
  }
  @media (min-width: 992px) {
    padding: 90px 0;
  }
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: #aaaaaa;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  @media (min-width: 992px) {
    font-size: ${(props) => props.fs || "1.2rem"};
    line-height: 23px;
    margin: ${(props) => props.marg};
    text-align: ${(props) => props.textAlign};
    padding: ${(props) => props.padd};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #e9e9e9;
`;

export const Button = styled(motion.button)`
  display: block;
  padding: 20px 60px;
  background: linear-gradient(140.6deg, #3e6ff9 -27.18%, #3e53f8 126.06%);
  box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.4);
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    color: #3e53f8;
    background: #ffffff;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: ${(props) => props.fs || "2rem"};
  line-height: 120%;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.marg};
  span {
    color: #aaaaaa;
  }
  span.colored {
    background: linear-gradient(
      89.95deg,
      #487fff -1.65%,
      #73b5ff 51.06%,
      #cb76ff 99.96%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
`;

export default GlobalStyle;
