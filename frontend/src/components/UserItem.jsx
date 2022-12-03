import React from 'react'

function UserItem({user}) {

    
    return (
      <div className="goal">
          <div>
              {new Date(user.createdAt).toLocaleString('en-US')}
          </div>
          <h2>{user.name}</h2>
      </div>
    )
}

export default UserItem