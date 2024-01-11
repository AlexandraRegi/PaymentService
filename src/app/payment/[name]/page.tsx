import { mobileOperators } from "@/constants";
import PaymentForm from "../../../components/paymentForm/paymentForm";
import { api } from "@/utils/api";

export async function generateStaticParams() {
  return mobileOperators.map((el) => ({
    name: el,
  }));
}

export default function PaymentPage({ 
  params: { name } 
}: { 
  params: { name: string } 
}) {
  let mobileOperator = api.getOperator(name);

  return (<PaymentForm mobileOperator={mobileOperator} />)
}
