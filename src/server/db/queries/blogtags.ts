import { Query } from '../';

const all = () => Query('SELECT * FROM BlogTags');
const insert = (blogid: number, tagid: number) => Query('INSERT INTO BlogTags (blogid, tagid) VALUE(?, ?)', [blogid, tagid]);

export default { all, insert }