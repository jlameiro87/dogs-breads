import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { BreedDialogI } from "../utils/constants";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

const BreedDialog = ({
  open,
  handleClose,
  name,
  image,
  bred_for,
  temperament,
  life_span,
  origin,
}: BreedDialogI) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`${name}`}
        <Tooltip title="Close">
          <IconButton
            aria-label="close"
            onClick={() => handleClose()}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent>
        <img src={image.url} alt={name} width={450} />
        <Typography variant="body2" color="text.secondary">
          <strong>Used for: </strong>
          {bred_for}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Temperament: </strong>
          {temperament}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Life span: </strong>
          {life_span}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Origin: </strong>
          {origin}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default BreedDialog;
