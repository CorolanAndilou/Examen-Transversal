import Card from "../atoms/card";

const FeatureCards = () => {
  return (
    <div className="row">

      <div className="col-md-6">
        <Card title="Licitaciones">

          <p>
            Consulta licitaciones vigentes.
          </p>

        </Card>
      </div>

      <div className="col-md-6">
        <Card title="Proveedores">

          <p>
            Busca proveedores mediante RUT.
          </p>

        </Card>
      </div>

    </div>
  );
};

export default FeatureCards;