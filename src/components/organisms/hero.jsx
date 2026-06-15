import Button from "../atoms/button";

const Hero = () => {
  return (
    <section className="text-center py-5">

      <h1>
        LicitaSeguro
      </h1>

      <p className="lead">
        Consulta licitaciones públicas y proveedores de forma rápida.
      </p>

      <Button
        text="Explorar Licitaciones"
      />

    </section>
  );
};

export default Hero;