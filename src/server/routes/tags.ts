import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
  const blogid = Number(req.params.id)
  try {
    if (blogid) {
      const [blog] = await db.blogs.one(blogid);
      res.json(blog);
    } else {
      const blogs = await db.blogs.all();
      res.json(blogs);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json('Oops, something went wrong...')
  }
});