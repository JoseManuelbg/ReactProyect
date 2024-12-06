import React, { useEffect, useState } from "react";
import { fetchProfiles, addProfile } from "./profileService";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]); // Lista de perfiles cargados
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    bio: "",
    imageUrl: "",
    skills: "",
  }); // Datos del formulario

  // Cargar perfiles al montar el componente
  useEffect(() => {
    const loadProfiles = async () => {
      const data = await fetchProfiles();
      setProfiles(data);
    };
    loadProfiles();
  }, []);

  // Manejar cambios en el término de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Manejar cambios en el formulario
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Agregar un nuevo perfil
  const handleAddProfile = async (event) => {
    event.preventDefault();
    const profileToAdd = {
      ...newProfile,
      skills: newProfile.skills.split(",").map((skill) => skill.trim()),
    };
    const addedProfile = await addProfile(profileToAdd);
    if (addedProfile) {
      setProfiles((prev) => [...prev, addedProfile]);
      setNewProfile({ name: "", email: "", bio: "", imageUrl: "", skills: "" });
    }
  };

  // Filtrar perfiles por nombre o habilidad
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm) ||
      profile.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
  );

  return (
    <div id="root">
      <nav>
        <h1>Gestión de Perfiles</h1>
      </nav>

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre o habilidad..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "80%" }}
      />

      {/* Lista de perfiles */}
      <div className="profile-list">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.imageUrl} alt={profile.name} width="100" />
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <p>{profile.bio}</p>
            <p><strong>Habilidades:</strong> {profile.skills.join(", ")}</p>
          </div>
        ))}
      </div>

      {/* Formulario para añadir perfiles */}
      <form onSubmit={handleAddProfile} className="card">
        <h2>Añadir Nuevo Perfil</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newProfile.name}
          onChange={handleFormChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={handleFormChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Biografía"
          value={newProfile.bio}
          onChange={handleFormChange}
          required
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="URL de la imagen"
          value={newProfile.imageUrl}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Habilidades (separadas por comas)"
          value={newProfile.skills}
          onChange={handleFormChange}
          required
        />
        <button type="submit">Añadir Perfil</button>
      </form>
    </div>
  );
};

export default App;
