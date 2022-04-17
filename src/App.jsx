import { css, Global, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import BaseCard from "../components/BaseCard"

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    font-size: 15px;
  }
`
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const App = () => {
  const theme = useTheme()
  const cardsDetail = [
    {
      icon: '',
      title: 'Sedans',
      description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: theme.colors.primary.orange
    },
    {
      icon: '',
      title: 'SUVs',
      description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: theme.colors.primary.darkCyan
    },
    {
      icon: '',
      title: 'Luxury',
      description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: theme.colors.primary.veryDarkCyan
    },
  ]

  return (
    <div>
      <Global styles={globalStyles} />
      <CardsContainer>
        {cardsDetail.map((detail, index) => (
          <BaseCard
            key={index}
            title={detail.title}
            description={detail.description}
            color={detail.color}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default App
