import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {},
});

const <%= componentName %> = ({ classes, children }) => {
  return <div className={classes.root}>{children}</div>;
};

<%= componentName %>.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(<%= componentName %>);
