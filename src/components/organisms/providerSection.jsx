import "../../styles/organisms/providerSection.css";
import RutSearch from "../molecules/rutSearch";
import ProviderInfo from "../molecules/providerInfo";

const ProviderSection = ({
  rut,
  setRut,
  onSearch,
  error,
  proveedor
}) => {
  return (
    <section className="provider-section">
      <RutSearch
        rut={rut}
        setRut={setRut}
        onSearch={onSearch}
        error={error}
      />

      {proveedor && (
        <ProviderInfo
          proveedor={proveedor}
        />
      )}
    </section>
  );
};

export default ProviderSection;