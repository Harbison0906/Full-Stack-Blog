import { Query } from '../';

const all = () => Query('SELECT * FROM Blogs');
const one = (id: number) => Query('SELECT * FROM Blogs WHERE id = ?', [id]);
const insert = (title: string, authorid: number, content: string) => Query('INSERT INTO Blogs (title, authorid, content) Values(?, ?, ?)', [title, authorid, content]);
const update = (id: number, title: string, authorid: number, content: string) => Query('UPDATE Blogs SET title: ?, authorid: ?, content: ?  WHERE id = ?', [title, authorid, content, id])
const destroy = (id: number) => Query('DELETE FROM Blogs WHERE id = ?', [id]);


export default { all, one, insert, update, destroy }