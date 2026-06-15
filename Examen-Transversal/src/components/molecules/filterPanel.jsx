import Label from "../atoms/label";
import Input from "../atoms/input";
import Select from "../atoms/select";
import Button from "../atoms/button";

const FilterPanel = ({ fecha, estado, setFecha, setEstado, onFilter }) => {
  
  const handleBuscar = () => {
    if (!fecha) {
      alert("Por favor, selecciona una fecha.");
      return;
    }
    onFilter(); // Llama a la función que hace la petición
  };

  return (
    <div className="card p-3 mb-4">
      <h3>Filtros de búsqueda</h3>
      <div className="row">
        <div className="col-md-4">
          <Label htmlFor="fecha" text="Fecha" />
          <Input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <Label htmlFor="estado" text="Estado" />
          <Select
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            options={[
              { value: "", label: "Todos" },
              { value: "publicada", label: "Publicada" },
              { value: "cerrada", label: "Cerrada" },
              { value: "adjudicada", label: "Adjudicada" },
              { value: "desierta", label: "Desierta" },
              { value: "revocada", label: "Revocada" }
            ]}
          />
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <Button
            text="Buscar"
            className="btn-primary"
            onClick={handleBuscar}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;