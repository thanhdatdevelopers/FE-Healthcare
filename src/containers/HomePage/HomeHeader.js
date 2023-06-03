import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className="fas fa-bars"></i>
                        <div className='header-logo'>

                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b>Chuyên Khoa</b></div>
                            <div className='subTitle'>Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className='child-content'>
                            <div className='child-content'>
                                <div><b>Cơ Sở Y Tế</b></div>
                                <div className='subTitle'>Chọn bệnh viện phòng khám</div>
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-content'>
                                <div><b>Bác Sĩ</b></div>
                                <div className='subTitle'>Chọn bác sĩ giỏi</div>
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-content'>
                                <div><b>Gói Khám</b></div>
                                <div className='subTitle'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='support'>
                        <i className="far fa-question-circle">Hỗ trợ</i>
                        </div>
                        <div className='flag'>VN</div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
