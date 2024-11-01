import { TextField, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const InformacoesFuncionarios = ({formData, prevStep, handleSubmit}) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="w-full h-content container mx-auto flex flex-col justify-center font-sans">
            <div className="mx-56">

                <div className="mt-[2.5rem] text-2xl font-semibold">
                    <h2>Informações do Funcionário</h2>
                </div>

                <div className="grid grid-cols-2 col-span-2 gap-8 mt-[2.5rem]">
                    <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Cargo</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={10}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Analista de Projetos</MenuItem>
                            <MenuItem value={20}>Assistente</MenuItem>
                            <MenuItem value={30}>Atendimento</MenuItem>
                            <MenuItem value={40}>Desenvolvedor Júnior</MenuItem>
                            <MenuItem value={50}>Desenvolvedor Pleno</MenuItem>
                            <MenuItem value={60}>Desenvolvedor Sênior</MenuItem>
                            <MenuItem value={70}>Estagiário</MenuItem>
                            <MenuItem value={80}>Financeiro</MenuItem>
                            <MenuItem value={90}>QA</MenuItem>
                            <MenuItem value={100}>Recursos Humanos</MenuItem>
                            <MenuItem value={110}>Suporte</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Setor</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={10}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Administração</MenuItem>
                            <MenuItem value={20}>Gestão de Projetos</MenuItem>
                            <MenuItem value={30}>Recursos Humanos (RH)</MenuItem>
                            <MenuItem value={40}>Tecnologia da Informação (TI)</MenuItem>
                        </Select>
                    </FormControl>
                    <DatePicker
                        onChange={(date) => setStartDate(date)}
                        customInput={
                            <TextField 
                                label="Data de Admissão"
                                variant="filled"
                                fullWidth
                            />
                        }
                    />
                    <TextField id="last-name" label="Salário" variant="filled" fullWidth />
                </div>

                <div className="flex flex-row justify-between mt-[2.5rem]">
                    <Button variant="contained" onClick={prevStep}>Anterior</Button>
                    <Button variant="contained" onClick={handleSubmit}>Finalizar</Button>
                </div>
            </div>
        </div>
    );
};

export default InformacoesFuncionarios;
