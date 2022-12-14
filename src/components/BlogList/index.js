import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="blog-list-container">
      {blogsData.map(eachItem => (
        <BlogItem key={eachItem.id} blog={eachItem} />
      ))}
    </div>
  )
}

export default BlogList
