"use client"
import Card from "../card/card";
import { Operator } from "@/data/cards";
import { StyledCardContainer, StyledCardList } from "./cardList.styles";

interface CardListProps {
  cards: Operator[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <StyledCardList>
      {cards?.map((item) => (
            <StyledCardContainer key={item._id}>
              <Card key={item._id} {...item} />
            </StyledCardContainer>
      ))}
    </StyledCardList>
  );
};
