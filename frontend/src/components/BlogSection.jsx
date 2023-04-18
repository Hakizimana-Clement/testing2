import * as React from "react";
import BlogDetails from "./BlogDettailsStore";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="blog-box"
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(2, 1fr)",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {BlogDetails.map((item) => (
          <ImageListItem key={item.id}>
            <Fade left>
              <img
                style={{ height: 200 }}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </Fade>

            <CardContent className="blog-content" style={{ paddingLeft: 0 }}>
              <Fade right>
                <Typography gutterBottom variant="h5" component="div">
                  {/* INFORMATION WORKSHOP ABOUT IGITENGE FASHION */}
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details}
                </Typography>
              </Fade>
              <Zoom duration={1300}>
                <CardActions className="blog-button">
                  <p
                    onClick={() => {
                      if (item.id === 1) {
                        return navigate("blog-1");
                      } else if (item.id === 2) {
                        return navigate("blog-2");
                      } else if (item.id === 3) {
                        return navigate("blog-3");
                      }
                    }}
                  >
                    Read More
                  </p>
                </CardActions>
              </Zoom>
            </CardContent>
          </ImageListItem>
        ))}
      </Box>
    </ThemeProvider>
  );
}
