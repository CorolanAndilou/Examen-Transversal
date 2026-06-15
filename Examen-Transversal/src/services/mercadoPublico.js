const TICKET = "AC3A098B-4CD0-41AF-81A5-41284248419B";


export const MAPPING_ESTADOS = {
  5: "Publicada",
  6: "Cerrada",
  7: "Desierta",
  8: "Adjudicada",
  15: "En evaluación",
  18: "Revocada"
};

export const obtenerLicitaciones = async (fecha, estado) => {
  let url = `https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?fecha=${fecha}&ticket=${TICKET}`;
  
  if (estado && estado !== "") {
    url += `&estado=${estado}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  const listadoTransformado = data.Listado?.map((item) => ({
    codigo: item.CodigoExterno,
    nombre: item.Nombre,
    estado: MAPPING_ESTADOS[item.CodigoEstado] || item.CodigoEstado,
    fechaCierre: item.FechaCierre
  })) || [];

  return { listado: listadoTransformado };
};

export const buscarProveedor = async (rut) => {
  const rutFormateado = String(rut || "").replace(/\D/g, "");
  if (!rutFormateado) {
    throw new Error("RUT inválido");
  }

  const url = `https://api.mercadopublico.cl/servicios/v1/publico/proveedores.json?rut=${rutFormateado}&ticket=${TICKET}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Servicio de proveedores no disponible (404). Verifica el endpoint.");
    }
    throw new Error(`Error al consultar proveedor (${response.status})`);
  }

  const data = await response.json();
  const proveedorRaw = Array.isArray(data.Listado)
    ? data.Listado[0]
    : data.Listado;

  if (!proveedorRaw) {
    throw new Error("Proveedor no encontrado");
  }

  return {
    rut: proveedorRaw.Rut || proveedorRaw.RUT || rutFormateado,
    nombre: proveedorRaw.RazonSocial || proveedorRaw.Nombre || proveedorRaw.Razon_social || "Nombre no disponible",
    estado: proveedorRaw.Estado || proveedorRaw.EstadoProveedor || "Desconocido"
  };
};