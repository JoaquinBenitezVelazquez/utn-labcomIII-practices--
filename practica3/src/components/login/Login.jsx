import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");

  const handleOneChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handlePressKey = (e) => {
    if (e.key.toLowerCase() === "o") {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleClick = () => {
    if (userName.toLowerCase().includes("o") || userName === "") {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <form className="formLogin">
      <input
        type="text"
        onChange={handleOneChange}
        value={userName}
        onKeyDown={handlePressKey}
      />
      <button onClick={handleClick}>Registrarse</button>
      <p>Valor: {userName}</p>
    </form>
  );
}

export default Login;
