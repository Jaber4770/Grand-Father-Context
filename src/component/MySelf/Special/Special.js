import React, { useContext } from 'react';
import { RingContext } from '../../../App';

const Special = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h3>Special person</h3>
            <h4 style={{ color: 'blue' }}>Get {ornaments} from <br /> Grand Father!</h4>
            <h4>House: {house}</h4>
        </div>
    );
};

export default Special;