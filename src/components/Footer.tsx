import { Copyright, Favorite } from "@mui/icons-material";
import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const format = new Intl.DateTimeFormat(i18n.language, { year: "numeric" });

  return (
    <Grid container justifyContent="end" sx={{ margin: "20px 0 12px 0" }}>
      <Grid container justifyContent="end" alignItems="center" sx={{ width: { xs: 1, sm: "auto" } }}>
        <Trans i18nKey="footer.copyright">
          <Typography variant="body2">Made with</Typography>
          <Favorite sx={{ margin: "0 12px", fontSize: "1.25rem" }} htmlColor="#FF0000" />
          <Typography variant="body2">by</Typography>
          <Button
            sx={{ padding: "0 2px", margin: "0 0 0 12px", textTransform: "none" }}
            disableRipple
            variant="text"
            href="https://github.com/cake-lier"
            target="_blank"
          >
            cake-lier
          </Button>
        </Trans>
      </Grid>
      <Grid container alignItems="center" sx={{ margin: { xs: "12px 0 0 0", sm: 0 } }}>
        <Copyright sx={{ margin: "0 12px", fontSize: "1.25rem" }} />
        <Typography variant="body2">
          {format.format(new Date("2025-01-13"))} - {format.format(Date.now())}
        </Typography>
      </Grid>
    </Grid>
  );
}
