import React from 'react'

export const Spinner = () => {
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <div className='spinner-border spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
            </div>
        </div>
    )
}
