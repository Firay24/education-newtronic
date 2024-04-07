"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-scroll";

const Hero = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://103.183.75.112/api/directory/dataList"
      );
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Stack
      maxWidth="full"
      paddingX={{ xs: 0, md: 5 }}
      position="relative"
      overflow="hidden"
    >
      <Stack
        left={{ xs: 0, md: 40 }}
        right={{ xs: 0, md: 40 }}
        style={{
          position: "absolute",
          height: "85vh",
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
          <Stack alignItems="center">
            <Typography
              variant="h1"
              fontSize={{ xs: 40, md: 56 }}
              fontWeight="bold"
            >
              {data.length > 0 && data[0].title}
            </Typography>
            <Stack width={{ xs: "80%", md: "100%" }}>
              <Typography variant="body1" fontSize={{ xs: 14, md: 16 }}>
                {data.length > 0 && data[0].description}
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems="center">
            <Link to="playlist" smooth={true} duration={500} spy={true}>
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
            </Link>
          </Stack>
        </Stack>
      </Stack>
      {data.length > 0 ? (
        <Image
          src={data[0].banner}
          alt="banner hero"
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "85vh",
            borderRadius: 10,
            objectFit: "cover",
          }}
        />
      ) : null}
    </Stack>
  );
};

export default Hero;
