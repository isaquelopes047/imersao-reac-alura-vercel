import React from 'react';
import { StyledRegisterVideo } from "./styles";

/* criando meu hook de formulario */
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value
            })
        },
        clearForm() {
            setValues({})
        }
    }
}

export default function RegisterVideo() {

    const formCadastro = useForm({
        /* valores iniciais do form recebidos por Props */
        initialValues: {
            titulo: "Frost Punk",
            url: "https://youtube/..."
        }
    });

    const [formVisivel, setFormVisivel] = React.useState(true);

    return (
        <StyledRegisterVideo>
             <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
             </button>
             {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        formCadastro.clearForm();
                        setFormVisivel(false)
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>
                            <input 
                                placeholder="Titulo do Videos" 
                                name="Titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}
                            />

                            <input 
                                placeholder="URL" 
                                name="Url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}    
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : null }
        </StyledRegisterVideo>
    )
}