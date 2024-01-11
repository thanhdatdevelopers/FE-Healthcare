import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
  render() {
    return (
      <div className='section-share section-about'>
        <div className='section-about-header'>
          <FormattedMessage id="homepage.social-media" />
        </div>
        <div className='section-about-content'>
          <div className='content-left'>
            <iframe width="100%" height="400px"
              src="https://www.youtube.com/embed/FyDQljKtWnI?si=5U03voUF2hSjmBbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='content-right'>
            <p>
              <FormattedMessage id="homepage.text-media1" />
            </p>
            <p>
              <FormattedMessage id="homepage.text-media2" />
            </p>
            <p>
              <FormattedMessage id="homepage.text-media3" />
            </p>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
