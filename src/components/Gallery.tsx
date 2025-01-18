import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import SquareIcon from "@mui/icons-material/Square";

export default function Gallery() {
  return (
    <Carousel
      className="with-corners"
      animation="slide"
      IndicatorIcon={<SquareIcon sx={{ fontSize: 16 }} />}
      navButtonsProps={{ style: { borderRadius: 0 } }}
      height="50vh"
      sx={{ margin: "9px" }}
    >
      {["aster_sunset.png", "aster_playing.png", "aster_femboy.jpg", "aster_taro.png", "aster_wave.png", "aster_zamy.png"].map(
        (p, i) => (
          <Box key={i} component="img" sx={{ height: 1, width: 1, objectFit: "contain" }} src={`/img/${p}`} />
        ),
      )}
    </Carousel>
  );
}
