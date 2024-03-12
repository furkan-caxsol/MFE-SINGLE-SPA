//@ts-ignore
import { SearchForm } from "@hr/style-guide";
import { Box, Container } from "@mui/material";

function Demo() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: 2,
          background: "#edf4f4",
        }}
      >
        <p>Below form is coming from different microfrontend</p>
        <SearchForm
          inputPlaceholder="Placeholder pass"
          buttonType="submit"
          label="Atomic Button"
        />
      </Box>
    </Container>
  );
}

export default Demo;
