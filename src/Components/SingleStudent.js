import React from 'react'

function SingleStudent({student}) {
  return (
    <div>
        <h1>{student.name}</h1>
        <h2>{student.age}</h2>
    </div>
  )
}

export default SingleStudent