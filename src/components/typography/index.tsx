import styled from "styled-components";
import { colors, fonts, align, deviceSizes } from "../../themeVariables";

export const H1Tag = styled.h1`
  font: 900 1em/1rem ${fonts.header};
  color: ${colors.primary};
  text-align: ${align.left};
  border-bottom: 0.2rem ${colors.primary} solid;
  padding-bottom: 0.2rem;
  width: fit-content;
  grid-area: a;
  @media (max-width: ${deviceSizes.mobile}) {
    font: 900 1.4em/1.4rem ${fonts.header};
  }
`;

export const H2Tag = styled.h2`
  font: 900 0.8em/0.8rem ${fonts.header};
  color: ${colors.secondary};
  line-height: 1rem;
`;

export const ArticleTitle = styled.a`
  font: 900 0.84em/0.84rem ${fonts.header};
  color: ${colors.secondary};
  text-align: ${align.left};
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const PTag = styled.p`
  line-height: 1rem;
`;
