import "./addOrders.css";

const AddOrders = ({
  product,
  amount,
  total,
  onClickMinus,
  onClickPluss,
  onClickDelete,
}) => {
  return (
    <div className='addorders'>
      <div className='product'>{product}</div>
      <button className='minus-pluss' onClick={onClickMinus}>
        -
      </button>
      <div className='amount'>{amount}</div>
      <button className='minus-pluss' onClick={onClickPluss}>
        +
      </button>
      <div className='total'>${total}</div>
      <button className='delete' onClick={onClickDelete}></button>
    </div>
  );
};

export default AddOrders;
