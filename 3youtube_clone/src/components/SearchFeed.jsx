import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFormAPI } from "../utils/FetchFromAPI";
import { Sidebar, Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState("");
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFormAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fffs" }}>
        Search result for:
        <span style={{ color: "#F31503" }}>{searchTerm} </span>videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
