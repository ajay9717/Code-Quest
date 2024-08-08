import React from 'react'

function Avatar({
    children,
    backgroundColor,
    py,
    px,
    color,
    borderRadius,FontSize,cursor

}) {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        color: color || "black",
        borderRadius,
        FontSize,
        textalign : "center",
        cursor : cursor || null        
    }
  return (
    <div style = {style}>{children}</div>
  )
}

export default Avatar