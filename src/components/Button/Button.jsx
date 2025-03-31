import React from "react"
import "./Button.css"

export default function Button(props) {
    const { variant, isLoading, disabled, onClick, children } = props

    const getButtonClass = function () {
        let base = "btn"

        if (variant === "primary") {
            base += " btn-primary"
        } else if (variant === "secondary") {
            base += " btn-secondary"
        }

        if (disabled || isLoading) {
            base += " btn-disabled"
        }
        return base
    }

    const handleClick = function (e) {
        if (!disabled && !isLoading && onClick) {
            onClick(e)
        }
    }

    return (
        <button className={getButtonClass()} onClick={handleClick} disabled={disabled || isLoading}>
            {isLoading ? (
                <span className="spinner" />
            ) : (
                children
            )}
        </button>
    )
}