import { cards } from "@/data/cards";

class Api {
  
    getOperator = (name :string) => cards.find((item) => item.name === name);
    
    sendPayment(data: {tel: string; sum: string;}): Promise<boolean> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.random() < 0.5;
          if (!result) {
            reject(new Error('Error'))
          }
          resolve(result);
        }, 2000);
      });
    }
};
  
export const api = new Api();
