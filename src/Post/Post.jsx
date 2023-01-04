import React from 'react'

const Post = (props) => {
  return (
      <div role="generic" key={ id }>
          <h3>{ title ? title : "" }</h3>
          { thumbnail ? <img src={ thumbnail } alt={ title } /> : "" }
          <p>{ selftext ? selftext : "" }</p>
      </div>
  )
}

export default Post;

// id, title, thumbnail, selftext