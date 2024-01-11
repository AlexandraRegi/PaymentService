import Image from "next/image";
import Link from "next/link";
import { getPath } from "@/utils/utils";
import { Operator } from "@/data/cards";
import { Logo, Info } from "./card.styles";

interface Props extends Operator {}

export default function Card(card: Props) {
  return (
    <>
      <Info>
        <h2>{card.title}</h2>
        <p>{card.info}</p>
        <Link href={getPath(card.name)}><button>Оплата {card.title}</button></Link> 
      </Info>
      <Logo>
        <Image src={card.logo2} alt="logo" />
      </Logo>
    </>
  );
};
