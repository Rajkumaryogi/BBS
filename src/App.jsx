import { useState } from "react";
import MenuPanel from "./components/MenuPanel";
import BillPanel from "./components/BillPanel";

export default function App() {
  const [cart, setCart] = useState({});       // { itemId: qty }
  const [gstEnabled, setGstEnabled] = useState(false);
  const [gstRate, setGstRate] = useState(5);  // 5 or 18
  const [billNo, setBillNo] = useState(1);

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
  }

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <h1>Restaurant Billing System</h1>
      </header>
      <div className="app-body">
        <MenuPanel cart={cart} updateQty={updateQty} onClear={clearCart} />
        <BillPanel
          cart={cart}
          gstEnabled={gstEnabled}
          setGstEnabled={setGstEnabled}
          gstRate={gstRate}
          setGstRate={setGstRate}
          billNo={billNo}
          onNewBill={onNewBill}
        />
      </div>
    </div>
  );
}
