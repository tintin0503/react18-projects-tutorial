import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledNavbar } from '../components/StyledNavbar'

export const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  )
}
