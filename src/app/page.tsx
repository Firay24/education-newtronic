import Hero from "@/components/Hero";
import StaticItem from "@/components/StaticItem";
import { StaticProps } from "@/types/static";
import { dataStatic } from "@/utils/dataStatic";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack gap={10} paddingBottom={8}>
      <Hero />
      <Stack width="full" alignItems="center">
        <Stack
          direction="row"
          paddingX={5}
          width="60%"
          justifyContent="space-between"
        >
          {dataStatic.map((item: StaticProps) => (
            <StaticItem key={item.label} {...item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
