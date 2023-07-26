import React from 'react';
import { createClient } from '@supabase/supabase-js'
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

const PROJECT_URL = 'https://cnsjqiscwhqpobuykvka.supabase.co'
const PROJECT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuc2pxaXNjd2hxcG9idXlrdmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzODMwOTgsImV4cCI6MjAwNTk1OTA5OH0.6-XCE460Y-w_iPfQtmw6W9aW_HASqalbqnyI1jMeNwg'
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

// PEGAR A THUMB DE UMA URL DO YOUTUBE
function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {

    const formCadastro = useForm({
        /* valores iniciais do form recebidos por Props */
        initialValues: {
            titulo: "Frost Punk",
            url: "https://www.youtube.com/watch?v=O8jtAyPuhNg"
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

                        supabase.from('aluratube').insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "jogos"
                        })
                        .then(() => {

                        })
                        .catch(( error ) => {
                            console.log( error )
                        })

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