import FilterPanel from "../molecules/filterPanel";
import LicitacionesTable from "./licitacionesTable";
import Pagination from "../atoms/pagination";

const LicitacionesSection = ({
  fecha,
  estado,
  setFecha,
  setEstado,
  onFilter,
  licitaciones,
  onViewDetail,
  currentPage,
  totalPages,
  onPageChange
}) => {

  console.log(
  "onFilter recibido:",
  onFilter
);

  return (
    <>
      <FilterPanel
        fecha={fecha}
        estado={estado}
        setFecha={setFecha}
        setEstado={setEstado}
        onFilter={onFilter}
      />

      <LicitacionesTable
        licitaciones={licitaciones}
        onViewDetail={onViewDetail}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default LicitacionesSection;