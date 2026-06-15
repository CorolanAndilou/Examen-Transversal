import "../../styles/molecules/rutSearch.css";
import FormField from "./formField";
import Button from "../atoms/button";

const RutSearch = ({
  rut,
  setRut,
  onSearch,
  error
}) => {
  return (
    <section className="rut-search">
      <FormField
        label="RUT Proveedor"
        id="rut"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        placeholder="12.345.678-9"
        error={error}
      />

      <div className="rut-search-actions">
        <Button
          text="Buscar Proveedor"
          onClick={onSearch}
        />
      </div>
    </section>
  );
};

export default RutSearch;