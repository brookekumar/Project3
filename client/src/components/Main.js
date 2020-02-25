//concept https://dribbble.com/shots/2493845-ToFind-Transition-Test
class Card extends React.Component{
  
  constructor(props){
    super(props)
    
    this.state = {
      expanded: false,
      loading: true,
      fullscreen: false,
      colors: []
    }
  }
  
  handleClick(e){
    if(this.state.fullscreen) return;
    this.setState({
      expanded: !this.state.expanded
    })
  }
  
  handleImageLoaded(e){
    let node = ReactDOM.findDOMNode(e.target)
    console.log('image loaded', node)
    let image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = e => {
      
      let colorThief = new ColorThief();
      let colors = colorThief.getPalette(image, 2);
      this.setState({loading: false, colors}, ()=>{
        if(this.props.onColors) this.props.onColors(this.state.colors)
        
        //demo
        //setTimeout(this.handleClick.bind(this), 500)
      })
    }
    image.src = node.src + '?t=' + Date.now()
  }
  
  render(){
    const { desc, content, actions, title, image, ...others } = this.props;
    return(
      <div className={`card ${this.state.fullscreen ? 'fullscreen' : ''} ${this.state.expanded ? 'active' : ''} z-depth-2`}>
        {
          this.state.fullscreen ? 
            <div className="card-close" onClick={()=>this.setState({fullscreen: false, expanded: true})}>
              <i className="material-icons">close</i>
            </div> : false
        }
        
        <div className="card-image" onClick={this.handleClick.bind(this)}>
          {
            this.state.loading ? <div className="image-loading"><i className="fa fa-circle-o-notch fa-spin fa-4x fa-fw blue-text"></i>
<span className="sr-only">Loading...</span></div> : false
          }
          <img ref="img" className={ this.state.fullscreen ? '' : "z-depth-2"} src={image} onLoad={this.handleImageLoaded.bind(this)} crossOrign="Anonymous" />
          <span className="card-title">{ this.state.loading ? '' : title }</span>
        </div>
        <div className="card-content" onClick={()=>this.setState({expanded: false, fullscreen: true})}>
          { this.state.fullscreen ? content : desc }
        </div>
        <div className="card-action" onClick={()=>this.setState({expanded: false, fullscreen: true})}>
          { actions }
        </div>
      </div>
    )
  }
}

const Avatars = (props) => {
  return (
    <div className="avatars">
      {
        props.data.map( (avatar, i) => {
          return (<div key={i} className="avatar">
            <img src={avatar.src} alt={avatar.label} />
          </div>)
        })
      }
    </div>
  )
}

const DetailContent = (props) => {
  return (
    <ul className="collection comments">
      {
        props.data.map( (content, i) => {
          return (
            <li className="collection-item comment-item">
              <div className="comment-header">
                <div className="chip">
                  <img src={content.avatar} alt="Contact Person" />
                  {content.name}
                </div>
                <span className="comment-header_time">{content.time}</span>
                <span className="comment-header_action"><i className={`material-icons comment-icon ${content.liked ? 'blue-text' : ''}`}>thumb_up</i></span>
              </div>
              <div className="comment-body">
                <p>{content.comments}</p>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

ReactDOM.render(
  <Card
    title="Card Title"
    image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/138980/photo-1431512284068-4c4002298068.jpg"
    desc={
      <p>I am a very simple card. I am good at containing small bits of information.</p>
    }
    content={
      <DetailContent 
        data={[
          {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
            name: 'John Steven',
            comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: 'NOV 18',
            liked: false
          },
          {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rssems/128.jpg',
            name: 'Bro John',
            comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: 'NOV 18',
            liked: true
          },
          {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
            name: 'Mai Tai',
            comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: 'NOV 18',
            liked: false
          },
          {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
            name: 'Jenny La',
            comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: 'NOV 18',
            liked: true
          },
        ]}
      />
    }
    actions={
      <div>
      <Avatars data={[
        {
          src: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
          label: 'John'
        },
        {
          src: 'https://s3.amazonaws.com/uifaces/faces/twitter/rssems/128.jpg',
          label: 'John'
        },
        {
          src: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
          label: 'John'
        },
        {
          src: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
          label: 'John'
        }
      ]} />
      <i className="material-icons right">list</i>
      </div>
    }
    onColors={ colors => $('.container').css('background', `linear-gradient(to bottom,  rgba(${colors[0].join(',')},.5) 0%,rgba(${colors[1].join(',')},.5) 100%)`) }
/>, 
document.getElementById('test'));
