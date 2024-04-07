import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Card,
  Typography,
} from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DownloadIcon from "@mui/icons-material/Download";
import { CardProps } from "@/types/card";
import { convertDate } from "@/utils/convertDate";

const CardPlaylist = ({
  title,
  description,
  created_at,
  type,
  url,
}: CardProps) => {
  const handleDownload = (link: string) => {
    if (link) {
      fetch(link)
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const anchor = document.createElement("a");
          anchor.href = blobUrl;

          if (type === "image") {
            anchor.download = "image.jpg";
          } else if (type === "video") {
            anchor.download = "video.mp4";
          }

          document.body.appendChild(anchor);
          anchor.click();

          URL.revokeObjectURL(blobUrl);
          document.body.removeChild(anchor);
        })
        .catch((error) => {
          console.error("Error downloading file:", error);
        });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {type === "image" && url ? (
        <CardMedia component="img" alt="books" height="200" image={url} />
      ) : (
        <Stack height={200}>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </Stack>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
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
            <Typography variant="body2">
              {created_at && convertDate(created_at)}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            size="small"
            startIcon={<DownloadIcon />}
            sx={{ borderRadius: "99px" }}
            onClick={() => {
              type === "image"
                ? handleDownload(url)
                : handleDownload("https://assets.codepen.io/6093409/river.mp4");
            }}
          >
            Download
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardPlaylist;
