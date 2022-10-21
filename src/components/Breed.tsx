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
}

const Breed = ({ name, image }: BreedI) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" width="250" image={image.url} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Breed;
