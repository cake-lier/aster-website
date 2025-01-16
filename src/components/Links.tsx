import { Telegram, Twitter } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function Links() {
  return (
    <Stack width={1} spacing={{ xs: 2 }} direction={{ xs: "column", sm: "row" }} justifyContent="space-around" margin="15px 0">
      {[
        {
          text: "Twitter",
          icon: <Twitter />,
          link: "https://www.twitter.com/AkitaStar17",
        },
        {
          text: "Telegram",
          icon: <Telegram />,
          link: "https://t.me/astercave",
        },
      ].map((e, i) => (
        <Button key={i} disableRipple variant="text" startIcon={e.icon} size="large" href={e.link} target="_blank">
          {e.text}
        </Button>
      ))}
    </Stack>
  );
}
