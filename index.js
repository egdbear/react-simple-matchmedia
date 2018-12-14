import React from 'react';
import PropTypes from 'prop-types';
import mediaQueries from './mediaQueries';

export default class MediaQuery extends React.Component {
  state = {
    matched: false,
  }

  mql = null;

  componentDidMount() {
    if (typeof window !== 'object') return;

    const { media } = this.props;
    const mediaToMatch = mediaQueries[media] || media;
    this.mql = window.matchMedia(mediaToMatch);
    this.mql.addListener(this.onMediaChange);

    if (this.mql.matches) {
      this.onMediaChange();
    }
  }

  componentWillUnmount() {
    this.mql = null;
  }

  onMediaChange = () => {
    this.setState({ matched: this.mql.matches });
  }

  render() {
    const { children } = this.props;
    const { matched } = this.state;

    if (typeof children === 'function') {
      return children(matched);
    }

    return matched ? children : null;
  }
}

MediaQuery.propTypes = {
  media: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
