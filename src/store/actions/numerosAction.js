import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes';

export const alterarNumeroMinimo = (novoNumero) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export const alterarValorMaximo = (novoNumero) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}