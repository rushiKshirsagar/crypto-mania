import React from 'react'
import style from './heading.module.css'
import { Typography } from '@mui/material'

const Heading = () => {
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 25, textAlign: 'center', mt: 2 }}><span className={style.mania}>CRTPTO MANIA</span>
      </Typography>
    </>
  )
}

export default Heading
