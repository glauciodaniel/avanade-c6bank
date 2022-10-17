import React, { useState } from 'react'
import {Stack, Snackbar as Container} from '@mui/material';
import Alert from '../Alert';


export default function Snackbar(props) {
const [open, setOpen] = useState<boolean>(props.open);


const handleClose = ()=>{
    setOpen(false);
}

  return (
    <Stack>
        <Container open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Usuário logado com sucesso! ...Aguarde...
            </Alert>
        </Container>
      </Stack>
  )
}
