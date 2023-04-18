import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import itemData from "./IbitengeImageStore";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 390,
      bigMobile: 350,
      tablet: 650,
      desktop: 900,
    },
  },
});

export default function Card() {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          // className="t"
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              mobile: "repeat(1, 1fr)",
              bigMobile: "repeat(2, 1fr)",
              tablet: "repeat(3, 1fr)",
              desktop: "repeat(3, 1fr)",
            },
            [`& .${imageListItemClasses.root}`]: {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {itemData.map((item) => (
            <Fade bottom distance="50%">
              <ImageListItem key={item.id}>
                <img
                  key={item.id}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <button
                    onClick={() => {
                      if (item.id === 1) {
                        return navigate("cart-1");
                      } else if (item.id === 2) {
                        return navigate("cart-2");
                      } else if (item.id === 3) {
                        return navigate("cart-3");
                      } else if (item.id === 4) {
                        return navigate("cart-4");
                      } else if (item.id === 5) {
                        return navigate("cart-5");
                      } else if (item.id === 6) {
                        return navigate("cart-6");
                      } else if (item.id === 7) {
                        return navigate("cart-7");
                      } else if (item.id === 8) {
                        return navigate("cart-8");
                      } else if (item.id === 9) {
                        return navigate("cart-9");
                      } else if (item.id === 10) {
                        return navigate("cart-10");
                      } else if (item.id === 11) {
                        return navigate("cart-11");
                      } else if (item.id === 12) {
                        return navigate("cart-12");
                      } else if (item.id === 13) {
                        return navigate("cart-13");
                      } else if (item.id === 14) {
                        return navigate("cart-14");
                      } else if (item.id === 15) {
                        return navigate("cart-15");
                      } else if (item.id === 16) {
                        return navigate("cart-16");
                      } else if (item.id === 17) {
                        return navigate("cart-17");
                      } else if (item.id === 18) {
                        return navigate("cart-18");
                      } else if (item.id === 19) {
                        return navigate("cart-19");
                      } else if (item.id === 20) {
                        return navigate("cart-20");
                      } else if (item.id === 21) {
                        return navigate("cart-21");
                      } else if (item.id === 22) {
                        return navigate("cart-22");
                      } else if (item.id === 23) {
                        return navigate("cart-23");
                      } else if (item.id === 24) {
                        return navigate("cart-24");
                      } else if (item.id === 25) {
                        return navigate("cart-25");
                      } else if (item.id === 26) {
                        return navigate("cart-26");
                      } else if (item.id === 27) {
                        return navigate("cart-27");
                      } else if (item.id === 28) {
                        return navigate("cart-28");
                      } else if (item.id === 29) {
                        return navigate("cart-29");
                      } else if (item.id === 30) {
                        return navigate("cart-30");
                      }
                    }}
                    type="button"
                    className="btn-buy btn btn-outline-danger"
                  >
                    View Details
                  </button>
                </CardContent>
              </ImageListItem>
            </Fade>
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
}
