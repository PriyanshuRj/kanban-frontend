export  const styles = {
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow:'scroll',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:"100vh",
      flexWrap : "wrap"
    },
    content: {
      position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba( 255, 255, 255, 0.5 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 7px )',
        overflow: 'none',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        padding : '0',
        // paddingTop: "10rem",
       marginBottom:'4rem',
       marginTop: '4rem'
      },
  }
