import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button LinkComponent={Link} to={`/books/${_id}`}>
          Update
        </Button>
        <Button color="error" onClick={deleteHandler}>
          Delete
        </Button>

        <Button  LinkComponent={Link} to={'/cart'}>
        <AddShoppingCartIcon />
        </Button>
      
      </div>
    </div>
  );
};

export default Book;
