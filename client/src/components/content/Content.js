import React from 'react';
import "./Content.css";

export default function Content(props) {
    return (
        <div className="content">
            <div className="left-panel">
                {props.left}
            </div>
            <div className="right-panel">
                {props.right}
            </div>
        </div>
    )
}