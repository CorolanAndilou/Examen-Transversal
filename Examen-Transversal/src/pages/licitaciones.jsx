import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/organisms/pageLayout";
import LicitacionesSection from "../components/organisms/licitacionesSection";
import LoadingSection from "../components/molecules/loadingSection";
import { obtenerLicitaciones } from "../services/mercadoPublico";

const Licitaciones = () => {
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const navigate = useNavigate();

  const formatearFechaParaApi = (fechaInput) => {
    if (!fechaInput) return "";
    const [año, mes, dia] = fechaInput.split("-");
    return `${dia}${mes}${año}`;
  };

  const filtrarLicitaciones = async () => {
    if (!fecha) {
      setError("Selecciona una fecha.");
      return;
    }

    setCurrentPage(1);
    setTotalPages(0);

    try {
      setLoading(true);
      setError("");
      const fechaFormateada = formatearFechaParaApi(fecha);
      const data = await obtenerLicitaciones(fechaFormateada, estado);
      const listado = data.listado || [];

      if (listado.length === 0) {
        setError("No existen licitaciones para los criterios seleccionados.");
      }

      setLicitaciones(listado);
      setTotalPages(Math.ceil(listado.length / pageSize));

    } catch (error) {
      console.error(error);
      setError("Error al cargar licitaciones");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1) return;
    if (totalPages === 0) return;
    if (page > totalPages) return;
    setCurrentPage(page);
  };

  const pagedLicitaciones = licitaciones.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <PageLayout>
      <h1>Licitaciones</h1>
      {loading && <LoadingSection />}
      {error && <p>{error}</p>}
      <LicitacionesSection
        fecha={fecha}
        estado={estado}
        setFecha={setFecha}
        setEstado={setEstado}
        onFilter={filtrarLicitaciones}
        licitaciones={pagedLicitaciones}
        onViewDetail={(codigo) => navigate(`/licitacion/${codigo}`)}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageLayout>
  );
};

export default Licitaciones;