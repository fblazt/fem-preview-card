import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'

const BaseCard = (props) => {
  const theme = useTheme()
  const Card = styled.div`
    grid-column: 1 / 4;
    margin: auto;
    min-height: 400px;
    width: 225px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${(props) => props.color};
    &:nth-child(1) {
      border-radius: 10px 10px 0 0;
    }
    &:nth-child(3) {
      border-radius: 0 0 10px 10px;
    }
    @media (min-width: ${theme.widths.desktop}) {
      grid-column: auto;
      &:nth-child(1) {
        border-radius: 10px 0 0 10px;
      }
      &:nth-child(3) {
        border-radius: 0 10px 10px 0;
      }
    }
  `
  const CardTitle = styled.h3`
    margin: 1.5rem 0;
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
      <div>
        <BaseIcon icon={props.icon} />
        <CardTitle>{props.title}</CardTitle>
        <CardParagraph>{props.description}</CardParagraph>
      </div>
      <div>
        <BaseButton color={props.color}/>
      </div>
    </Card>
  )
}

export default BaseCard