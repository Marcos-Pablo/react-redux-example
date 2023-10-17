import Card from './Card';
import React from 'react';

const Soma = props => {

    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;