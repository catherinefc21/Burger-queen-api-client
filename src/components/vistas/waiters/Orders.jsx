import "./Orders.css";

export const Orders = () => {
  return (
    <div className='Orders'>
      <header>
        <div className='logo'></div>
        <div className='labelMenu'>Menú</div>
      </header>
      <div className='buttonsClients'>
        <div className='buttons'>
          <button className='buttonbreakfast'>Desayuno</button>
          <button className='buttonLunch'>Almuerzo-Cena</button>
        </div>
        <div className='clients'>
          <input
            type='text'
            name='name'
            className='inputClient'
            id='client'
            placeholder='Nombre Cliente'
          />
          <input
            type='text'
            name='name'
            className='inputClient'
            id='clients'
            placeholder='N° Mesa'
          />
        </div>
        <div className='optionsMenu'></div>
        <div className='createOrders'></div>
      </div>
    </div>
  );
};
export default Orders;
