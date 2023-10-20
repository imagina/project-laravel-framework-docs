---
sidebar_position: 1
---

# Introducción

Este proyecto se ha estructurado en varios módulos independientes, cada uno diseñado para cumplir una función
específica. Cada módulo está diseñado para abordar diferentes aspectos de la aplicación, lo que permite una gestión
eficaz y modular del proyecto.

## Acceso a la API

Para interactuar con estos módulos a través de la API, debes usar la siguiente estructura de ruta: `<Tu-Dominio>/api`.
Utiliza esta ruta para acceder a las funcionalidades proporcionadas por los módulos de manera programática. Cada módulo
tiene endpoints específicos que puedes utilizar para realizar acciones concretas.

Cada módulo tiene su propia documentación detallada, que proporciona instrucciones específicas sobre cómo utilizar sus
características y funcionalidades a través de la API. Te animamos a aprovechar al máximo estos módulos y su capacidad de
interacción a través de la API para lograr tus objetivos dentro del proyecto.

## Autenticación

La autenticación es el primer paso necesario para utilizar las operaciones `CRUD` básicas en los módulos. Para acceder a
la aplicación, sigue estos pasos:

1. Accede a la siguiente ruta: `<Tu-Dominio>/api/profile/v1/auth/login`.
2. Envía una solicitud `POST` con el siguiente payload:

```json
{
  "username": "tuemail@mail.com",
  "password": "tucontraseña"
}
```

3. Recibirás una respuesta que contiene los siguientes datos:

```json
{
  "data": {
    "expiresIn": "...", // Tiene un año de expiración
    "userData": {}, // Datos sobre el usuario
    "userToken": "..." // Token de Autenticación
  }
}
```

La respuesta incluye un token de autenticación, que es esencial para acceder a las funcionalidades protegidas de la
aplicación. Este token tiene una vigencia de un año y te permitirá realizar operaciones CRUD en los módulos de manera
segura.

Asegúrate de guardar este token de forma segura, ya que lo necesitarás para autenticarte en futuras solicitudes a la API
y acceder a las funcionalidades de los módulos. Si tienes alguna pregunta o necesitas asistencia adicional con el
proceso de autenticación, no dudes en contactar a nuestro equipo de soporte.