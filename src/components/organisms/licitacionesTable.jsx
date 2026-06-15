import LicitacionRow from "../molecules/licitacionRow";

const LicitacionesTable = ({
  licitaciones,
  onViewDetail
}) => {

  console.log("Tabla:", licitaciones);

  if (
    !licitaciones ||
    licitaciones.length === 0
  ) {
    return (
      <p>
        No existen licitaciones
      </p>
    );
  }

  return (

    <table className="table">

      <thead>

        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>

      </thead>

      <tbody>

        {licitaciones.map(
          (licitacion) => (

            <LicitacionRow
              key={licitacion.codigo}
              licitacion={licitacion}
              onViewDetail={onViewDetail}
            />

          )
        )}

      </tbody>

    </table>
  );
};

export default LicitacionesTable;