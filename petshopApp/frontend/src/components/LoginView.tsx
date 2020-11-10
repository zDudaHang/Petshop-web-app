import React, { useContext, useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useLazyQuery } from '@apollo/client';
import {  UserResult } from "../types/User";
import { USER_AUTH } from "../graphql/queries";
import "../styles/Form.css"
import { AuthContext } from "../AuthContext";

export function LoginView() {
    const [authUser, { data }] = useLazyQuery<UserResult>(USER_AUTH);

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [hidden, setHidden] = useState(true)

    const context = useContext(AuthContext);

    useEffect(() => {
        console.log(`[LOGIN VIEW] useEffect`)
        if (data?.auth) {
            if (context.login) {
                context.login(data.auth)
            }
        }
    }, [context, data]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        authUser({variables: {username: username, password: password}})
    }
    return (
        <>
            <h1>Login</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Usuário:
                </label>
                <input className="info" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <label>
                    Senha:
                </label>
                <input className="info" type={hidden ? "password" : "text"} value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={(e) => 
                    {e.preventDefault();
                    setHidden(!hidden)
                    }}>{hidden ? <AiFillEye/> : <AiFillEyeInvisible/>}</button>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}