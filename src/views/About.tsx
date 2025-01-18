import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Title from "../components/Title";
import PageTabs from "../components/PageTabs";
import "../style/global.css";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container className="crt" maxWidth="md">
      <Title />
      <PageTabs />
      <Grid container>
        <Box className="with-corners" sx={{ margin: "9px 9px 0 9px", padding: "5px" }}>
          <Typography variant="body1">{t("about.body.firstParagraph")}</Typography>
          <Typography variant="body1">{t("about.body.secondParagraph")}</Typography>
          <Typography variant="body1">{t("about.body.thirdParagraph")}</Typography>
          <Typography variant="body1">{t("about.body.fourthParagraph")}</Typography>
        </Box>
      </Grid>
      <Footer />
    </Container>
  );
}
