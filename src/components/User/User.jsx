import { Horizontal } from '../Horizontal/Horizontal';
import './User.scss';

export const User = () => {
  return (
    <div className="user">
      <Horizontal />
      <div className="user__top">
        <h1 className="user__top--title">Youre profile</h1>
        <div className="user__top--block">
          <img className="user__top--img" src="./images/Avatar.png" alt="avatar" />

          <button className="user__top--btn">Edit</button>
        </div>
        <div className="user__data">
          <div className="user__data--item">
            <p className="user__data--section">Admin id:</p>
            <p className="user__data--data">110A</p> 
          </div>
          <div className="user__data--item">
            <p className="user__data--section">Name:</p>
            <p className="user__data--data">Adela Parkson</p> 
          </div>
          <div className="user__data--item">
            <p className="user__data--section">Address::</p>
            <p className="user__data--data">Khumaltar, Lalitpur</p> 
          </div>
          <div className="user__data--item">
            <p className="user__data--section">Contact No.:</p>
            <p className="user__data--data">9841236978</p> 
          </div>
          <div className="user__data--item">
            <p className="user__data--section">Email:</p>
            <p className="user__data--data">Adela98@gmail.com</p> 
          </div>
          <div className="user__data--item">
            <p className="user__data--section">Password:</p>
            <p className="user__data--data">*******</p> 
          </div>
          
        </div>
      </div>
    </div>
  )
}