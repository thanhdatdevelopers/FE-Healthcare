import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtrainfor.scss';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';

class DoctorExtrainfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false
    }
  }

  async componentDidMount() {

  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {

    }
  }

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status
    })
  }

  render() {
    let { isShowDetailInfor } = this.state;
    return (
      <div className='doctor-extra-infor-container'>
        <div className='content-up'>
          <div className='text-address'>Dia chi phong kham</div>
          <div className='name-clinic'>PHong kham chuyen khoa</div>
          <div className='detail-address'>Hai Ba trung</div>
        </div>

        <div className='content-down'>
          {isShowDetailInfor === false &&
            <div className='short-infor'>
              Gia kham: 250k
              <span onClick={() => this.showHideDetailInfor(true)}>
                Xem chi tiet
              </span>
            </div>
          }
          {isShowDetailInfor === true &&
            <>
              <div className='title-price'>Gia Kham</div>
              <div className='detail-infor'>
                <div className='price'>
                  <div className='left'>Gia kham</div>
                  <div className='left'>250k</div>
                </div>
                <div className='note'>
                  Uu tien khi dat kham online
                </div>
              </div>
              <div className='payment'>
                Thanh toan qa nhieu hinh thuc
              </div>
              <div className='hide-price'>
                <span onClick={()=> this.showHideDetailInfor(false)}>
                  An bang gia
                </span>
              </div>
            </>
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtrainfor);
