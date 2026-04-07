import { menuItems } from "../data/menuItems";

const fmt = (n) => Number(n).toFixed(2);

export default function BillSlip({
  cart, gstEnabled, gstRate, billNo,
  tableNo, coverCount, waiterNo,
}) {
  const cartItems = menuItems.filter((item) => (cart[item.id] || 0) > 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id], 0
  );
  const gstAmount = gstEnabled ? Math.round(subtotal * gstRate) / 100 : 0;
  const total = subtotal + gstAmount;

  const now = new Date();
  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit", month: "2-digit", year: "numeric",
  }).replace(/\//g, "-");
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });

  return (
    <div className="bill-slip">
      {/* Header */}
      <div className="slip-header">
        <div className="slip-restaurant">DESI HANDIWALAS</div>
        <div className="slip-contact">MOB.8209545845</div>
        <div className="slip-contact">MOB.9828444022</div>
        <div className="slip-cashbill">CASH/BILL</div>
        {gstEnabled && (
          <div className="slip-contact" style={{ fontSize: "10px" }}>
            GSTIN: 27AAAAA0000A1Z5
          </div>
        )}
      </div>

      {/* TBL / CVR / WTR */}
      <div className="slip-meta-row">
        <span>TBL {String(tableNo).padStart(4, "0")}</span>
        <span>CVR {String(coverCount).padStart(2, "0")}</span>
        <span>WTR {String(waiterNo).padStart(2, "0")}</span>
      </div>
      <div className="slip-meta-row">
        <span>NO.{String(billNo).padStart(6, "0")}</span>
        <span>{date}</span>
      </div>

      <div className="slip-dots">{"." .repeat(40)}</div>
      <div className="slip-duptext">DUPLICATE COPY</div>
      <div className="slip-dots">{"." .repeat(40)}</div>

      {/* Column headers */}
      <div className="slip-col-header">
        <span className="sc-desc">DESCRIPTION</span>
        <span className="sc-qty">QTY</span>
        <span className="sc-rate">RATE</span>
        <span className="sc-amt">AMOUNT</span>
      </div>

      <div className="slip-dots">{"." .repeat(40)}</div>

      {/* Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="slip-item-row">
          <span className="sc-desc">{item.name.toUpperCase()}</span>
          <span className="sc-qty">{fmt(cart[item.id])}</span>
          <span className="sc-rate">{fmt(item.price)}</span>
          <span className="sc-amt">{fmt(item.price * cart[item.id])}</span>
        </div>
      ))}

      {/* Subtotal */}
      <div className="slip-item-row subtot-row">
        <span className="sc-desc">SUB_TOT</span>
        <span className="sc-qty"></span>
        <span className="sc-rate"></span>
        <span className="sc-amt">{fmt(subtotal)}</span>
      </div>

      {gstEnabled && (
        <div className="slip-item-row">
          <span className="sc-desc">GST @{gstRate}%</span>
          <span className="sc-qty"></span>
          <span className="sc-rate"></span>
          <span className="sc-amt">{fmt(gstAmount)}</span>
        </div>
      )}

      <div className="slip-dots">{"." .repeat(40)}</div>

      {/* Cash total */}
      <div className="slip-cash-row">
        <span>CASH</span>
        <span>{fmt(total)}</span>
      </div>

      <div className="slip-dots">{"." .repeat(40)}</div>

      {/* Footer */}
      <div className="slip-footer-row">
        <span>C 6</span>
        <span>{time}</span>
        <span>M/C NO</span>
        <span>1</span>
      </div>
    </div>
  );
}
