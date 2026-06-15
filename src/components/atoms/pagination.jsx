const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="d-flex gap-2 justify-content-center">
      <button
        className="btn btn-outline-primary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        className="btn btn-outline-primary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;