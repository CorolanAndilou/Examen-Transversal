import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageLayout from "../components/organisms/pageLayout";
import DetailSection from "../components/organisms/detailSection";

import {
  obtenerDetalleLicitacion
} from "../services/mercadoPublico";

const DetalleLicitacion = () => {

  const { id } = useParams();

  const [licitacion, setLicitacion] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const cargar = async () => {

      try {

        const data =
          await obtenerDetalleLicitacion(id);

        if (
          data.listado &&
          data.listado.length > 0
        ) {

          setLicitacion(
            data.listado[0]
          );

        }

      } catch {

        setError(
          "No fue posible cargar la licitación"
        );

      } finally {

        setLoading(false);

      }
    };

    cargar();

  }, [id]);

  return (
    <PageLayout>

      {loading && (
        <p>Cargando...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {licitacion && (
        <DetailSection
          licitacion={licitacion}
        />
      )}

    </PageLayout>
  );
};

export default DetalleLicitacion;