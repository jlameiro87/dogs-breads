import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Breed from "./Breed";
import Container from "@mui/material/Container";

interface BreedI {
  id?: string;
  name: string;
  image: {
    url: string;
  };
}

interface BreedDashboardI {
  data: BreedI[];
  numDogs: number;
  setNumberDogs: Function;
}

const BreedDashboard = ({ data, numDogs, setNumberDogs }: BreedDashboardI) => {
  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dogs to fetch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={numDogs}
          label="Dogs to fetch"
          onChange={(e) => setNumberDogs(Number(e.target.value))}
        >
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="15">15</MenuItem>
          <MenuItem value="20">20</MenuItem>
        </Select>
      </FormControl>
      <List>
        {data.map((breed) => (
          <ListItem key={breed.id}>
            <Breed name={breed.name} image={breed.image} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BreedDashboard;
