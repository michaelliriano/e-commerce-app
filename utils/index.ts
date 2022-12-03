export const displayPrice = (num = 0) => {
  let number: string | number = num.toString();
  // number = number.slice(0, number.length - 2);
  // number = Number(number);
  number =
    number.toString().slice(0, number.toString().length - 2) +
    "." +
    number.toString().slice(3);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(Number(number) || 0);
};

export const shorten = (str: string, length: number) =>
  !!str ? str.substring(0, length) : "";
