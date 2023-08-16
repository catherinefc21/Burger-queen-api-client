const menuRequest = async () => {
  try {
    // Obtener el token del localStorage
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      throw new Error("Token no encontrado en localStorage");
    }

    const response = await fetch("http://localhost:8080/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error en la conexión");
  }
};

export default menuRequest;
