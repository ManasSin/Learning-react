import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFormAPI } from "../utils/FetchFromAPI";

const Feed = () => {
  const [selecetedCategory, setselecetedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFormAPI(`search?part=snippet&q=${selecetedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selecetedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1.4px solid #3d3d3d",
          px: { sx: 1, md: 2 },
        }}
      >
        <Sidebar
          selecetedCategory={selecetedCategory}
          setselecetedCategory={setselecetedCategory}
        />
        <Typography className="copyright" variant="body2" mt={1.5}>
          Copyright 2023 My media
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflow: "scroll",
          height: "100%",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fffs" }}
        >
          {selecetedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
