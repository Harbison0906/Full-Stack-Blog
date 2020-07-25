import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:blogid?', async (req, res, next) => {
  const blogid = Number(req.params.blogid)
  try {
      const [tag] = await db.tags.tags(blogid);
      res.json(tag);
  } catch (error) {
    console.log(error)
    res.status(500).json('Oops, something went wrong...')
  }
});

export default router