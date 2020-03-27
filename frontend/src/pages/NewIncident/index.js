import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to='/profile'>
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para a home
                </ Link>
            </section>

            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em Reais" />

                <div className="input-group">
                    <button className="button" type="submit">Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
    );
}