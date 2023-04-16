import PropTypes from 'prop-types';
//ICONS
import { AiOutlineScissor } from 'react-icons/ai';
//STYLE
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, contacstList, deleteContact }) => {
  return (
    <List>
      {!contacstList.length ? (
        <Item color="black">
          {contacts.length
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
  contacstList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
