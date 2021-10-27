const msg500 = 'Error 500, intente más tarde ';
const msg404 = 'Error 404, intente más tarde ';
const msg400 = 'Error 400, datos invalidos o incompletos';
const msgUn = 'Error no identificado, intente más tarde ';

export const errorLogin = {
  e500: msg500 + '(Iniciar sesión)',
  e404: msg404 + '(Iniciar sesión)',
  e400: msg400 + '(Iniciar sesión)',
  eUn: msgUn + '(Iniciar sesión)',
};

export const errorReadEmployees = {
  e500: msg500 + '(Mostrar empleados)',
  e404: msg404 + '(Mostrar empleados)',
  e400: msg400 + '(Mostrar empleados)',
  eUn: msgUn + '(Mostrar empleados)',
};

export const errorCreateEmployee = {
  e500: msg500 + '(Registrar empleado)',
  e404: msg404 + '(Registrar empleado)',
  e400: msg400 + '(Registrar empleado)',
  eUn: msgUn + '(Registrar empleado)',
};