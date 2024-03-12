// SearchForm.tsx
// import React from "react";
// import { SearchFormContainer, SearchInput, SearchButton } from "./styles";
// import { Button } from "@mui/material";

// export const FormGroup = () => {
//   return (
//     <SearchFormContainer>
//       <SearchInput variant="outlined" placeholder="Search..." />
//       <SearchButton variant="contained" color="primary">
//         Search
//       </SearchButton>
//     </SearchFormContainer>
//   );
// };

import React from 'react';

interface SearchFormProps {
  inputPlaceholder?: string;
  buttonType?: "submit" | "button" | "reset" | undefined;
  label: string
}

export const SearchForm: React.FC<SearchFormProps> = ({
  inputPlaceholder,
  buttonType,
  label
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder={inputPlaceholder}
        style={{ marginRight: '8px' }} 
      />
      <button
        type={buttonType}
        style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '4px' }}
      >
        {label}
      </button>
    </form>
  );
};

