import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss'
import Select from 'react-select';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils'
import { getDetailInforDoctor } from '../../../services/userService'

const mdParser = new MarkdownIt(/* Markdown-it options */);
class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: '',
      contentHTML: '',
      selectedOption: '',
      description: '',
      listDoctors: [],
      hasOldData: false
    }
  }

  componentDidMount() {
    this.props.fetchAllDoctors()
  }

  buildDataInputSelect = (inputData) => {
    let result = []
    let { language } = this.props

    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {}
        let labelEn = `${item.lastName} ${item.firstName}`
        let labelVi = `${item.firstName} ${item.lastName}`
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object)
      })
    }
    return result
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
      this.setState({
        listDoctors: dataSelect
      })
    }

    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
      this.setState({
        listDoctors: dataSelect
      })
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    })
  }

  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
    })
  }

  handleChangeSelect = async (selectedOption) => {
    this.setState({ selectedOption });

    let res = await getDetailInforDoctor(selectedOption.value)
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true
      })
    }
    else {
      this.setState({
        contentHTML: '',
        contentMarkdown: '',
        description: '',
        hasOldData: false
      })
    }
  };

  handleOnChangeDes = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    let { hasOldData } = this.state
    return (
      <div className='manage-doctor-container'>
        <div className='manage-doctor-title'>
          Tao them thong tin doctor
        </div>

        <div className='more-info'>
          <div className='content-left form-group'>
            <lable>Chon bac si</lable>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChangeSelect}
              options={this.state.listDoctors}
            />
          </div>

          <div className='content-right'>
            <lable>Thong tin gioi thieu</lable>
            <textarea className='form-control' rows='4'
              onChange={(event) => this.handleOnChangeDes(event)}
              value={this.state.description}
            >
              afdfdfd
            </textarea>
          </div>
        </div>

        <div className='manage-doctor-editor'>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={text => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMarkdown}
          />
        </div>

        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={hasOldData === true ? 'save-content-doctor' : 'create-content-doctor'}>
          {hasOldData === true ?
            <span>Luu thong tin</span> : <span>Tao thong tin</span>
          }
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDoctors: (id) => dispatch(actions.fetchAllDoctors()),
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
