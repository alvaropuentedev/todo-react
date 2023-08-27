import React from 'react'
import { ButtonDeleteProps } from '../../interfaces/ButtonDeleteProps'

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick }) => {
    return (
        <>
            <button onClick={ onClick }>
                <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" /> 
                    <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
            </button>
        </>
    )
}
