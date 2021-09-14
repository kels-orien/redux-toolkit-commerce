import { css } from 'styled-components';

export const mobile = (inner: any) => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`;

export const phone = (inner: any) => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const mobileMax = (inner: any) => css`
  @media (max-width: ${1024}px) {
    ${inner};
  }
`;

export const mobileMaxExtra = (inner: any) => css`
  @media (max-width: ${768}px) {
    ${inner};
  }
`;