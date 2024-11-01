import { TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button"; 

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const ContatoFuncionario = ({ formData, handleChange, handlePhotoChange, nextStep}) => (
    <>
        <div className="w-full h-content container mx-auto flex flex-col justify-center font-sans">
            <div className="mx-56">
                <div className="flex flex-col gap-4 mt-[2.5rem]">
                    <h2 className="text-4xl font-semibold">Informações De Contato Do Usuário</h2>
                    <p className="text-xl text-gray-400">Diga quem você é, como os empregadores podem entrar em contato com você e qual a sua profissão.</p>
                </div>

                <div className="mt-[2.5rem] text-2xl font-semibold">
                    <h3>Informações de contato</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-[2.5rem]">
                    <div className="flex flex-col gap-10">
                        <TextField id="nome" label="Nome" variant="filled" value={formData.nome} onChange={handleChange('nome')} fullWidth  />
                        <TextField id="sobrenome" label="Sobrenome" value={formData.sobrenome} onChange={handleChange('sobrenome')} variant="filled" fullWidth />
                        <FormControl>
                            <FormLabel id="sexo">Sexo</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formData.sexo}
                                onChange={handleChange('sexo')}
                                name="radio-buttons-group"
                                className="flex flex-row"
                            >
                                <FormControlLabel id="feminino" value="feminino" control={<Radio />} label="Feminino" />
                                <FormControlLabel id="masculino" value="masculino" control={<Radio />} label="Masculino" />
                                <FormControlLabel id="outro" value="outro" control={<Radio />} label="Outro" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div className="bg-gray-200 rounded-3xl w-[197px]">
                            <img src='/images/avatar.png' alt="Avatar" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3>Fotos do Perfil</h3>
                            <Button
                                id="upload-imagem"
                                component="label"
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload files
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => handlePhotoChange(event.target.files[0])}
                                    multiple
                                />
                            </Button>
                            <FormControlLabel control={<Switch />} label="Foto Redonda" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10 mt-[2.5rem]">
                    <TextField id="dataNascimento" label="Data de nascimento" variant="filled" value={formData.dataNascimento} onChange={handleChange('dataNascimento')} fullWidth />
                    <TextField id="telefone" label="Telefone" variant="filled" value={formData.telefone} onChange={handleChange('telefone')} fullWidth />
                    <TextField id="email" label="E-mail" variant="filled" value={formData.email} onChange={handleChange('email')} fullWidth />
                    <TextField id="endereco" label="Endereço" variant="filled" value={formData.endereco} onChange={handleChange('endereco')} fullWidth />
                </div>

                <div className="mt-[2.5rem] flex justify-end">
                    <Button variant="contained" onClick={nextStep}>Próximo</Button>
                </div>
            </div>
        </div>
    </>
);

export default ContatoFuncionario;

