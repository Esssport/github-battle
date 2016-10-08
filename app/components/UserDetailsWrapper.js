import React from 'react';
let PropTypes = React.PropTypes;

export function UserDetailsWrapper(props) {
    return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
    );
}

