import * as express from 'express';
import db from '../db';

const router = express.Router();


router.post('/', async (req, res, next) => {
  const { blogid, tagid } = req.body;
  try {
    await db.blogtags.insert(blogid, tagid);
    res.json({ msg: 'tag created' });
  } catch (error) {
    console.log(error)
    res.status(500).json('Oops, something went wrong...')
  }
});

export default router