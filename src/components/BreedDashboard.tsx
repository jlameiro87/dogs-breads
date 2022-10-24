import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Breed from "./Breed";
import Container from "@mui/material/Container";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BreedI {
  id?: string;
  name: string;
  image: {
    url: string;
  };
  bred_for: string;
  temperament: string;
}

interface BreedDashboardI {
  data: BreedI[];
  page: number;
  setPage: Function;
}

const BreedDashboard = ({ data, page, setPage }: BreedDashboardI) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Pagination count={18} page={page} shape="rounded" onChange={handleChange} />
      </Stack>
      <List>
        {data.map((breed) => (
          <ListItem key={breed.id}>
            <Breed name={breed.name} image={breed.image} bred_for={breed.bred_for} temperament={breed.temperament} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BreedDashboard;
