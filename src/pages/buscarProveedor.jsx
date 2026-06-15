import { useState } from "react";

import PageLayout from "../components/organisms/pageLayout";
import ProviderSection from "../components/organisms/providerSection";
import { buscarProveedor } from "../services/mercadoPublico";

const BuscarProveedor = () => {

  const [rut, setRut] = useState("");

  const [error, setError] = useState("");

  const [proveedor, setProveedor] =
    useState(null);

  const buscarProveedorPorRut =
    async () => {

      if (!rut) {
        setError("Ingresa un RUT válido.");
        setProveedor(null);
        return;
      }

      setError("");

      try {

        const data =
          await buscarProveedor(
            rut
          );

        setProveedor(data);

      } catch (error) {

        setProveedor(null);
        setError(
          error?.message || "Proveedor no encontrado"
        );

      }

    };

  return (
    <PageLayout>

      <h1>
        Buscar Proveedor
      </h1>

      <ProviderSection
        rut={rut}
        setRut={setRut}
        error={error}
        proveedor={proveedor}
        onSearch={
          buscarProveedorPorRut
        }
      />

    </PageLayout>
  );
};

export default BuscarProveedor;