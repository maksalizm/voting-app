import React, {useEffect, useState} from 'react';

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
        <div className="progress">
            <div className="progress-done" style={style}>
            </div>
        </div>
    );
};

export default ProgressBar;