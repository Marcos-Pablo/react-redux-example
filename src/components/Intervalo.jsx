import Card from './Card';
import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarValorMaximo } from '../store/actions/numerosAction';

const Intervalo = props => {
    const { min, max } = props;

    return (
        <Card title="Intervalo de números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            const action = alterarValorMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);