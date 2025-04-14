import React from 'react'

const CardLayout = ({ backgroundImage, overlayColor, gradientOverlay, children, className }) => {
  // Determine overlay style based on gradient or solid color
  const overlayStyle = gradientOverlay ? {
    background: gradientOverlay
  } : {
    backgroundColor: overlayColor || 'rgba(29, 57, 81, 0.8)'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay with gradient or solid color */}
      <div 
        className="absolute inset-0"
        style={overlayStyle}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}

export default CardLayout