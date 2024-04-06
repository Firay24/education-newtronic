import { Icon, Stack, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { StaticProps } from "@/types/static";

const StaticItem = ({ value, label, favicon }: StaticProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Icon component={favicon} sx={{ fontSize: 45, color: "primary.main" }} />
      <Stack>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
        <Typography color="grey">{label}</Typography>
      </Stack>
    </Stack>
  );
};

export default StaticItem;
