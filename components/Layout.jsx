import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Next E-Store</title>
            </Head>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>e-store</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved. E-Store. 2021
                </Typography>
            </footer>
        </div>
    )
}
