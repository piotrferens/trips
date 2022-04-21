import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => `
    padding: 0 ${theme.spacing[3]};
    
    @media (min-width: ${theme.breakpoints.desktop}px) {
        max-width: 1200px;
        padding: 0 ${theme.spacing[5]};
    }
  `}
`;
