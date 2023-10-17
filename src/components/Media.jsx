import Card from './Card';
import React from 'react';

const Media = props => {
    return (
        <Card title="Médias dos números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media;