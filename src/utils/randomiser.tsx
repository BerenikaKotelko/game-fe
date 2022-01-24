export default function Randomiser(): string {
  const number = Math.floor(Math.random() * 2);
  console.log(number);
  if (number === 0) {
    return "result/victory";
  } else {
    return "result/death";
  }
}
