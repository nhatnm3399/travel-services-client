import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupConfirm({open, setOpen, title, content, func, setOpenSnackbar, setMessageSnackbar, bookingId}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> {
            func();
            handleClose()
            setOpenSnackbar(()=> true)
            setMessageSnackbar(()=> "Đã thêm thành công khách sạn")
          }}>Đồng ý</Button>
          <Button onClick={()=> {
            handleClose()
            setOpenSnackbar(()=> true)
            setMessageSnackbar(()=> "Đã từ chối duyệt khách sạn")
          }}>Từ chối</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}