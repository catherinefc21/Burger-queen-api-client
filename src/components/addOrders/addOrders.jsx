import "./addOrders.css";

const AddOrders = () => {
  return (
    <div className='addorders'>
      <div className='Text'>producto</div>
      <button className='resta'>-</button>
      <div className='number'>0</div>
      <button className='suma'>+</button>
      <div className='valor'>0</div>
      <div className='eliminar'></div>
    </div>
  );
};

export default AddOrders;
