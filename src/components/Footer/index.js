import { findByLabelText } from '@testing-library/react'
import React from 'react'
import { DiGithubBadge } from "react-icons/di"
import { IconContext } from 'react-icons/lib'

export default function Footer() {
    return (
        <IconContext.Provider value={{ size: '80px', display: 'flex', align: 'center'}} >     
        <div className='gitbadge'>
           < DiGithubBadge />
        </div>
        </IconContext.Provider>
    )
}
