---
title: "Introducción a la Arquitectura Hexagonal"
description: "Descubre cómo la Arquitectura Hexagonal (Puertos y Adaptadores) te permite crear sistemas de software altamente mantenibles e independientes del framework o base de datos."
pubDate: "2024-03-10"
tags: ["arquitectura", "ddd", "patrones", "backend"]
lang: "es"
---

# Introducción a la Arquitectura Hexagonal

En el mundo del desarrollo de software, mantener el código limpio, escalable y testable es uno de los mayores desafíos a medida que los proyectos crecen. Aquí es donde entra la **Arquitectura Hexagonal**, también conocida como el patrón de Puertos y Adaptadores.

Propuesta por Alistair Cockburn, esta arquitectura busca un objetivo claro: **aislar la lógica de negocio de las tecnologías externas**.

## ¿Por qué necesitamos Arquitectura Hexagonal?

En aplicaciones tradicionales (como las arquitecturas de 3 capas), la lógica de negocio a menudo se acopla fuertemente a la base de datos o al framework web. Si decides cambiar de MySQL a MongoDB, o de Express a NestJS, el impacto en tu código central suele ser devastador.

La arquitectura hexagonal resuelve esto invirtiendo las dependencias.

## Conceptos Clave

### El Hexágono (El Centro)
Representa tu dominio, las reglas de negocio. Aquí viven tus entidades, casos de uso y servicios de dominio. El código dentro del hexágono **no debe tener dependencias hacia afuera**. No sabe si estás usando HTTP, GraphQL, SQL o NoSQL.

### Puertos
Son las interfaces que definen cómo el mundo exterior puede interactuar con la aplicación (Puertos de Entrada/Driving Ports) o cómo la aplicación interactúa con el mundo exterior (Puertos de Salida/Driven Ports).

- **Puertos de Entrada:** Ej. `CrearUsuarioUseCase` (la interfaz).
- **Puertos de Salida:** Ej. `UsuarioRepository` (la interfaz).

### Adaptadores
Son las implementaciones concretas de los puertos. Conectan la tecnología con tu dominio.

- **Adaptadores de Entrada (Driving):** Controladores REST, CLI, Event Listeners. Laman a los puertos de entrada.
- **Adaptadores de Salida (Driven):** Repositorios SQL, clientes API externos, publicadores de eventos. Implementan los puertos de salida.

## Beneficios Principales

1. **Testabilidad:** Puedes probar tu lógica de negocio de forma aislada, mockeando los puertos de salida sin necesidad de levantar bases de datos.
2. **Independencia de Frameworks:** El core de tu aplicación puede sobrevivir a cambios de tecnología.
3. **Mantenibilidad:** El código está altamente estructurado, facilitando la comprensión y evolución del sistema.

## Ejemplo Práctico

Imagina que quieres guardar un usuario.

1. Tu controlador HTTP (Adaptador de Entrada) recibe el request.
2. Llama al Caso de Uso (Puerto de Entrada).
3. El Caso de Uso ejecuta la lógica de negocio.
4. Para persistir, el Caso de Uso llama a la interfaz `UsuarioRepository` (Puerto de Salida).
5. El Adaptador PostgreSQL (que implementa `UsuarioRepository`) finalmente ejecuta el `INSERT` en la base de datos.

## Conclusión

Adoptar Arquitectura Hexagonal puede añadir complejidad inicial por la creación de múltiples interfaces y capas de mapeo. Sin embargo, en aplicaciones empresariales y dominios complejos, el retorno de inversión en términos de flexibilidad y mantenibilidad es inmenso.
