export function CreateRandomNumber (max :number) {
  return Math.floor(Math.random() * max);
}
export function CreateNoZeroNumber (max :number) {
  return Math.ceil(Math.random() * max);
}