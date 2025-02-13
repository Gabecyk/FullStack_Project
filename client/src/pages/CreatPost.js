import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; //Validação dos forms
import axios from "axios"; //

function CreatPost() {

    const initialValues = {
        title: "",
        postText:  "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("O título é obrigatório."),
        postText: Yup.string().required("O conteúdo do post não pode estar vazio."),
        username: Yup.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres.").max(16, "O nome de usuário pode ter no máximo 16 caracteres.").required("O nome de usuário é obrigatório.")
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then ((response) => { //Faz o post na url em questão
        console.log("Inserido"); 
        });
    };

    return (
        <div className="createPostPage">
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
                >
                <Form className="formContainer">
                    <label>Título: </label>
                    <ErrorMessage name="title" component="span"/> 
                    <Field 
                        id="inputCreatePost" 
                        name="title" 
                        placeholder="(Ex. Uma noite...)"
                    />

                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span"/> 
                    <Field 
                        id="inputCreatePost" 
                        name="postText" 
                        placeholder="(Ex. Post...)"
                    />

                    <label>Username: </label>
                    <ErrorMessage name="username" component="span"/> 
                    <Field 
                        id="inputCreatePost" 
                        name="username" 
                        placeholder="(Ex. John123...)"
                    />

                    <button type="submit"> Create Post </button>
            </Form>
        </Formik>
        </div >
    )
}

export default CreatPost