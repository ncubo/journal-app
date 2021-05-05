import React from 'react'

export const GoTo = ({handleArrowKey,inputValue,setInputValue}) => {
    // onKeyDown={handleArrowKey}
    return (
        <div className='input-group mt-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Page'
                  onKeyDown={handleArrowKey}
                  value={inputValue}
                  onChange={event => setInputValue(event.target.value)}
                />
        </div>
    )
}
