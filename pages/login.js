import React, { useContext, useEffect, useState } from 'react';
import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import axios from 'axios';
import { Store } from '../utils/store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    
    useEffect(() => {
        if(userInfo) {
            router.push('/');
        }
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login', { email, password });
            dispatch({ type: 'USER_LOGIN', payload: data });
            router.push(redirect || '/');
            alert('Success login');
        } catch (error) {
            alert(error.response.data ? error.response.data.message : error.message)
        }
    }

    return (
        <Layout title='Login'>
            <form className={classes.form} onSubmit={submitHandler}>
                <Typography component='h1' variant='h1'>
                    Login
                </Typography>
                <List>
                    <ListItem>
                        <TextField 
                            variant='outlined' 
                            fullWidth 
                            id='email' 
                            label='Email'
                            inputProps={{ type: 'email' }}
                            onChange={e => setEmail(e.target.value)}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <TextField 
                            variant='outlined' 
                            fullWidth 
                            id='password' 
                            label='Password'
                            inputProps={{ type: 'password' }}
                            onChange={e => setPassword(e.target.value)}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' type='submit' fullWidth color='primary'>Login</Button>
                    </ListItem>
                    <ListItem>
                        Don't have an account?&nbsp;<NextLink href={`/register?redirect=${redirect || '/'}`} passHref><Link>Register</Link></NextLink>
                    </ListItem>
                </List>
            </form>
        </Layout>
    );
}
