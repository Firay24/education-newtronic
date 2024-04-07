"use client";
import CardPlaylist from "@/components/CardPlaylist";
import Hero from "@/components/Hero";
import StaticItem from "@/components/StaticItem";
import { StaticProps } from "@/types/static";
import { dataStatic } from "@/utils/dataStatic";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
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
    <Stack gap={8} paddingBottom={8}>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Stack alignItems="center">
          <Grid
            container
            direction="row"
            spacing={5}
            justifyContent={{ xs: "center", md: "space-between" }}
            paddingX={5}
            width="80%"
          >
            {dataStatic.map((item: StaticProps) => (
              <Grid item key={item.label}>
                <StaticItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
      <Container>
        <Stack
          id="playlist"
          paddingX={5}
          alignItems={{ xs: "center", md: "start" }}
          paddingY={4}
        >
          <Stack>
            <Typography variant="h4" fontWeight="bold">
              Our Playlist
            </Typography>
            <Stack alignItems={{ xs: "center", md: "start" }}>
              <Divider
                sx={{
                  width: "50%",
                  borderColor: "primary.main",
                  borderWidth: 2,
                  marginY: 2,
                }}
              />
            </Stack>
          </Stack>
          <Grid
            gap={{ xs: 4, md: 0 }}
            marginTop={3}
            container
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            {data.length > 0 && data[0].playlist ? (
              data[0].playlist.map((item: any, index: number) => (
                <Grid item key={index}>
                  <CardPlaylist {...item} />
                </Grid>
              ))
            ) : (
              <Typography variant="body1">No playlist available</Typography>
            )}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
