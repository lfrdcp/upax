import React from 'react';
import { Card, Grid } from '@material-ui/core';
import CardHeaderX from './CardHeaderX';
import PropTypes from 'prop-types';
/**
 * @summary Main card, show the total card, title and subtitle
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} titleX Card title
 * @param {string} subtitleX Card subtitle
 *
 * @example
 * <CardMainX
 *  titleX="Testing title"
 *  subtitleX="Testing subtitle"
 * />
 */
const CardMainX = ({ titleX, subtitleX }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card style={{ background: 'transparent', boxShadow: 'none' }}>
        <CardHeaderX titleX={titleX} subtitleX={subtitleX} variantX={true} />
      </Card>
    </Grid>
  );
};

export default CardMainX;

CardMainX.propTypes = {
  titleX: PropTypes.string.isRequired,
  subtitleX: PropTypes.string.isRequired,
};
