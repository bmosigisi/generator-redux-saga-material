import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {},
});

const ExampleComponent = ({ classes, children }) => {
  return <div className={classes.root}>{children}</div>;
};

ExampleComponent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ExampleComponent);
