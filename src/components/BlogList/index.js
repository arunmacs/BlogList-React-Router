import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blog-list-container">
      <ul className="blog-items-container">
        {blogsData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
