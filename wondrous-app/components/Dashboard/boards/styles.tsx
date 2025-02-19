import styled from 'styled-components';
import { BoardsSubheaderWrapper } from 'components/organization/wrapper/styles';

export const BoardsContainer = styled.div`
  margin-top: 42px;
`;

export const FilterItemOrgIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10px;
`;

export const DashboardPanelWrapper = styled.div`
  margin-top: -140px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
`;

export const BoardsActivityWrapper = styled(BoardsSubheaderWrapper)`
  && {
    grid-template-columns: 1fr;
    .FiltersTrigger-button {
      min-width: unset;
    }
    .MuiAutocomplete-root {
      flex: 1;
    }
  }
`;
