import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import BaseCard from "../components/BaseCard"
import iconSedans from '../images/icon-sedans.svg'
import iconSuvs from '../images/icon-suvs.svg'
import iconLuxury from '../images/icon-luxury.svg'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`

const App = () => {
  const theme = useTheme()
  const AppContainer = styled.div`
    margin: 0;
    padding: 50px 25px;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    background-color: ${theme.colors.neutral.veryLightGray};
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const cardsDetail = [
    {
      icon: iconSedans,
      title: 'Sedans',
      description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: theme.colors.primary.orange
    },
    {
      icon: iconSuvs,
      title: 'SUVs',
      description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: theme.colors.primary.darkCyan
    },
    {
      icon: iconLuxury,
      title: 'Luxury',
      description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: theme.colors.primary.veryDarkCyan
    },
  ]

  return (
    <AppContainer>
      <CardsContainer>
        {cardsDetail.map((detail, index) => (
          <BaseCard
            key={index}
            icon={detail.icon}
            title={detail.title}
            description={detail.description}
            color={detail.color}
          />
        ))}
      </CardsContainer>
    </AppContainer>
  )
}

export default App
