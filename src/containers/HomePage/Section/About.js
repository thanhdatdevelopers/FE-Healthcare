import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
  render() {
    return (
      <div className='section-share section-about'>
        <div className='section-about-header'>
          Truyen thong noi gi ve BOOKING CARE
        </div>
        <div className='section-about-content'>
          <div className='content-left'>
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/vdk4Kpkwdkc?si=FgyTkYW3G4Ewkga0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='content-right'>
            <p>
            Khám bệnh không phải xếp hàng ở Hà Nội
            Với ứng dụng trên điện thoại, người bệnh đặt lịch khám, chọn bác sĩ ở 60 bệnh viện, phòng khám tại Hà Nội đồng thời nhận được thông báo mức chi phí.
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
