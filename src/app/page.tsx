import CardPlaylist from "@/components/CardPlaylist";
import Hero from "@/components/Hero";
import StaticItem from "@/components/StaticItem";
import { StaticProps } from "@/types/static";
import { dataStatic } from "@/utils/dataStatic";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack gap={10} paddingBottom={8}>
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
        <Stack paddingX={5} alignItems={{ xs: "center", md: "start" }}>
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
            <Grid item>
              <CardPlaylist />
            </Grid>
            <Grid item>
              <CardPlaylist />
            </Grid>
            <Grid item>
              <CardPlaylist />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
