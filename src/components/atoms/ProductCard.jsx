import React from 'react'

function ProductCard({data}) {
  return (
    <div>
        <div>Title: {data.title}</div>
        <div>Description: {data.description}</div>
        <div>Image: {data.image_path}</div>
    </div>
  )
}

export default ProductCard