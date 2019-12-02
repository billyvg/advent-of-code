import { parser } from "./parser.js";

export default async function main(inputs) {
  const value = parser(inputs);
  return value;
}
