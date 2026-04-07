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

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <div className="header-brand">
          <span className="header-title">DESI HANDIWALAS</span>
          <span className="header-sub">Billing System</span>
        </div>
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
  );
}
