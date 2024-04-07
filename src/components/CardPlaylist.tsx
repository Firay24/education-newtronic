import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BookImg from "@/assets/books.jpeg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DownloadIcon from "@mui/icons-material/Download";

const CardPlaylist = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <CardMedia component="img" alt="books" height="200" image={BookImg.src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ marginX: 1, marginBottom: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 1, md: "auto" }}
          width="100%"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" gap={1} color="grey.600">
            <AccessTimeFilledIcon style={{ fontSize: 16 }} />
            <Typography variant="body2">12 April 2023</Typography>
          </Stack>
          <Button
            variant="contained"
            size="small"
            startIcon={<DownloadIcon />}
            sx={{ borderRadius: "99px" }}
          >
            Download
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardPlaylist;
