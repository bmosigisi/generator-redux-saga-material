import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isLoading } from '../selectors';

const mapStateToProps = (state) => {
  return {
    loading: isLoading(state),
  };
};

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { loading } = this.props;

    return (
      <div>
        { loading && <CircularProgress /> }
        { !loading && <Typography variant="body2">Entry point!</Typography> }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
