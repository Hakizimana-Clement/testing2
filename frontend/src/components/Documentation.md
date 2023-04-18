# What I Learn In Process Of Making Igitenge Website

## How to make ImageList component form Material UI be Responsible on breakpoint

### step 1

create const an name in

```jsx
const theme
```

and then, import createTheme from material UI.
and then.
inside the theme constanst put createTheme components, it's object.

```jsx
const theme = createTheme({});
```

the CreateTheme use brealpints object which have values objects which heve to specific screen resolution depend on sixe of screen

```jsx
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
```

Here we put the value we need to be active depend on screen.

# step 2

import ThemeProvider package form Material UI.

```jsx
import { ThemeProvider } from "@mui/material/styles";
```

and then wrap on box u want to make responsible

```jsx
<ThemePRovider them={theme}>
</ThemeProvider>
```

# Code overview

```jsx
<ThemeProvider theme={theme}>
  <Box
    sx={{
      // HERE US WHERE WE CONTROL COLUMNS FOR SPECIFIC SCREEN
      // THis is height of box image
      height: 450,
      // backgroundColor btn images
      backgroundColor: "pink",
      display: "grid",
      // this is where we control card image depend on column we want
      gridTemplateColumns: {
        mobile: "repeat(1, 1fr)",
        bigMobile: "repeat(2, 1fr)",
        tablet: "repeat(3, 1fr)",
        desktop: "repeat(4, 1fr)",
      },
      [`& .${imageListItemClasses.root}`]: {
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
          // position="below"
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.title}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </Box>
</ThemeProvider>
```
