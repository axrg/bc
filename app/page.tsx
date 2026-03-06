"use client";

import { useState } from "react";
import "../styles/main.scss";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

const handleSubmit = async (e:any) => {
  e.preventDefault();

  if(!name || !email){
    alert("Por favor completa todos los campos");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(email)){
    alert("Ingresa un correo válido");
    return;
  }

  try{

    const res = await fetch("/api/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email})
    });

    const data = await res.json();

    alert(data.message);

    setName("");
    setEmail("");

  }catch(error){

    alert("Error al registrar");

  }
};

  return (

    <main className="min-h-screen bg-gradient">

      {/* NAVBAR */}
      <nav className="navbar">

        <h1 className="logo">
          AdTech Bootcamp
        </h1>

        <button
        className="registerBtn"
        onClick={()=>setOpen(true)}
        >
        Inscribirse
        </button>

      </nav>


      {/* HEADER */}
      <header className="header">

        <h2 className="title">
          AdTech Essentials Bootcamp
        </h2>

        <p className="subtitle">
          Experiencia de aprendizaje intensiva para impulsar tu carrera
          en marketing y tecnología publicitaria.
        </p>

      </header>


      {/* DESCRIPCIÓN */}
      <section className="section">

        <h3>Descripción</h3>

        <p>
        AdTech Essentials Bootcamp es una experiencia de aprendizaje intensiva
        para impulsar tu carrera en marketing y tecnología publicitaria.
        </p>

      </section>


      {/* INFORMACIÓN DEL CURSO */}
      <section className="section glass">

        <h3>Información del programa</h3>

        <ul>
          <li>Fecha de inicio: 14 de abril 2026</li>
          <li>Horario: Martes y jueves 6:30 pm – 8:30 pm</li>
          <li>Modalidad: Remoto en vivo</li>
          <li>Duración total: 40 horas</li>
        </ul>

      </section>


      {/* POPUP */}
      {open && (

        <div className="popupOverlay">

          <div className="popup">

            <h3>Registro al Bootcamp</h3>

            <p className="popupText">
            Estamos felices de que quieras dar un paso hacia la industria tech.
            Completa el formulario para reservar tu lugar en el AdTech Essentials Bootcamp.
            </p>

            <form onSubmit={handleSubmit}>

              <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              />

              <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              />

              <button className="submitBtn">
              Registrarme
              </button>

            </form>

            <button
            className="closeBtn"
            onClick={()=>setOpen(false)}
            >
            Cerrar
            </button>

          </div>

        </div>

      )}

    </main>
  );
}