import { Link } from 'react-router-dom';
import _ from 'lodash';

const Pagination = ({ notes, currentPage, onCurrentPage, pageSize }) => {
  const pageCount = Math.ceil(notes.length / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <ul className='pagination'>
      {pages.map((page) => (
        <li
          key={page}
          className={currentPage === page ? 'page-item active' : 'page-item'}
          onClick={() => onCurrentPage(page)}
        >
          <Link className='page-link' to='/'>
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
