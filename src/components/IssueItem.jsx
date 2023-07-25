import React from 'react'

const IssueItem = ({ title, user, id, html_url }) => {
  return (
    <div className='issue-item'>
      <div id='id-head'>{id}</div>
      <div id='title-head'><a id='title-name' href={html_url}>{title}</a></div>
      <div id='user-head'>{user}</div>
    </div>
  )
}

export default IssueItem
