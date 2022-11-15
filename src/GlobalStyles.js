import styled, { createGlobalStyle } from "styled-components";

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
  }
  a {
    text-decoration: none;
  }
`;
export const Container = styled.div`
  z-index: 99;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  @media (min-width: 1700px) {
    max-width: 105rem;
  }
`;

export const SectionWrap = styled.div`
  @media (min-width: 768px) {
    padding: 90px 0;
  }
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: #aaaaaa;
  font-weight: 500;
  font-size: ${(props) => props.fs || "1.2rem"};
  line-height: 23px;
  margin: ${(props) => props.marg};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padd};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #e9e9e9;
`;

export const Button = styled.button`
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
  font-size: 40px;
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
`;

export default GlobalStyle;
