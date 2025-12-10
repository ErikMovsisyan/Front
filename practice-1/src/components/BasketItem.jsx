export default function BasketItem({ item, increaseQuantity, eraseQuantity, removeFromBasket }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
      <td>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button onClick={() => eraseQuantity(item.id)}>-</button>
        <button onClick={() => removeFromBasket(item.id)}>x</button>
      </td>
    </tr>
  );
}
