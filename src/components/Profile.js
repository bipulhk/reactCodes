import React from 'react'

function Profile(props) {
  const {name , branch, q} = props;
  return (
    <div>
      <h1>hello {props.name} 
          your branch is{props.branch}
      </h1>
      <h3>your favorite quote is {q}</h3>
    </div>
  )
}

export default Profile;