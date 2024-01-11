import CardList from "@/components/cardList/cardList";
import { cards } from "@/data/cards";
import { Container } from "@/globals";

export default function Home()  {
  return (
    <Container>
      <h1>Оплата мобильной связи</h1>
      <CardList cards={cards}/>
    </Container> 
  )
}
