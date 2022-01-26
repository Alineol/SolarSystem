import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="h2-title">
        { headline }
      </h2>
    );
  }
}
const { string } = PropTypes;
Title.propTypes = {
  headline: string.isRequired,
};
export default Title;
