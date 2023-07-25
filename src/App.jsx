import { useState, useEffect } from 'react'
import IssueItem from './components/IssueItem'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        setIssues(results)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1>React Issues API</h1>
        <div id='heads'>
          <div id='id-head' className='head'>ID</div>
          <div id='title-head' className='head'>TITLE</div>
          <div id='user-head' className='head'>USER</div>
        </div>
        <div>
          {
            issues.map(issue => (
              <IssueItem
                title={issue.title}
                user={issue.user.login}
                id={issue.id}
                html_url={issue.html_url}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App
