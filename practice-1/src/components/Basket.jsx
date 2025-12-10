import BasketItem from "./basketItem";

export default function Basket({ basket, increaseQuantity, eraseQuantity, removeFromBasket }) {
  return (
    <div>
      <h3>Basket</h3>

      {basket.length === 0 ? (
        <p>empty basket</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>product</th>
              <th>price</th>
              <th>quantity</th>
              <th>subtotal</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {basket.map(item => (
              <BasketItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                eraseQuantity={eraseQuantity}
                removeFromBasket={removeFromBasket}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
