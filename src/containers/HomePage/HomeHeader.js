import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { withRouter } from 'react-router';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} onClick={() => this.returnToHome()} />

                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.speciality' /></b></div>
                                <div className='subTitle'><FormattedMessage id='homeheader.searchdoctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id='homeheader.healthfacilities' /></b></div>
                                    <div className='subTitle'><FormattedMessage id='homeheader.selectroom' /></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id='homeheader.doctor' /></b></div>
                                    <div className='subTitle'><FormattedMessage id='homeheader.selectdoctor' /></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id='homeheader.fee' /></b></div>
                                    <div className='subTitle'><FormattedMessage id='homeheader.checkhealth' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="far fa-question-circle">

                                    <FormattedMessage id='homeheader.support' />
                                </i>
                            </div>
                            <div
                                className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}
                            >
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div
                                className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                            >
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>

                {this.props.isShowBanner === true &&
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='title1'>
                                <FormattedMessage id='banner.title1' />
                            </div>
                            <div className='title2'>
                                <FormattedMessage id='banner.title2' />
                            </div>
                            <div className='search'>
                                <i className="fas fa-search"></i>
                                <input type='text' placeholder='Tìm kiếm chuyên khoa' />
                            </div>
                        </div>

                        <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i className="fas fa-hospital"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child1' />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child2' />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i class="fas fa-heartbeat"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child3' />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i class="fas fa-vial"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child4' />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i class="fas fa-user-md"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child5' />
                                    </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i class="fas fa-briefcase-medical"></i>
                                    </div>
                                    <div className='text-child'>
                                        <FormattedMessage id='banner.child6' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
