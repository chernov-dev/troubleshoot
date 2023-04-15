import React from 'react'

const Mailto = ({ className, email, subject, body, children }) => {
    return (
      <a className={className} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

export default Mailto;