import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData

  return (
    <>
      <li className="blog-item">
        <div className="heading-div">
          <h1 className="title-text">{title}</h1>
          <p className="date-text">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
        <hr />
      </li>
    </>
  )
}

export default BlogItem
