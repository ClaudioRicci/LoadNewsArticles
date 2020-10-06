import styled from "styled-components";
import { colors, fonts, align, deviceSizes } from "../../themeVariables";

export const ULTag = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: ${deviceSizes.mobile}) {
    margin-top: 4rem;
  }
`;

export const LITag = styled.li`
  margin: 0;
  padding: 1rem 0 0;
  border-bottom: 0.1rem ${colors.ternary} solid;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 2rem;
  grid-template-areas: "a b";
  align-items: start;
  @media (max-width: ${deviceSizes.mobile}) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const BoardSurround = styled.div`
  text-align: ${align.left};
  width: 30rem;
  height: 100rem;
  padding: 1.6rem 1.6rem 0.5rem;
  margin: 0 auto;
  background: ${colors.grey};
  @media (max-width: ${deviceSizes.mobile}) {
    flex-direction: column;
    width: 90%;
    height: 46rem;
  }
`;

export const ShowMoreButton = styled.button`
  background: ${colors.white};
  border: 0.2rem ${colors.primary} solid;
  color: ${colors.primary};
  cursor: pointer;
  display: inline-grid;
  font: 900 0.8rem/1rem ${fonts.header};
  margin: 1rem auto;
  outline: none;
  padding: 0.5rem;
  :hover {
    border: 0.2rem ${colors.orange} solid;
    color: ${colors.orange};
    opacity: 0.85;
    transition: 0.3s;
  }
  @media (max-width: ${deviceSizes.mobile}) {
    width: 6.4rem;
    left: 13.6rem;
    position: absolute;
    top: 4.7rem;
  }
`;

export const Date = styled.span`
  font: 400 0.74em/0.74rem ${fonts.paragraph};
  color: ${colors.secondary};
  padding: 0.1rem 0.5rem 0.1rem 0;
  text-align: ${align.left};
  width: 4rem;
`;

export const Source = styled.span`
  font: 400 0.74em/0.74rem ${fonts.paragraph};
  background: ${colors.ternary};
  color: ${colors.white};
  padding: 0.1rem 0.5rem;
  text-align: ${align.center};
  width: fit-content;
  border-radius: 1rem;
`;

export const Select = styled.select`
  width: fit-content;
  height: 2rem;
  background: ${colors.white};
  color: ${colors.ternary};
  border: 0.2rem ${colors.ternary} solid;
  border-radius: 0.3rem;
  padding-left: 1rem;
  grid-area: b;
  justify-self: end;
  @media (max-width:${deviceSizes.mobile}) {
    width: 11rem;
    height: 2.6rem;
    position: relative;
    top: 4rem;
    grid-area: a;
    justify-self: start;
  }
  
  option {
    color: ${colors.ternary};
    background: ${colors.white};
    display: flex;
    white-space: pre;
    min-height: 1.6rem;
    padding: 0.1rem 0.2rem;
    font: 900 0.8rem/0.8rem ${fonts.paragraph};
`;
