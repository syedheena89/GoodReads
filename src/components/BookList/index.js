import React, {  useEffect } from "react";
import BookData from "../../data/book";
import Book from "./Book";
import { useSelector ,useDispatch} from "react-redux";
import { setBooks } from "../../redux/actions/book-action";

const BookList = () => {
 // const [books, setBooks] = useState([]);
 const books = useSelector(state=>state.allBooks.books)
 const dispatch = useDispatch()
  useEffect(() => {
    //setBooks(BookData);
    dispatch(setBooks(BookData))
  });
  return (
    <div className="container">
      <h1 className="text-center">ALL BOOKS</h1>
      <div className="row">
        {books.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
