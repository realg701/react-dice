import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Rules() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <button onClick={handleOpen} className="spin-btn custom-btn">
          Rules
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              How to play dice game
            </Typography>
            <hr />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p>1. Select any dice number</p>
              <p>2. And then, click on big dice to roll</p>
              <p>
                3. if selected number is equal to dice number the dice number
                will be added as point to score
              </p>
              <p>
                4. If selected number is not equal to dice number 2 points will
                be deducted from score
              </p>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
