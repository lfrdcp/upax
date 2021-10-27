import React from 'react';
import { Card } from '@material-ui/core';
/**
 * @summary Transparent card, show content's card
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 *
 * @example
 * <CardTrans>
 *
 * </CardTrans>
 */
const CardTrans = ({ children }) => {
  return (
    <Card
      style={{
        background: 'transparent',
        borderTopRightRadius: '2rem',
        boxShadow: 'none',
      }}
    >
      {children}
    </Card>
  );
};

export default CardTrans;
