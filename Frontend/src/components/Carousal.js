import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: " Gangs of Wasseypur",
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UY209_CR0,0,140,209_AL_.jpg",
  },

  {
    label: " Memoirs of a Geisha",
    imgPath:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388367666i/930._SY75_.jpg",
  },

  {
    label: " No One Killed Jessica",
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTU4Mzk0NDY3OV5BMl5BanBnXkFtZTcwMjE1MTkyNA@@._V1_UY209_CR2,0,140,209_AL_.jpg",
  },

  {
    label: " Twilight ",
    imgPath:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443i/41865._SY75_.jpg",
  },

  {
    label: " M.S. Dhoni: The Untold Story",
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg",
  },

  {
    label: "Chronicles of Narnia",
    imgPath:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353029077i/100915._SY75_.jpg",
  },

  {
    label: " The Princess Bride",
    imgPath:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327903636i/21787._SY75_.jpg",
  },
];


// imported from Material UI Carousal Components

function Carousal() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "#B6C3BE",
        }}
      >
        <Typography  >{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 450,
                  display: "block",
                  maxWidth: 1500,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousal;
