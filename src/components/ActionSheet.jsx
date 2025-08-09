import React from 'react'
import Sheet from 'zmp-ui/sheet'
import Button from 'zmp-ui/button'

export default function ActionSheet({
  visible, title, onClose, afterClose, actions = [],
  maskClosable = true, zIndex, unmountOnClose, className, style,
}) {
  return (
    <Sheet visible={visible} onClose={onClose} afterClose={afterClose}
           title={title} maskClosable={maskClosable} zIndex={zIndex}
           unmountOnClose={unmountOnClose} className={className} style={style}>
      <div style={{ display: 'grid', gap: 8 }}>
        {actions.map((a, i) => (
          <Button key={a.key ?? String(i)} highLight={a.highLight} danger={a.danger}
                  disabled={a.disabled}
                  onClick={(e) => { a.onClick?.(e); if (a.close) onClose?.(e) }}>
            {a.text}
          </Button>
        ))}
      </div>
    </Sheet>
  )
}
