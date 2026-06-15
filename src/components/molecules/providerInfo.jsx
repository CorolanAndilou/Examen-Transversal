import "../../styles/molecules/providerInfo.css";
import Card from "../atoms/card";

const ProviderInfo = ({ proveedor }) => {
  return (
    <div className="provider-info-card">
      <Card title="Proveedor">

        <p>
          <strong>RUT:</strong>
          {" "}
          {proveedor.rut}
        </p>

        <p>
          <strong>Nombre:</strong>
          {" "}
          {proveedor.nombre}
        </p>

        <p>
          <strong>Estado:</strong>
          {" "}
          {proveedor.estado}
        </p>

      </Card>
    </div>
  );
};

export default ProviderInfo;