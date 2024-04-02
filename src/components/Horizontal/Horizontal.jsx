import './Horizontal.scss';

export const Horizontal = () => {
  return (
    <div className="horizontal">
      <div className="horizontal__item">
        <h2 className="horizontal__title">Баланс</h2>
        <img src="./images/hor.svg" alt="hor" />
      </div>
      <div className="horizontal__item">
        <h2 className="horizontal__title">Трекер трафіку</h2>
        <img src="./images/hor.svg" alt="hor" />
      </div>
      <div className="horizontal__item">
        <h2 className="horizontal__title">Додавання пропозиції</h2>
        <img src="./images/hor.svg" alt="hor" />
      </div>
      <div className="horizontal__item">
        <h2 className="horizontal__title">виплати</h2>
        <img src="./images/hor.svg" alt="hor" />
      </div>
    </div>
  )
}