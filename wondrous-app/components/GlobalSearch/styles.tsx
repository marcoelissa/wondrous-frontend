import Typography from '@mui/material/Typography';
import { Input } from 'components/SearchTasks/styles';
import styled from 'styled-components';
import palette from 'theme/palette';
import typography from 'theme/typography';

export const GlobalSearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  position: relative;
  width: fit-content;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  filter: ${({ theme }) => `drop-shadow(0 3px 3px ${theme.palette.black101})`};
`;

export const SearchInput = styled(Input)`
  && {
    .MuiOutlinedInput-root {
      width: 100%;
      background: ${({ theme }) => theme.palette.grey87};
      border-top-right-radius: 150px;
      border-bottom-right-radius: 150px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      font-family: 'Space Grotesk';
      font-weight: 500;
      font-size: 13px;
      .MuiOutlinedInput-input {
        z-index: 100;
      }
    }
  }
`;

export const SearchResults = styled.div`
  background: ${palette.background.default};
  top: 110%;
  position: absolute;
  width: fit-content;
  min-width: 100%;
  border-radius: 6px;
  overflow: scroll;
  max-height: 60vh;
  border: 0.5px solid ${palette.grey85};
`;

export const SearchResultCategory = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${palette.grey85};
`;

export const SearchResultItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  img {
    border-radius: 6px;
  }
`;

export const SearchResultCategoryTitle = styled(Typography)`
  && {
    color: ${palette.white};
    font-size: ${typography.body1.fontSize};
    letter-spacing: ${typography.body1.letterSpacing};
    font-weight: ${typography.h1.fontWeight};
    font-family: ${typography.fontFamily};
  }
`;

export const SearchInputWrapper = styled.div`
  && {
    display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
    overflow: hidden;
    .MuiFormControl-root {
      margin: 0;
    }
    .MuiTextField-root {
      background: transparent;
      border-top-right-radius: 150px;
      border-bottom-right-radius: 150px;
    }
  }
`;

export const SearchIconWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.grey87};
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 150px;
  border-top-right-radius: 0;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
  ${({ isExpanded }) => !isExpanded && 'border-radius: 50%;'};
  svg {
    path {
      stroke: ${({ theme }) => theme.palette.white};
    }
  }
`;
