import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box
    return <Component {...rest}>{children}</Component>
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as: propTypes.string,
    children: PropTypes.node.isRequired
}