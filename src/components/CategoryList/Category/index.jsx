import { Link } from "react-router-dom";
const Category = (props) => {
  const { catName, catImage } = props.data;

  return (
    <div className="col-sm-3">
      <Link to="/books">
        <div className="card">
          <img className="card-image-top" src={catImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{catName}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
