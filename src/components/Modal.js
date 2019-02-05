import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div onClick={() => this.toggleModal()}>
        {this.props.children}
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          style={{
            overlay: {
              position: 'initial',
              top: 'initial',
              left: 'initial',
              right: 'initial',
              bottom: 'initial',
              backgroundColor: 'initial',
              WebkitOverflowScrolling: 'initial',
              zIndex: 'initial',
              zIndex: 1000,
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: 0
            },
            content: {
              position: 'initial',
              top: 'initial',
              left: 'initial',
              right: 'initial',
              bottom: 'initial',
              border: 'initial',
              background: 'initial',
              overflow: 'initial',
              borderRadius: 'initial',
              outline: 'initial',
              padding: 'initial',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: 0,
              padding: 0
            }
          }}
        >
          <button
            onClick={() => this.toggleModal}
            style={{
              float: 'right',
              marginTop: '-30px',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '31px',
              fontWeight: 'bold',
              display: 'inline-block',
              lineHeight: '0px',
              padding: '11px 3px'
            }}
          >
            x
          </button>
          {this.props.content}
        </ReactModal>
      </div>
    );
  }
}

Modal.propTypes = {
  content: PropTypes.object
};

export default Modal;
