import Card from "../atoms/card";
import StatusBadge from "../atoms/statusBadge";

const DetailInfo = ({
  licitacion
}) => {
  return (
    <Card title={licitacion.nombre}>

      <p>
        <strong>Código:</strong>
        {" "}
        {licitacion.codigo}
      </p>

      <p>
        <strong>Estado:</strong>
        {" "}
        <StatusBadge
          status={licitacion.estado}
        />
      </p>

      <p>
        <strong>Descripción:</strong>
        {" "}
        {licitacion.descripcion}
      </p>

    </Card>
  );
};

export default DetailInfo;