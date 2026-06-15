import "../../styles/atomics/card.css";

const Card = ({ title, children }) => {
  return (
    <div className="card shadow-sm app-card">
      <div className="card-body">
        <h5>{title}</h5>

        {children}
      </div>
    </div>
  );
};

export default Card;