import StatusBadge from "../atoms/statusBadge";
import Button from "../atoms/button";

const LicitacionRow = ({
  licitacion,
  onViewDetail
}) => {

  return (
    <tr>

      <td>
        {licitacion.codigo}
      </td>

      <td>
        {licitacion.nombre}
      </td>

      <td>
        <StatusBadge
          status={licitacion.estado}
        />
      </td>

      <td>
        <Button
          text="Ver"
          onClick={() =>
            onViewDetail(
              licitacion.codigo
            )
          }
        />
      </td>

    </tr>
  );
};

export default LicitacionRow;