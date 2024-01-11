import { StaticImageData } from "next/image";
import {mts, tele2, megafon, beeline, yota, sbermobile, OperatorName} from "@/constants";
import MtsLogo from '@/assets/mts.png';
import MtsLogo2 from '@/assets/mts3.png';
import Tele2Logo from '@/assets/tele2.png';
import Tele2Logo2 from '@/assets/tele2-3.png';
import MegafonLogo from '@/assets/megafon.png';
import MegafonLogo2 from '@/assets/megafon3.png';
import BeelineLogo from '@/assets/beeline.png';
import BeelineLogo2 from '@/assets/beeline3.png';
import YotaLogo from '@/assets/yota.png';
import YotaLogo2 from '@/assets/yota3.png';
import SbermobileLogo from '@/assets/sbermobile.png';
import SbermobileLogo2 from '@/assets/sbermobile2.png';


export interface Operator {
  _id: number;
  logo: StaticImageData;
  logo2: StaticImageData;
  title: string;
  name: OperatorName;
  info: string;
}

export const cards: Operator[] = [
    {
      _id: 1,
      logo: MtsLogo,
      logo2: MtsLogo2,
      title: "МТС",
      name: mts,
      info: "Пополнение баланса мобильного телефона для абонентов МТС. Деньги зачисляются мгновенно.",
    },
    {
      _id: 2,
      logo: Tele2Logo,
      logo2: Tele2Logo2,
      title: "Tele2",
      name: tele2,
      info: "Прямое пополнение мобильных телефонов Теле2 (Россия).",
    },
    {
      _id: 3,
      logo: MegafonLogo,
      logo2: MegafonLogo2,
      title: "МегаФон",
      name: megafon,
      info: "Прямое пополнение мобильных телефонов МегаФон.",
    },
    {
      _id: 4,
      logo: BeelineLogo,
      logo2: BeelineLogo2,
      title: "Билайн",
      name: beeline,
      info: "Прямое пополнение мобильных телефонов билайн (Россия).",
    },
    {
      _id: 5,
      logo: YotaLogo,
      logo2: YotaLogo2,
      title: "Yota",
      name: yota,
      info: "Оплата услуг сотовой связи.",
    },
    {
      _id: 6,
      logo: SbermobileLogo,
      logo2: SbermobileLogo2,
      title: "СберМобайл",
      name: sbermobile,
      info: "Оплата услуг сотовой связи.",
    },
  ];
