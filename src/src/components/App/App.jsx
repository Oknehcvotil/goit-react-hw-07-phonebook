import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Section, Title, TitleMain } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Section title="Phonebook">
        <TitleMain>Phonebook</TitleMain>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 && <ContactList />}
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
