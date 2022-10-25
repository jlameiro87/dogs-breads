import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BreedDialog from "./BreedDialog";
import { useState } from "react";

interface BreedI {
  id?: string;
  name: string;
  image: {
    url: string;
  };
  bred_for: string;
  temperament: string;
  life_span: string;
  origin: string;
}

const Breed = ({ name, image, bred_for, temperament, life_span, origin }: BreedI) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" width="250" image={image.url} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{cursor: "pointer"}} onClick={() => setOpen(true)}>
          {name}
        </Typography>
      </CardContent>
      <BreedDialog open={open} handleClose={handleClose} name={name} image={image} bred_for={bred_for} temperament={temperament} life_span={life_span} origin={origin} />
    </Card>
  );
};

export default Breed;
