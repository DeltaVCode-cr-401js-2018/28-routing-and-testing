import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export default class Modal extends React.Component{
  render(){
    const wrapperClassName = this.props.show ? 'modal show' : 'modal dont';
    return(
      <div>
        <main className={wrapperClassName}>
          {this.props.title && <h2>{this.props.title}</h2>}
          {this.props.children}
          <button onClick={this.props.handleClose} className='modal-close'>Cancel</button>
        </main>
      </div>
    );
  }
}

Modal.PropTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};