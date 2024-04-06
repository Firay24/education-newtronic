import {
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <Container>
      <Stack textAlign="center" paddingY={3}>
        <Divider />
        <Grid container justifyContent="center" marginTop={3}>
          <Grid item>
            <IconButton>
              <RiInstagramFill />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FaFacebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FaYoutube />
            </IconButton>
          </Grid>
        </Grid>
        <Typography color="grey.600" variant="body2">
          © 2024 Education Newtronic, Inc. All rights reserved.
        </Typography>
      </Stack>
    </Container>
  );
};
