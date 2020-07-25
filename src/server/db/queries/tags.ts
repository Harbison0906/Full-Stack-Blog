import { Query } from '../';

const tags = (blogid: number) => Query('spBlogTags(?)', [blogid]);

export default { tags }
