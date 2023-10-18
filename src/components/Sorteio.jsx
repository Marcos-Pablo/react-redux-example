import Card from './Card';
import React from 'react';
import { connect } from 'react-redux';

const Sorteio = props => {
    const { min, max } = props;

    const randomValue = parseInt(Math.random() * (max - min) + min)
    return (
        <Card title="Sorteio dos números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{randomValue}</strong>
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

export default connect(mapStateToProps)(Sorteio);