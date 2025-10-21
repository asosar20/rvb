# RVB - Proyecto Web y API

Este repositorio contiene el proyecto RVB, una aplicación compuesta por un frontend en React y un backend en Node.js, ambos organizados dentro de una misma carpeta.

---

## Estructura del proyecto

rvb/
├── web/ # Frontend en React + Vite + TypeScript
└── api/ # Backend en Node.js + Express + Supabase

---

## Tecnologías principales

### Frontend (carpeta /web)
- React 18 con TypeScript
- Tailwind CSS
- Vite
- Componentes reutilizables
- Gestor de paquetes: pnpm

### Backend (carpeta /api)
- Node.js con Express
- Supabase (base de datos y autenticación)
- Dotenv para variables de entorno
- API REST para manejar formularios y datos

---

## Requisitos previos

Antes de empezar asegúrate de tener instalado:

- Node.js versión 18 o superior  
- pnpm  
- Git  

---

## Instalación

Clona este repositorio y entra al proyecto:

```bash
git clone https://github.com/asosar20/rvb.git
cd rvb
cd web
pnpm install
cd ../api
pnpm install
