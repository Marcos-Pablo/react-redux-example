import Card from './Card';
import React from 'react';

const Soma = props => {
    const { min, max } = props;

    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;