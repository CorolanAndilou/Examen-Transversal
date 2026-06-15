import Loader from "../atoms/loader";

const LoadingSection = () => {
  return (
    <div className="text-center">
      <Loader />
      <p>Cargando información...</p>
    </div>
  );
};

export default LoadingSection;