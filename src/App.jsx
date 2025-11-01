import "./App.css";
import { useState } from "react";

function FormConversor({ monedaOrigen, setMonedaOrigen, cantidad, setCantidad, setNumConvertido }) {
  const conversorDeEuro = {
    euro: 1.0,
    dolar: 1.16,
    yuan: 8.22,
    yen: 178.0,
  };
  const conversorDeDolar = {
    euro: 0.86,
    dolar: 1.0,
    yuan: 7.1,
    yen: 154.0,
  };
  const conversorDeYuan = {
    euro: 0.12,
    dolar: 0.14,
    yuan: 1.0,
    yen: 21.7,
  };
  const conversorDeYen = {
    euro: 0.0056,
    dolar: 0.0065,
    yuan: 0.046,
    yen: 1.0,
  };

  function convertir(origen, cantidad) {
    let resultEU = 0;
    let resultDO = 0;
    let resultYU = 0;
    let resultYE = 0;
    cantidad = parseFloat(cantidad) || 0;

    switch (origen) {
      case "euro":
        resultEU = cantidad * conversorDeEuro["euro"];
        resultDO = cantidad * conversorDeEuro["dolar"];
        resultYU = cantidad * conversorDeEuro["yuan"];
        resultYE = cantidad * conversorDeEuro["yen"];
        break;
      case "dolar":
        resultEU = cantidad * conversorDeDolar["euro"];
        resultDO = cantidad * conversorDeDolar["dolar"];
        resultYU = cantidad * conversorDeDolar["yuan"];
        resultYE = cantidad * conversorDeDolar["yen"];
        break;
      case "yuan":
        resultEU = cantidad * conversorDeYuan["euro"];
        resultDO = cantidad * conversorDeYuan["dolar"];
        resultYU = cantidad * conversorDeYuan["yuan"];
        resultYE = cantidad * conversorDeYuan["yen"];
        break;
      case "yen":
        resultEU = cantidad * conversorDeYen["euro"];
        resultDO = cantidad * conversorDeYen["dolar"];
        resultYU = cantidad * conversorDeYen["yuan"];
        resultYE = cantidad * conversorDeYen["yen"];
        break;
    }

    setNumConvertido([resultEU, resultDO, resultYU, resultYE]);
  }

  return (
    <form id="conversor">
      <label htmlFor="result">Origen: </label>
      <select
        id="result"
        value={monedaOrigen}
        onChange={(e) => {
          setMonedaOrigen(e.target.value);
          convertir(e.target.value, cantidad);
        }}
      >
        <option value="dolar">Dolar</option>
        <option value="euro">Euro</option>
        <option value="yuan">Yuan</option>
        <option value="yen">Yen</option>
      </select>

      <br />
      <br />

      <label htmlFor="origenNum">Cantidad: </label>
      <input
        type="number"
        id="origenNum"
        min="1"
        value={cantidad}
        onChange={(e) => {
          setCantidad(e.target.value);
          convertir(monedaOrigen, e.target.value);
        }}
      />
      <br />
      <br />
    </form>
  );
}

function App() {
  const [numConvertido, setNumConvertido] = useState([]);
  const [monedaOrigen, setMonedaOrigen] = useState("dolar");
  const [cantidad, setCantidad] = useState("");

  return (
    <div>
      <h1>Conversor de monedas</h1>
      <FormConversor
        monedaOrigen={monedaOrigen}
        setMonedaOrigen={setMonedaOrigen}
        cantidad={cantidad}
        setCantidad={setCantidad}
        setNumConvertido={setNumConvertido}
      />
      <br />
      {numConvertido.length > 0 && (
        <>
          <p>Conversion Euro: {numConvertido[0]}</p>
          <p>Conversion Dolar: {numConvertido[1]}</p>
          <p>Conversion Yuan: {numConvertido[2]}</p>
          <p>Conversion Yen: {numConvertido[3]}</p>
        </>
      )}
    </div>
  );
}

export default App;
