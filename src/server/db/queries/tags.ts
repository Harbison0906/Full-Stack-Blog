import { Query } from '../';

const tags = () => Query('spBlogTags(?)', []);

export default { tags }
