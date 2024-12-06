const API_URL = "http://localhost:3000/profiles";

/**
 * Obtiene todos los perfiles desde el servidor.
 * @returns {Promise<Array>} Una lista de perfiles.
 */
export const fetchProfiles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los perfiles");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Agrega un nuevo perfil al servidor.
 * @param {Object} profile Los datos del perfil a agregar.
 * @returns {Promise<Object>} El perfil agregado.
 */
export const addProfile = async (profile) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    if (!response.ok) throw new Error("Error al agregar el perfil");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
