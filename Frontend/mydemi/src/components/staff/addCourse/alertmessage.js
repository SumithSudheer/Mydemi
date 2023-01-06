import React from 'react'

function Alertmessage(message) {
  return (
    <div><div className="alert alert-warning alert-dismissible fade show" role="alert">
    {message}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div></div>
  )
}

export default Alertmessage