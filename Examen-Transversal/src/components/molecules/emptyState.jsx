const EmptyState = ({
  message = "No existen resultados"
}) => {
  return (
    <div className="alert alert-warning text-center">
      {message}
    </div>
  );
};

export default EmptyState;