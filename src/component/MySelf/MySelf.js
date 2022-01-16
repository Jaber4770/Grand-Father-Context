import React from 'react';
import Special from './Special/Special';

const MySelf = (props) => {
    const { house} = props;
    return (
        <div>
            <h3>My self</h3>
            <p>Home: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;