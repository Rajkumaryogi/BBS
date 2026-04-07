import { useState } from "react";
import MenuPanel from "./components/MenuPanel";
import BillPanel from "./components/BillPanel";

export default function App() {
  const [cart, setCart] = useState({});
  const [gstEnabled, setGstEnabled] = useState(false);
  const [gstRate, setGstRate] = useState(5);
  const [billNo, setBillNo] = useState(1);
  const [tableNo, setTableNo] = useState("0000");
  const [coverCount, setCoverCount] = useState("01");
  const [waiterNo, setWaiterNo] = useState("00");
  const [activeTab, setActiveTab] = useState("menu"); // "menu" | "bill"

  function updateQty(id, delta) {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  }

  function clearCart() {
    setCart({});
    setGstEnabled(false);
    setGstRate(5);
  }

  function onNewBill() {
    clearCart();
    setBillNo((n) => n + 1);
    setTableNo("0000");
    setCoverCount("01");
    setWaiterNo("00");
  }

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = { price: 0 }; // computed in panels; we just need the count here
    return sum + qty;
  }, 0);

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <div className="header-brand">
          <span className="header-title">DESI HANDIWALAS</span>
          <span className="header-sub">Billing System</span>
        </div>
      </header>

      <div className="app-body">
        {/* Menu panel — hidden on mobile when bill tab is active */}
        <div className={`panel-wrapper menu-wrapper${activeTab === "menu" ? " tab-active" : ""}`}>
          <MenuPanel
            cart={cart}
            updateQty={updateQty}
            onClear={clearCart}
            onViewBill={() => setActiveTab("bill")}
            cartCount={cartCount}
          />
        </div>

        {/* Bill panel — hidden on mobile when menu tab is active */}
        <div className={`panel-wrapper bill-wrapper${activeTab === "bill" ? " tab-active" : ""}`}>
          <BillPanel
            cart={cart}
            gstEnabled={gstEnabled}
            setGstEnabled={setGstEnabled}
            gstRate={gstRate}
            setGstRate={setGstRate}
            billNo={billNo}
            tableNo={tableNo}
            setTableNo={setTableNo}
            coverCount={coverCount}
            setCoverCount={setCoverCount}
            waiterNo={waiterNo}
            setWaiterNo={setWaiterNo}
            onNewBill={onNewBill}
          />
        </div>
      </div>

      {/* Mobile bottom tab bar */}
      <nav className="mobile-tabs no-print">
        <button
          className={`tab-btn${activeTab === "menu" ? " active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <span className="tab-icon">🍽</span>
          <span>Menu</span>
        </button>
        <button
          className={`tab-btn${activeTab === "bill" ? " active" : ""}`}
          onClick={() => setActiveTab("bill")}
        >
          <span className="tab-icon">🧾</span>
          <span>Bill</span>
          {cartCount > 0 && <span className="tab-badge">{cartCount}</span>}
        </button>
      </nav>
    </div>
  );
}
