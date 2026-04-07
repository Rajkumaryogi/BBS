import { menuItems, categories } from "../data/menuItems";

export default function MenuPanel({ cart, updateQty, onClear, onViewBill, cartCount }) {
  return (
    <div className="menu-panel no-print">
      <div className="panel-header">
        <h2>Menu Items</h2>
        <div className="panel-header-actions">
          {cartCount > 0 && (
            <button className="btn-clear" onClick={onClear}>Clear All</button>
          )}
        </div>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="menu-category">
          <h3 className="category-title">{cat}</h3>
          {menuItems.filter((item) => item.category === cat).map((item) => {
            const qty = cart[item.id] || 0;
            return (
              <div key={item.id} className={"menu-item" + (qty > 0 ? " selected" : "")}>
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price}</span>
                </div>
                <div className="qty-control">
                  {qty > 0 ? (
                    <>
                      <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                      <span className="qty-value">{qty}</span>
                      <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                    </>
                  ) : (
                    <button className="btn-add" onClick={() => updateQty(item.id, 1)}>Add</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {cartCount > 0 && (
        <div className="mobile-view-bill no-print">
          <button className="btn-view-bill" onClick={onViewBill}>
            View Bill · {cartCount} item{cartCount > 1 ? "s" : ""}
          </button>
        </div>
      )}
    </div>
  );
}
