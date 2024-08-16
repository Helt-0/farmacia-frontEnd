import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos);
    } catch (error: any) {
      alert('Erro ao buscar produtos');
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
