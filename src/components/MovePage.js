import React from 'react'
import * as Constants from "../constants/url_constants";

export const MovePage = ({pointerStyle, movePage, movement}) => {
    return (
        <div className='p-3 py-4 mb-2 bg-light text-center rounded pointerStyle' style={pointerStyle} onClick={movePage}>
            { 
            (movement === Constants.NEXT_PAGE) ?
                <svg className='bi bi-caret-right-fill' width='32' height='32' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z' />
                </svg> :
                <svg className='bi bi-caret-left-fill' width='32' height='32' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z' />
                </svg>
            }
        </div>
    )
}
