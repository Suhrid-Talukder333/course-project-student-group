import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function Dialogue({ onToggle, state, onAdd }) {
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleClose = () => {
    onToggle(false);
  };

  const handleAdd = () => {
    if(state === "announcement") {
      onAdd({time, title, detail});
    } else {
      onAdd({link, title, detail});
    }
  }

  const handleLink = (e) => {
    setLink(e.target.value);
  }

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>
        {state === "announcement" && "New Announcement"}
        {state === "resource" && "New Resource"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {state === "announcement" && "Write a new announcement for the class: "}
          {state === "resource" && "Write a new resource for the class: "}
        </DialogContentText>
        {state === "announcement" &&<TextField
          sx={{
            marginTop: 3,
          }}
          fullWidth
          value={time}
          label="Time"
          onChange={handleTime}
          variant="outlined"
        />}
        {state === "resource" &&<TextField
          sx={{
            marginTop: 3,
          }}
          fullWidth
          value={link}
          label="Resource Link"
          onChange={handleLink}
          variant="outlined"
        />}
        <TextField
          fullWidth
          sx={{
            marginTop: 3,
          }}
          value={title}
          label="Title"
          onChange={handleTitle}
          variant="outlined"
        />
        <TextField
          fullWidth
          sx={{
            marginTop: 3,
          }}
          value={detail}
          label="Detail"
          onChange={handleDetail}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
