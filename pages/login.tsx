import React, { FormEvent, useEffect, useState } from 'react';
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

//state com variável.
// one way data binding. significa que o react envia dados para o DOM. O que o DOM faz não importa.


const [email, setEmail] = useState<string | undefined |null>('');
const [password, setPassword] = useState<string | undefined | null>('');
//error
//errorMessage
//open
//contador
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [open, setOpen] = useState<boolean>(false);
const [contador, setContador] = useState<number>(0);


//Execute automaticamente após o primeiro render da página.
//Executa a cada alteração de estado ou recarregamento da página.
useEffect(()=>{

    if(contador == 0){
        document.title = `Executando useEffect a primeira vez. Contador: ${contador}`;
    }else{
        document.title = `Executando useEffect ${contador} vezes`;
    }

    console.log(`Chamou o useEffect ${contador} vezes`);
    //vai Corinthians;

},[contador]);

//aqui a mágica acontece
const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    //pára tudo!!!
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setPassword(data.get('password'));

}


useEffect(()=>{

    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    }else if(password){
        setError(false);
        setErrorMessage('');
    }
},[password]);



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

      <button onClick={()=>setContador(contador+1)}>Mudando o Contador</button>
      Contador vale {contador}
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
