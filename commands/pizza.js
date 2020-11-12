module.exports = async (msg, args) => {
  const pizzaOrders = [
    `Gathering customer ( ${msg.author} ) details...`,
    `Pizza name:  ${args.join(" ")}`,
    "Gathering address information from IP...",
    "Placing order with Dominos...",
    `Confirmed order! Your order is - ${args.join(",")} `,
    `Total Bill = $${Math.random() * 10000000}`,
    "Relax!!!! It was a joke ( jk  -_- )",
  ];

  await msg.react("🍕");
  let c = 1;
  while (c <= pizzaOrders.length) {
    msg.reply(pizzaOrders[c - 1]);
    c++;
    await new Promise((r) => setTimeout(r, 2000)); // helps to pause execution
  }
};
