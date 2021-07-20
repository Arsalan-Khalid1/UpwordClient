import './Card.css';

const Card = () => {
    return (
        <div className="card">
         <div style={{border: "0.5px solid black"}}><img src="img_avatar.png" alt="Avatar" style={{width:"100%"}}/></div>
        <div className="container">
        <h4><b>Title</b></h4>
        <p>Text</p>
        </div>
</div>
    );
};

export default Card;
