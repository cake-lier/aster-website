import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  return (
    <AppBar position="relative" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ padding: "0 !important" }}>
        <Button disableRipple variant="text" sx={{ textTransform: "none", padding: "0", margin: "10px 0 6px 0" }} href="/">
          <Typography variant="h5" sx={{ padding: "6px 8px" }}>
            {t("header.title")}
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
