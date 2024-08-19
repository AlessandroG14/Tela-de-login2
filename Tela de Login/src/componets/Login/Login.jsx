/*import { FaUser, FaLock } from 'react-icons/fa'

import { useState } from 'react'

import './Login.css'


const Login = () => {

        const [username, setUsername] = useState('')
        const [password, setPassWord] = useState('')

        const handleSubmit = (event) => {
            event.preventDefault()
            
            alert('Dados enviado com sucesso:'  + username + '-' + password)
        }

    return (
        <div className='Container'>
            <form onSubmit={handleSubmit}>
                <h1>Acessar o sistema</h1>
                <div className='input-field'>
                    <input type='email' placeholder="Digite o seu email" 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input type='password' placeholder='Digite a sua senha' 
                    onChange={(e) => setPassWord(e.target.value)}/>
                    <FaLock className='icon' />
                </div>
                <div className='recall-forget'>
                    <label >
                        <input type='checkbox'/>
                        Lembrar
                    </label>
                    <a href='#'>Esqueci a senha</a>
                </div>
                <div className='Signup-link'>
                    <p>Não tem Cadastro? <a href='#'>Cadastrar</a>
                    </p>
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login*/

import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    // Estados para armazenar os valores do email e senha
    const [username, setUsername] = useState('');
    const [password, setPassWord] = useState('');

    // Função de submit do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Exibe um alerta com os dados enviados
        alert('Dados enviados com sucesso: ' + username + ' - ' + password);

        // Limpa os campos do formulário após o envio
        setUsername(''); // Limpa o campo de email
        setPassWord(''); // Limpa o campo de senha
    };

    return (
        <div className='Container'>
            <form onSubmit={handleSubmit}>
                <h1>Acessar o sistema</h1>
                <div className='input-field'>
                    {/* Campo de email com estado associado */}
                    <input
                        type='email'
                        placeholder='Digite o seu email'
                        value={username} // Valor do input controlado pelo estado
                        onChange={(e) => setUsername(e.target.value)} // Atualiza o estado com o valor do input
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    {/* Campo de senha com estado associado */}
                    <input
                        type='password'
                        placeholder='Digite a sua senha'
                        value={password} // Valor do input controlado pelo estado
                        onChange={(e) => setPassWord(e.target.value)} // Atualiza o estado com o valor do input
                    />
                    <FaLock className='icon' />
                </div>
                <div className='recall-forget'>
                    <label>
                        <input type='checkbox' />
                        Lembrar
                    </label>
                    <a href='#'>Esqueci a senha</a>
                </div>
                <div className='Signup-link'>
                    <p>
                        Não tem Cadastro? <a href='#'>Cadastrar</a>
                    </p>
                </div>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
};

export default Login;

