import { Query } from '../';

const all = () => Query('SELECT * FROM Tags');
const insert = (newTag: any) => Query('INSERT INTO Tags SET ?', newTag);

export default { all, insert }
