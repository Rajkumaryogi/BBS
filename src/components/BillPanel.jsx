import { menuItems } from "../data/menuItems";
import BillSlip from "./BillSlip";

export default function BillPanel({
  cart,
  gstEnabled, setGstEnabled,
  gstRate, setGstRate,
  billNo,
  tableNo, setTableNo,
  coverCount, setCoverCount,
  waiterNo, setWaiterNo,
  onNewBill,
}) {
  const cartItems = menuItems.filter((item) => (cart[item.id] || 0) > 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id], 0
  );
  const gstAmount = gstEnabled ? Math.round(subtotal * gstRate) / 100 : 0;
  const total = subtotal + gstAmount;

  return (
    <div className="bill-panel">
      {/* ── Screen view ── */}
      <div className="no-print">
        <div className="panel-header">
          <h2>Bill Summary</h2>
          <span className="bill-number">
            No.{String(billNo).padStart(6, "0")}
          </span>
        </div>

        {/* TBL / CVR / WTR */}
        <div className="table-meta">
          <label>
            TBL
            <input
              type="text"
              value={tableNo}
              maxLength={4}
              onChange={(e) => setTableNo(e.target.value)}
            />
          </label>
          <label>
            CVR
            <input
              type="text"
              value={coverCount}
              maxLength={4}
              onChange={(e) => setCoverCount(e.target.value)}
            />
          </label>
          <label>
            WTR
            <input
              type="text"
              value={waiterNo}
              maxLength={4}
              onChange={(e) => setWaiterNo(e.target.value)}
            />
          </label>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">No items selected yet.</p>
        ) : (
          <table className="summary-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
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
            <span>SUB_TOT</span>
            <span>₹{subtotal}</span>
          </div>

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
                  <input type="radio" name="gstRate" value={5}
                    checked={gstRate === 5} onChange={() => setGstRate(5)} />
                  5%
                </label>
                <label>
                  <input type="radio" name="gstRate" value={18}
                    checked={gstRate === 18} onChange={() => setGstRate(18)} />
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
            <span>CASH</span>
            <span>₹{total}</span>
          </div>
        </div>

        <div className="bill-actions">
          <button
            className="btn-print"
            disabled={cartItems.length === 0}
            onClick={() => window.print()}
          >
            Print Bill
          </button>
          <button className="btn-new" onClick={onNewBill}>
            New Bill
          </button>
        </div>
      </div>

      {/* ── Print-only slip ── */}
      <BillSlip
        cart={cart}
        gstEnabled={gstEnabled}
        gstRate={gstRate}
        billNo={billNo}
        tableNo={tableNo}
        coverCount={coverCount}
        waiterNo={waiterNo}
      />
    </div>
  );
}
