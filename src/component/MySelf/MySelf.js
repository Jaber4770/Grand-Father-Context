import React from 'react';

const MySelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h3>My self</h3>
            <p>Home: {house}</p>
        </div>
    );
};

export default MySelf;