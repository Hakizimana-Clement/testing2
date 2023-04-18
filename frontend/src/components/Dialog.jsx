import * as React from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">Warning:</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="info">
              <h5>This is an info alert — check it out!</h5>
              <p>
                The images used on this website are from
                <a href="https://www.diyanu.com/">www.diyanu.com </a>
                and are not owned by us. Their use on this site is solely for
                <strong> educational </strong> and
                <strong> learning purposes</strong>, and we do not claim any
                ownership or copyright over them.
              </p>
              <p>
                If you are the rightful owner of any of these images and would
                like them to be removed, please contact us and we will promptly
                do so .
              </p>
            </Alert>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
