import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
  render() {
    return (
      <div className='home-footer'>
        <p>Copyright © 2023: ThnhDaatNguyen. More information, please visit: 
          <a target='_blank' href='https://www.facebook.com/thnhdaat.nguyen/'> Here</a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
