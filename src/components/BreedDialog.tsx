import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface BreedDialogI {
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

const BreedDialog = ({ open, handleClose, name, image, bred_for, temperament, life_span, origin }: BreedDialogI) => {
  return (
    <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`${name}`}
        </DialogTitle>
        <DialogContent>
          <img src={image.url} alt={name} width={450} />
          <Typography variant="body2" color="text.secondary">
            <strong>Used for: </strong>{bred_for}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Temperament: </strong>{temperament}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Life span: </strong>{life_span}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Origin: </strong>{origin}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
  )
}

export default BreedDialog;