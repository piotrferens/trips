import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => `
    padding: 0 ${theme.spacing[3]};

    @media (min-width: ${theme.breakpoints.desktop}px) {
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 ${theme.spacing[5]};
    }
  `}
`;
