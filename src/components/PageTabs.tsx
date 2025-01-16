import { Link, Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PageTabs() {
  const { t } = useTranslation();
  return (
    <Tabs value={location.pathname}>
      {[
        {
          value: "/",
          label: "header.tabs.home",
        },
        {
          value: "/base",
          label: "header.tabs.base",
        },
        {
          value: "/sad",
          label: "header.tabs.sad",
        },
        {
          value: "/joy",
          label: "header.tabs.joy",
        },
      ].map(({ value, label }, index) => (
        <Tab
          key={index}
          label={t(label)}
          value={value}
          sx={{ padding: "6px 16px", textTransform: "none" }}
          href={value}
          component={Link}
        />
      ))}
    </Tabs>
  );
}
