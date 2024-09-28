import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Your phonebook</DocumentTitle>
      <div className={css.container}>
        <ContactForm />
        <div className={css.content}>
          {!isLoading && <p>Loading...</p>}
          <SearchBar />
          <ContactList />
        </div>
      </div>
    </>
  );
}
