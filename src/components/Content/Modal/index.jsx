import React from 'react';
import {Modal} from 'react-bootstrap'

class ModalAll extends React.Component {
    render() {
      return (
        <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Nova Categoria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <div class="form-group">
                <label for="nameCategory">Categoria</label>
                <input type="text" class="form-control" id="nameCategory"/>
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary" onClick="">Cadastrar</button>
            <button type="button" className="btn btn-default" onClick={this.props.onHide}>Cancelar</button>
          </Modal.Footer>
        </Modal>
      );
    }
}

export default ModalAll;