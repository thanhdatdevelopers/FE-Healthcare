import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from "../ProfileDoctor"
import _ from 'lodash';

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async componentDidMount() {

  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {

    }

  }

  render() {
    let { isOpenModal, closeBookingClose, dataTime } = this.props
    let doctorId = '';
    if (dataTime && !_.isEmpty(dataTime)) {
      doctorId = dataTime.doctorId
    }
    return (
      <Modal
        isOpen={isOpenModal}
        className={'booking-modal-container'}
        size='lg'
        centered
      >
        <div className='booking-modal-content'>
          <div className='booking-modal-header'>
            <span className='left'>Thong tin dat lich kham benh</span>
            <span
              className='right'
              onClick={closeBookingClose}
            ><i className='fas fa-times'></i></span>
          </div>
          <div className='booking-modal-body'>
            <div className='doctor-infor'>
              <ProfileDoctor
                doctorId={doctorId}
                isShowDescriptionDoctor={false}
                dataTime={dataTime}
              />
            </div>
            <div className='price'>
              Gia kham 500.000 VND
            </div>
            <div className='row'>
              <div className='col-6 form-group'>
                <label>Ho va ten</label>
                <input className='form-control' />
              </div>
              <div className='col-6 form-group'>
                <label>So dien thoai</label>
                <input className='form-control' />
              </div>
              <div className='col-6 form-group'>
                <label>Email</label>
                <input className='form-control' />
              </div>
              <div className='col-6 form-group'>
                <label>Dia chi lien he</label>
                <input className='form-control' />
              </div>
              <div className='col-12 form-group'>
                <label>Ly do kham</label>
                <input className='form-control' />
              </div>
              <div className='col-6 form-group'>
                <label>Dat cho ai</label>
                <input className='form-control' />
              </div>
              <div className='col-6 form-group'>
                <label>Gioi tinh</label>
                <input className='form-control' />
              </div>
            </div>
          </div>

          <div className='booking-modal-footer'>
            <button className='btn-booking-confirm'
              onClick={closeBookingClose}
            >Xac nhan</button>
            <button className='btn-booking-cancel'
              onClick={closeBookingClose}
            >cancel</button>
          </div>
        </div>
      </Modal>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
