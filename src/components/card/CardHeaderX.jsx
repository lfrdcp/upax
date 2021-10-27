import React from 'react';
import { CardHeader } from '@material-ui/core';
import PropTypes from 'prop-types';
/**
 * @summary Card header, show title and subtitle, optional handwriting
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} titleX Card title
 * @param {string} subtitleX Card subtitle
 * @param {bool} [variantX=false] Show title in handwritten if true
 *
 * @example
 * <CardHeaderX
 *  titleX="Testing title"
 *  subtitleX="Testing subtitle"
 * />
 */
const CardHeaderX = ({ titleX, subtitleX, variantX = false }) => {
  let style = { align: 'center', color: 'primary' };

  variantX && (style = { ...style, variant: 'h4' });

  return (
    <CardHeader
      title={titleX}
      titleTypographyProps={{
        ...style,
      }}
      subheader={subtitleX}
      subheaderTypographyProps={{
        variant: 'subtitle2',
        align: 'center',
      }}
    />
  );
};

export default CardHeaderX;

CardHeaderX.propTypes = {
  titleX: PropTypes.string.isRequired,
  subtitleX: PropTypes.string.isRequired,
  variantX: PropTypes.bool,
};
