import { Router } from "express";
import { programa1,programa1Respuesta,esParImpar } from "./controller.js";

const router = Router();

/* Construya un programa que sume  y multiplique dos números dados por el usuario */

/* Ruta para sumar dos números dados por el usuario (POST) */
router.post("/programa1", programa1); 
/* Ruta para mostrar el resultado (GET) */
router.get("/programa1", programa1Respuesta);

/* Construya un programa que diga si es par o impar un numero dado por el usuario */
/* Ruta  (POST) */
router.post("/parimpar", esParImpar);
/* Ruta  (GET) */
router.get("/parimpar", esParImpar);
export default router;

