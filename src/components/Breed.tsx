import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface BreedI {
  id?: string;
  name: string;
  image: {
    url: string;
  };
  bred_for: string;
  temperament: string;
}

const Breed = ({ name, image, bred_for, temperament }: BreedI) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" width="250" image={image.url} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Used for: </strong>{bred_for}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Temperament: </strong>{temperament}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Breed;
