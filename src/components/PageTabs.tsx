import { Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Page {
  value: string;
  label: string;
}

export default function PageTabs() {
  const { t } = useTranslation();
  const pages: Page[] = [
    {
      value: "",
      label: "header.tabs.home",
    },
    {
      value: "#bio",
      label: "header.tabs.about",
    },
    /*{
      value: "#sad",
      label: "header.tabs.sad",
    },
    {
      value: "#joy",
      label: "header.tabs.joy",
    },*/
  ];
  return (
    <Tabs
      value={location.hash}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      {pages.map(({ value, label }, index) => (
        <Tab
          key={index}
          label={t(label)}
          value={value}
          sx={{ padding: "6px 16px", textTransform: "none", margin: "8px" }}
          href={`/${value.length === 0 ? "#" : value}`}
        />
      ))}
    </Tabs>
  );
}
