import "./addOrders.css";

const AddOrders = () => {
  return (
    <div>
      <div className='Text'>producto</div>
      <button className='resta'>-</button>
      <div className='number'>0</div>
      <button className='suma'>+</button>
      <div className='valor'>0</div>
      <div className='eliminar'>🗑</div>
      <div className='separa2'></div>
      <div className='title'>Total: $</div>
      <button className='enviar'>Enviar Orden</button>
    </div>
  );
};

export default AddOrders;
