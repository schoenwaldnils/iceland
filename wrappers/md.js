import React from 'react'
import PropTypes from 'prop-types';
import Helmet from "react-helmet"
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
}

export default MarkdownWrapper
