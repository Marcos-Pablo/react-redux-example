import Card from './Card';
import React from 'react';

const Sorteio = props => {
    return (
        <Card title="Sorteio dos números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio;