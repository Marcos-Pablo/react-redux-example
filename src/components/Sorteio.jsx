import Card from './Card';
import React from 'react';

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

export default Sorteio;