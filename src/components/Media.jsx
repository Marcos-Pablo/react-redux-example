import Card from './Card';
import React from 'react';

const Media = props => {
    const { min, max } = props;
    
    return (
        <Card title="Médias dos números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media;