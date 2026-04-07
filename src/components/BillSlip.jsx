import { menuItems } from "../data/menuItems";

const RESTAURANT_NAME = "My Restaurant";
const RESTAURANT_ADDRESS = "123, Main Street, Your City";
const RESTAURANT_PHONE = "+91 98765 43210";
const GSTIN = "27AAAAA0000A1Z5"; // replace with actual GSTIN

function pad(str, width) {
  return String(str).padEnd(width);
}

export default function BillSlip({ cart, gstEnabled, gstRate, billNo }) {
  const cartItems = menuItems.filter((item) => (cart[item.id] || 0) > 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  );
  const gstAmount = gstEnabled ? Math.round(subtotal * gstRate) / 100 : 0;
  const total = subtotal + gstAmount;

  const now = new Date();
  const date = now.toLocaleDateString("en-IN");
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bill-slip">
      <div className="slip-header">
        <div className="slip-restaurant">{RESTAURANT_NAME}</div>
        <div className="slip-address">{RESTAURANT_ADDRESS}</div>
        <div className="slip-contact">
          Ph: {RESTAURANT_PHONE}
          {gstEnabled && <span> | GSTIN: {GSTIN}</span>}
        </div>
      </div>

      <div className="slip-divider" />

      <div className="slip-meta">
        <span>Bill No: #{String(billNo).padStart(4, "0")}</span>
        <span>
          {date} &nbsp; {time}
        </span>
      </div>

      <div className="slip-divider" />

      <table className="slip-table">
        <thead>
          <tr>
            <th className="col-name">Item</th>
            <th className="col-qty">Qty</th>
            <th className="col-rate">Rate</th>
            <th className="col-amt">Amt</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="col-name">{item.name}</td>
              <td className="col-qty">{cart[item.id]}</td>
              <td className="col-rate">₹{item.price}</td>
              <td className="col-amt">₹{item.price * cart[item.id]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="slip-divider" />

      <div className="slip-totals">
        <div className="slip-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        {gstEnabled && (
          <div className="slip-row">
            <span>GST @{gstRate}%</span>
            <span>₹{gstAmount}</span>
          </div>
        )}
        <div className="slip-divider double" />
        <div className="slip-row total-row">
          <span>TOTAL</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="slip-divider" />
      <div className="slip-footer">Thank you! Visit Again</div>
    </div>
  );
}
