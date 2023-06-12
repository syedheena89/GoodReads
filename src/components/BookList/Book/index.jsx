import { Link } from "react-router-dom";
const Book = (props) => {
  const { id, title, image } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={"/books/" + id} className="btn btn-primary btn-block">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Book;
