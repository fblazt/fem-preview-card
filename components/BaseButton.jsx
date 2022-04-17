import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const BaseButton = (props) => {
  const theme = useTheme()
  const Button = styled.button`
    background-color: #FFFFFF;
    border-radius: 9999px;
    border: 3px #FFFFFF solid;
    padding: 10px 20px;
    font-family: 'Lexend Deca', sans-serif;
    color: ${(props) => props.color};
    cursor: pointer;
    transition: all;
    &:hover {
      color: ${theme.colors.neutral.veryLightGray};
      background-color: ${(props) => props.color};
    }
  `

  return (
    <Button color={props.color}>Learn More</Button>
  )
}

export default BaseButton