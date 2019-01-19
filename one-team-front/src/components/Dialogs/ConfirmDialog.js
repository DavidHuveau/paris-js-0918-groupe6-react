import React from "react";
import Button from "@material-ui/core/Button";
import { AwesomeButton } from "react-awesome-button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ConfirmDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleOk = () => {
    this.setState({ open: false });
    const { handleOk } = this.props;
    handleOk();
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  render() {
    const { buttonCaption, dialogTitle, dialogQuestion } = this.props;
    return (
      <div>
        <AwesomeButton
          type="primary"
          className="aws-btn edit"
          action={this.handleClickOpen}
        >
          {buttonCaption || "buttonCaption"}
        </AwesomeButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {dialogTitle || "dialogTitle"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogQuestion || "dialogQuestion"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmDialog;
