// styles.ts
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const SearchFormContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(TextField)`
  && {
    margin-right: 8px;
  }
`;

export const SearchButton = styled(Button)`
  && {
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
  }
`;
