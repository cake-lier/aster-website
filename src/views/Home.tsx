import { Container, Grid2 as Grid, Typography } from "@mui/material";
import Title from "../components/Title";
import Links from "../components/Links";
import PageTabs from "../components/PageTabs";
import Gallery from "../components/Gallery";
import "./Home.css";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container className="crt" maxWidth="md">
      <Title />
      <PageTabs />
      <Gallery />
      <Grid container>
        <Links />
        <Typography className="with-corners" variant="body1" sx={{ margin: "10px 9px 0 9px", padding: "5px" }}>
          {t("home.body")}
        </Typography>
      </Grid>
      <Footer />
    </Container>
  );
}
