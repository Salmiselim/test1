import React from 'react'
 import SingleStudent from './SingleStudent'
function ListOfStudent({arrayOfStudents}) {
  return (
    <div>
        {arrayOfStudents.map((elt)=><SingleStudent key={elt.id} student={elt}/>)}
    </div>
  )
}

export default ListOfStudent