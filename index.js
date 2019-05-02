import React from 'react';
import PropTypes from 'prop-types';
import mediaQueries from './mediaQueries';

export default class MediaQuery extends React.Component {
  mql = null;

  active = true;

  state = {
    matched: false,
  }

  componentDidMount() {
    if (typeof window !== 'object') return;
    if (!window.matchMedia) return;

    const { media } = this.props;
    const mediaToMatch = mediaQueries[media] || media;
    this.mql = window.matchMedia(mediaToMatch);
    this.mql.addListener(this.onMediaChange);

    if (this.mql.matches) {
      this.onMediaChange();
    }
  }

  componentWillUnmount() {
    this.active = false;
    this.mql.removeListener(this.onMediaChange);
    this.mql = null;
  }

  onMediaChange = () => {
    if (!this.active) return;

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
