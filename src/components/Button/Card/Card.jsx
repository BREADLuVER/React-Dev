import React from "react";
import "./styles.css"

function Card(props) {
    const { title, footer, children } = props
    return (
        <div className="card">
            {title && (
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
            )}

            {children && (
                <div className="card-children">
                    {children}
                </div>
            )}

            {footer && (
                <div className="card-footer">
                    <p>{footer}</p>
                </div>
            )}
        </div>
    )
}

export default Card;