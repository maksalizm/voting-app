import React, {useEffect, useState} from 'react';

import './utilities.css';

const ProgressBar = ({done}) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        };

        setStyle(newStyle);
    },[done]);
    return (
        <div className="progressbar">
            <div className="progressbar-done" style={style}>
            </div>
        </div>
    );
};

export default ProgressBar;