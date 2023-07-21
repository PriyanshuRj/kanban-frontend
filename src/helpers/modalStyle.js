export  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow:'scroll',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
    
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding : '0',
        background: 'rgba( 255, 255, 255, 0.5 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 7px )',
        overflow: 'none',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
       marginBottom:'10rem'
      },
  }