import React, { FormEvent, useState } from 'react';
import {
    Typography,
    Container,
    Button,
    Avatar,
    TextField,
    Checkbox,
    Grid,
    Box,
    CssBaseline} from '@mui/material';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
//@mui/material

type CopyProps = {
    site?: string;
}
function Copyright(props: CopyProps){
    return(
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href={`https://www.${props.site}.com.br`}>
            {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();


export default function LoginPage(){
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
const [error, setError] = useState<string | boolean>('');
const [errorMessage, setErrorMessage] = useState<string>('');
//aqui a mágica acontece
const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    //pára tudo!!!
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    setPassword(data.get('password'));
    if(password && password.length < 6 ){
        setError(true);
        setErrorMessage("Tá de brincadeira né? Senha muito curta!");
    }
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
}


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{mt:8,
                     display:'flex',
                     flexDirection: 'column',
                     alignItems:'center'
                     }}>
                    <Typography component="h1" variant="h5">
                        Tela de Login
                    </Typography>
                    {/* Qualquer comentário */}
                    <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                        <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o login"  autoComplete="email" />
                        <TextField margin="normal" required fullWidth id="password" name="password" type="password" label="Digite a senha" autoComplete="current-password"/>
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Lembrar-me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                            Login
                        </Button>
                        {error && <Typography color="error">{errorMessage}</Typography>}
                    </Box>
                </Box>

                <Copyright site="avanade"/>
            </Container>
        </ThemeProvider>
    )
}
