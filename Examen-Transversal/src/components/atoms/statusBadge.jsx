const StatusBadge = ({ status }) => {
  const getClass = () => {
    switch (status) {
      case "Publicada":
        return "bg-success";

      case "Cerrada":
        return "bg-danger";

      case "Adjudicada":
        return "bg-primary";

      default:
        return "bg-secondary";
    }
  };

  return (
    <span className={`badge ${getClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;