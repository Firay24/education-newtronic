import React from "react";
import Image from "next/image";
import { Button, Hidden, Stack, Typography } from "@mui/material";
import BannerImg from "@/assets/banner.jpeg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Hero = () => {
  return (
    <Stack maxWidth="full" paddingX={5} position="relative" overflow="hidden">
      <div
        style={{
          position: "absolute",
          height: "85vh",
          left: 40,
          right: 40,
          backgroundImage:
            "linear-gradient(rgba(37, 121, 235, 0.5), rgba(37, 121, 235, 0))",
          borderRadius: 10,
        }}
      >
        <Stack
          height="45%"
          color="white"
          textAlign="center"
          justifyContent="center"
          gap={3}
        >
          <Stack>
            <Typography variant="h1" fontSize={56} fontWeight="bold">
              Education Newtronic
            </Typography>
            <Typography variant="body1">
              Aplikasi dalam bidang pendidikan yang dikembangkan oleh perusahaan
              newtronic
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Button
              variant="contained"
              startIcon={<ArrowDownwardIcon />}
              style={{
                width: "fit-content",
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
      </div>
      <Image
        src={BannerImg}
        alt="banner hero"
        style={{
          width: "100%",
          height: "85vh",
          borderRadius: 10,
          objectFit: "cover",
        }}
      />
    </Stack>
  );
};

export default Hero;
