import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageSpecialty.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite'
import { CommonUtils } from '../../../utils';
import { createNewSpecialty } from '../../../services/userService'
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imageBase64: '',
      descriptionHTML: '',
      descriptionMardown: ''
    }
  }

  async componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {

    }
  }

  handleOnChangeInput = (event, id) => {
    let stateCopy = { ...this.state }
    stateCopy[id] = event.target.value
    this.setState({
      ...stateCopy
    })
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      descriptionHTML: html,
      descriptionMardown: text
    })
  }

  handleOnChangeImage = async (event) => {
    let data = event.target.files
    let file = data[0]
    if (file) {
      let base64 = await CommonUtils.getBase64(file)
      this.setState({
        imageBase64: base64
      })
    }
  }

  handleSaveNewSpecialty = async () => {
    let res = await createNewSpecialty(this.state)
    if (res && res.errCode === 0) {
      toast.success('Add new specialty succeeds !')
      this.setState({
        name: '',
        imageBase64: '',
        descriptionHTML: '',
        descriptionMardown: ''
      })
    } else {
      toast.error('Something wrongs')
    }
  }

  render() {
    return (
      <div className='manage-specialty-container'>
        <div className='ms-title'>
          <FormattedMessage id="menu.admin.manage-specialtys" />
        </div>

        <div className='add-new-specialty-row'>
          <div className='col-6 form-group'>
            <label>
              <FormattedMessage id="menu.admin.name-specialty" />
            </label>
            <input className='form-control' type='text' value={this.state.name}
              onChange={(event) => this.handleOnChangeInput(event, 'name')}
            />
          </div>

          <div className='col-6 form-group'>
            <label>
              <FormattedMessage id="menu.admin.image-speciality" />
            </label>
            <input className='form-control-file' type='file'
              onChange={(event) => this.handleOnChangeImage(event)}
            />
          </div>

          <div className='col-12'>
            <MdEditor
              style={{ height: '300px' }}
              renderHTML={text => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.descriptionMardown}
            />
          </div>

          <div className='col-12'>
            <button className='btn-save-specialty'
              onClick={() => this.handleSaveNewSpecialty()}
            >Save</button>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
