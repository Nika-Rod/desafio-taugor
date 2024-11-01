'use client'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TabelaFuncionarios from '@/components/TabelaFuncionarios';
import { Button } from '@mui/material';
import Link from 'next/link';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex justify-center">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Tabela de Funcionários" {...a11yProps(0)} />
                            <Tab label="Tabela de Funcionários Demitidos" {...a11yProps(1)} />
                            <Tab label="Cadastrar Funcionário" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <TabelaFuncionarios />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Tabela de Funcionários Demitidos
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Link href={"/cadastro"}>
                            <Button variant="contained">Cadastrar Novo Funcionário</Button>
                        </Link>
                    </CustomTabPanel>
                </Box>
            </div>
        </>
    );
}
