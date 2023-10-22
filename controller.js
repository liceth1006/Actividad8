// Función para realizar operaciones comunes
const realizarOperaciones = (numero1, numero2) => {
  const suma = numero1 + numero2;
  const multiplicacion = numero1 * numero2;
  return { suma, multiplicacion };
};
/* Construya un programa que sume  y multiplique dos números dados por el usuario  
se utilizo en el post*/
export const programa1 = (req, res) => {
  try {
    const { numero1, numero2 } = req.body;
    const resultado = realizarOperaciones(numero1, numero2);
    res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error de servidor" });
  }
};
/* Construya un programa que sume  y multiplique dos números dados por el usuario  
se utilizo en el GET*/
export const programa1Respuesta = (req, res) => {
  try {
    const { numero1, numero2 } = req.body;
    const resultado = realizarOperaciones(numero1, numero2);
    const informacion = "Esta es la consulta GET del programa";
    res.status(200).json({ mensaje: "Éxito", resultado, informacion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error de servidor" });
  }
};
/* Construya un programa que diga si es par o impar un numero dado por el usuario  SE UTILIZO EN EL POST Y EN EL GET*/
export const esParImpar = (req, res) => {
  try {
    const numero = req.body.numero;

    if (isNaN(numero)) {
      return res.status(400).json({ error: "El valor ingresado no es un número válido." });
    }

    const esPar = numero % 2 === 0;
    const resultado = esPar ? "par" : "impar";

    res.status(200).json({ resultado });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error de servidor" });
  }
};