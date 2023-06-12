import {  useEffect } from "react";
import BookData from "../../data/book";
import Navbar from "../../components/Navbar";
import BookDetail from "../../components/BookDetail";
import ReviewList from "../../components/ReviewList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBook,removeBook } from "../../redux/actions/book-action";
const BookDetailPage = () => {
  const { id } = useParams();
  //const [book, setBook] = useState({});
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    // setBook(BookData[0]);
    if (id && id !== "") {
      dispatch(addBook(BookData[id]));
      return () => {
        dispatch(removeBook());
      };
    }
  }, [id,dispatch]);
  return (
    <>
      <Navbar />
      <BookDetail data={book} />
      <ReviewList />
    </>
  );
};

export default BookDetailPage;
