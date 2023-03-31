import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCatagroy, setselecetedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((catagory) => (
        <button
          className="category-btn"
          onClick={() => setselecetedCategory(catagory.name)}
          style={{
            background: catagory.name === selectedCatagroy && "#FC1503",
            color: "#fff",
          }}
          key={catagory.name}
        >
          <span
            style={{
              color: catagory.name === selectedCatagroy ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {catagory.icon}
          </span>
          <span
            style={{
              opacity: catagory.name === selectedCatagroy ? "1" : "0.8",
            }}
          >
            {catagory.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
