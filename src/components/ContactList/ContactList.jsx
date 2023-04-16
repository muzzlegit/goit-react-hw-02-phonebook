import PropTypes from 'prop-types';
import { AiOutlineScissor } from 'react-icons/ai';

export const ContactList = ({ contacstList, deleteContact }) => {
  return (
    <ul>
      {contacstList.map(({ id, name, number }, index) => {
        return (
          <li key={id} id={id}>
            <p>
              {index + 1}. {name} - {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              <AiOutlineScissor />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacstList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
