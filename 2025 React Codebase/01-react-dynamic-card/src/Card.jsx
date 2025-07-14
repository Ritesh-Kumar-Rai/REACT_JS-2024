function Card({ name = 'Krsna', followers = 7800, status = "online" }) {
  return (
    <div className="card" >
      <div className="image-container"></div>
      <div className="card-body">
        <h3>{name}</h3>
        <div>
          <button type="button">Followers: {followers}</button>
          <button type="button">Status: {status}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
