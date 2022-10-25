import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BreedDialog from "./BreedDialog";
import { useState } from "react";
import { BreedI } from "../utils/constants";
import Tooltip from "@mui/material/Tooltip";

const Breed = ({ name, image, bred_for, temperament, life_span, origin }: BreedI) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" width="250" image={image.url} alt={name} />
      <CardContent>
        <Tooltip title="Details">
          <Typography gutterBottom variant="h5" component="div" sx={{cursor: "pointer"}} onClick={() => setOpen(true)}>
            {name}
          </Typography>
        </Tooltip>
      </CardContent>
      <BreedDialog open={open} handleClose={handleClose} name={name} image={image} bred_for={bred_for} temperament={temperament} life_span={life_span} origin={origin} />
    </Card>
  );
};

export default Breed;
