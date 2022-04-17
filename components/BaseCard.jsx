import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import BaseButton from './BaseButton'


const BaseCard = (props) => {
  const theme = useTheme()
  const Card = styled.div`
    background: ${(props) => props.color}
  `
  const CardTitle = styled.h3`
    font-family: 'Big Shoulders Display', cursive;
    font-size: 3rem;
    text-transform: uppercase;
    color: ${theme.colors.neutral.veryLightGray}
  `
  const CardParagraph = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    color: ${theme.colors.neutral.transparentWhite}
  `

  return (
    <Card color={props.color}>
      <CardTitle>{props.title}</CardTitle>
      <CardParagraph>{props.description}</CardParagraph>
      <BaseButton color={props.color}/>
    </Card>
  )
}

export default BaseCard