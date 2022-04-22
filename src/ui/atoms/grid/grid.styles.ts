import styled from '@emotion/styled';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => `
  gap: ${theme.spacing[3]};

  @media (max-width: ${theme.breakpoints.mobile}px) {
    justify-content: center;
    }
  `}
`;
