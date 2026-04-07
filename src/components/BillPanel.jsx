import { menuItems } from "../data/menuItems";
import BillSlip from "./BillSlip";

export default function BillPanel({
  cart,
  gstEnabled,
  setGstEnabled,
  gstRate,
  setGstRate,
  billNo,
  onNewBill,
}) {
  const cartItems = menuItems.filter((item) => (cart[item.id] || 0) > 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  );
  const gstAmount = gstEnabled ? Math.round(subtotal * gstRate) / 100 : 0;
  const total = subtotal + gstAmount;

  function handlePrint() {
    window.print();
  }

  return (
    <div className="bill-panel">
      {/* Screen view — hidden during print */}
      <div className="no-print">
        <div className="panel-header">
          <h2>Bill Summary</h2>
          <span className="bill-number">
            Bill #{String(billNo).padStart(4, "0")}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">No items selected yet.</p>
        ) : (
          <table className="summary-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amt</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{cart[item.id]}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * cart[item.id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="bill-totals">
          <div className="total-row subtotal">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {/* GST Toggle */}
          <div className="gst-section">
            <label className="gst-checkbox">
              <input
                type="checkbox"
                checked={gstEnabled}
                onChange={(e) => setGstEnabled(e.target.checked)}
              />
              <span>Add GST</span>
            </label>
            {gstEnabled && (
              <div className="gst-rate-options">
                <label>
                  <input
                    type="radio"
                    name="gstRate"
                    value={5}
                    checked={gstRate === 5}
                    onChange={() => setGstRate(5)}
                  />
                  5%
                </label>
                <label>
                  <input
                    type="radio"
                    name="gstRate"
                    value={18}
                    checked={gstRate === 18}
                    onChange={() => setGstRate(18)}
                  />
                  18%
                </label>
              </div>
            )}
            {gstEnabled && (
              <div className="total-row gst-row">
                <span>GST @{gstRate}%</span>
                <span>₹{gstAmount}</span>
              </div>
            )}
          </div>

          <div className="divider" />
          <div className="total-row grand-total">
            <span>TOTAL</span>
            <span>₹{total}</span>
          </div>
        </div>

        <div className="bill-actions">
          <button
            className="btn-print"
            disabled={cartItems.length === 0}
            onClick={handlePrint}
          >
            Print Bill
          </button>
          <button className="btn-new" onClick={onNewBill}>
            New Bill
          </button>
        </div>
      </div>

      {/* Print-only bill slip */}
      <BillSlip
        cart={cart}
        gstEnabled={gstEnabled}
        gstRate={gstRate}
        billNo={billNo}
      />
    </div>
  );
}
