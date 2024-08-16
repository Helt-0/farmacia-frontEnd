import React from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto'; // Ajuste o caminho se necessário
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'; // Ajuste o caminho se necessário

function ModalProduto() {
  return (
    <Popup
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo produto</button>}
      modal
      className="popup-content"
    >
      <div className="modal-content">
        <FormularioProduto />
      </div>
    </Popup>
  );
}

export default ModalProduto;
