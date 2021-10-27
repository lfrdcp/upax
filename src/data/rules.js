export const firstAndSecondNameRule = {
  required: {
    value: true,
    message: 'It cant be empty',
  },
  pattern: {
    value: /^[\s\S]{1,30}$/,
    message: 'Cannot exceed 30 characters',
  },
};

export const passwordRule = {
  required: {
    value: true,
    message: 'Debes ingresar tu contraseña',
  },
  pattern: {
    value: /^[\s\S]{6,}$/,
    message: 'La contraseña debe tener 6 o más caracteres',
  },
};

export const emailRule = {
  required: {
    value: true,
    message: 'Debes ingresar tu correo',
  },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: 'El correo tiene un formato no valido',
  },
};
