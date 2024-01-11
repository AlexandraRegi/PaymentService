import {OperatorName} from "@/constants"

export const getPath = (name: OperatorName) => {
  return `/payment/${name}`;
};
