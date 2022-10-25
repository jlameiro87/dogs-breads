export interface BreedI {
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

export interface BreedDashboardI {
  data: BreedI[];
  page: number;
  setPage: Function;
}

export interface BreedDialogI {
  open: boolean;
  handleClose: Function;
  name: string;
  image: {
    url: string;
  };
  bred_for: string;
  temperament: string;
  life_span: string;
  origin: string;
}
