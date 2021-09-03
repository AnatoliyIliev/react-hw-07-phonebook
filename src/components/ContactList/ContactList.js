import { connect } from 'react-redux';
import operations from '../../redux/operations';
import ElementContactList from '../ElementContactList';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {/* <h1>nj jyj { contacts }</h1> */}
    <ul className={styles.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.contactList_items} key={id}>
          <ElementContactList
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  const filterName = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return filterName;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
