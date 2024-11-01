import React, { useState } from 'react';
import ContatoFuncionario from './ContatoFuncionario';
import InformacoesFuncionarios from './InformacoesFuncionarios';
import { Modal, Box, CircularProgress, Typography, Button } from "@mui/material";
import Navbar from './Navbar';

const EtapasFormulario = () => {
    const totalSteps = 2;
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        sexo: null,
        endereco: '',
        telefone: '',
        fotoPerfil: null,
        dataNascimento: '',
        cargo: '',
        dataAdmissao: '',
        setor: '',
        salario: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handlePhotoChange = (photo) => {
        setFormData({ ...formData, profilePhoto: photo });
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccessModal(true); 
        }, 2000); 
      };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        setStep(1);
    };

    return (
        <div>
            <Navbar passoAtual={step} totalPassos={totalSteps} />
            {step === 1 && (
                <div>
                    <ContatoFuncionario formData={formData} handleChange={handleChange} handlePhotoChange={handlePhotoChange} nextStep={nextStep} etapaAtual={step} />
                </div>
            )}
            {step === 2 && (
                <div>
                    <InformacoesFuncionarios formData={formData} handleChange={handleChange} handlePhotoChange={handlePhotoChange} prevStep={prevStep} handleSubmit={handleSubmit}/>
                </div>
            )}

            <Modal open={showSuccessModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Cadastro realizado com sucesso!
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        O usuário foi cadastrado com sucesso no sistema.
                    </Typography>
                    <Button variant="contained" onClick={handleCloseModal} sx={{ mt: 2 }}>
                        Fechar
                    </Button>
                </Box>
            </Modal>

            {isSubmitting && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <CircularProgress color="primary" />
                </div>
            )},
        </div>
    );
};

export default EtapasFormulario;
