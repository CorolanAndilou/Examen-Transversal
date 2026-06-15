import DetailInfo from "../molecules/detailInfo";

const DetailSection = ({
  licitacion
}) => {
  return (
    <div className="container">

      <DetailInfo
        licitacion={licitacion}
      />

    </div>
  );
};

export default DetailSection;