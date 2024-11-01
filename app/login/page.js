'use client'

import Image from "next/image";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button"; 
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Box component="section" sx={{ p: 6, border: '1px solid grey', borderRadius: 2 }} >
                <Image
                    className="dark:invert"
                    src="/images/taugor-logo.png"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <div className="flex flex-col gap-3">
                    <h2>Login</h2>
                    <Divider />
                    <TextField id="standard-basic" label="E-mail" variant="standard" />
                    <TextField id="standard-basic" label="Senha" variant="standard" />
                    <Link href={"/home"}>
                        <Button variant="contained">Entrar</Button>
                    </Link>
                </div>
            </Box>
        </div>
    );
}
