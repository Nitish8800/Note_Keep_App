import _ from 'lodash';

export default function paginate(notes, currentPage, pageSize) {
  let index = (currentPage - 1) * pageSize;
  return _(notes).slice(index).take(pageSize).value();
}
