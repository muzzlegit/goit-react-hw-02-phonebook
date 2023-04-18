import PropTypes from 'prop-types';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ isContacts, contacstList, deleteContact }) => {
  return (
    <List>
      {!contacstList.length ? (
        <Item color="black">
          {isContacts
            ? 'В тебе немає такого контакту'
            : 'Здається, в тебе немає жодного знайомого :('}
        </Item>
      ) : null}
      {contacstList.map(({ id, name, number }, index) => {
        return (
          <Item key={id} id={id}>
            <p>
              {index + 1}. {name} - {number}
            </p>
            <Button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              <AiOutlineScissor size="24px" />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  isContacts: PropTypes.number.isRequired,
  contacstList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
