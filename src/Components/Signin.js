import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  Snackbar,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Slider from "react-slick"; // Import react-slick for the carousel
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";

const carouselImages = [
  {
    id: 1,
    src: "images/Consult_Facility.svg",
    alt: "slide 1",
    heading: "Consultation and Facility booking",
    description:
      "Easily book appointments, Set reminders, follow-up visits , and many more. Get assistance in facilitating your facility.",
  },
  {
    id: 1,
    src: "images/Dashboard_Reports.svg",
    alt: "slide 1",
    heading: "Dashboard & Reports",
    description:
      "Assisting and Monitoring finances with its simplified data analysis. View all your income and invoices in one place",
  },
  {
    id: 1,
    src: "images/iCalendar.svg",
    alt: "slide 1",
    heading: "Calendar",
    description:
      "Multiple calendars will lead to more confusion. Start using one single calendar and allocate your time reasonably",
  },
  {
    id: 1,
    src: "images/Integration.svg",
    alt: "slide 1",
    heading: "Integration",
    description:
      "Integrate contactless transaction modes for a sound and ceaseless system.",
  },
  {
    id: 1,
    src: "images/Membership.svg",
    alt: "slide 1",
    heading: "Quicksale",
    description:
      "One-stop sales point for promoting and trading your services, memberships, equipment, or instruments and more.",
  },
  {
    id: 1,
    src: "images/QuickSale.svg",
    alt: "slide 1",
    heading: "Memberships",
    description:
      "Consider memberships for long-term commitments and increase customer satisfaction and retention.",
  },
  {
    id: 1,
    src: "images/WhatsApp_Online.svg",
    alt: "slide 1",
    heading: "WhatsApp ChatBots",
    description:
      "Getting connected and giving personalized guidance to your patients' queries is now easy as a few clicks.",
  },
];

const Signin = () => {
  const [snackbaropen, setSnackbaropen] = useState(false);
  const [snackbarmsg, setSnackbarmsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const navigate = useNavigate()
  const handleSnackbarClose = () => {
    setSnackbaropen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev); 
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); 
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      setSnackbarmsg("Login successfully");
      setSnackbaropen(true);
      navigate("/home")
    },
  });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: { md: "100px" },
        paddingInline: "100px",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#ffffff",
          height: "500px",
          width: "900px",
          boxShadow: 3,
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              width: "120px",
              height: "60px",
              paddingBlockStart: "70px",
              paddingInlineStart: "50px",
            }}
          >
            <img
              src="LyfngoFlash.b48d0fbf.png"
              alt="lyfngo_logo"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box sx={{ paddingInlineStart: "50px" }}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Sign in
            </Typography>
            <Typography variant="body1">
              to access your <span style={{ color: "#125fbf" }}>LYFnGO </span> account
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="email"
                placeholder="email"
                variant="outlined"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  marginBottom: 2,
                  marginTop: 2,
                  "& .MuiOutlinedInput-root": { height: "35px", width: { md: "300px" } },
                }}
              />
              <TextField
                fullWidth
                id="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"} 
                variant="outlined"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                sx={{
                  marginBottom: 2,
                  "& .MuiOutlinedInput-root": { height: "35px", width: { md: "300px" } },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
                    <Typography>
                <Link
                  to="#"
                  style={{
                    color: "#125fbf",
                    textDecoration: "none", 
                    paddingBlockEnd: 3,
                  }}
                >
                  Get Free Trial For 14 Days
                </Link>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
            
                sx={{
                  marginBottom: 2,
                  "& .MuiOutlinedInput-root": { height: "35px", width: { md: "300px" }, paddingBlockStart:"10px" },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Snackbar
            open={snackbaropen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
              {snackbarmsg}
            </Alert>
          </Snackbar>
        </Box>
        <Box
          sx={{
            width: { md: "500px", paddingInlineEnd: "40px" },
            marginBottom: "20px",
            paddingBlockStart: "70px",
          }}
        >
          <Slider {...carouselSettings}>
            {carouselImages.map((image) => (
              <Box key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "80%",
                    height: "200px",
                    objectFit: "cover",
                    marginInlineStart: "50px",
                  }}
                />
                <Box sx={{ paddingBlock: "50px" }}>
                  <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
                    {image.heading}
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>{image.description}</Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Card>
    </Box>
  );
};

export default Signin;
