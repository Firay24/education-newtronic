import CardPlaylist from "@/components/CardPlaylist";
import Hero from "@/components/Hero";
import StaticItem from "@/components/StaticItem";
import { StaticProps } from "@/types/static";
import { dataStatic } from "@/utils/dataStatic";
import { Divider, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack gap={10} paddingBottom={8}>
      <Hero />
      <Stack width="full" alignItems="center">
        <Grid
          container
          direction="row"
          spacing={5}
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{
            paddingX: 5,
            width: { xs: "100%", md: "60%", xl: "30%" },
          }}
        >
          {dataStatic.map((item: StaticProps) => (
            <Grid item key={item.label}>
              <StaticItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack paddingX={5} gap={3}>
        <Stack>
          <Typography variant="h4" fontWeight="bold">
            Our Playlist
          </Typography>
          <Divider
            sx={{
              width: "10%",
              borderColor: "primary.main",
              borderWidth: 2,
              marginY: 2,
            }}
          />
        </Stack>
        <Stack>
          <CardPlaylist />
        </Stack>
      </Stack>
    </Stack>
  );
}
