import styled from "@emotion/styled";

const Head = styled.thead`
  text-align: left;
  border-collapse: collapse;
  position: relative;
  line-height: 1.756;
  font-weight: var(--font-bold);
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.body};
  transition: ${p => p.theme.colorModeTransition};
`;

export default Head;
