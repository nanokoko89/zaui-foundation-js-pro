import React from 'react'
export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state={ hasError:false, error:null } }
  static getDerivedStateFromError(error){ return { hasError:true, error } }
  componentDidCatch(error, info){ console.error('[ErrorBoundary]', error, info) }
  render(){
    if(this.state.hasError){
      return <div style={{padding:16}}><h3>Có lỗi xảy ra</h3>
        <pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error)}</pre></div>
    }
    return this.props.children
  }
}
