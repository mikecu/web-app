import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import FeedParser from 'feedparser';
import request from 'request';
import { Grid, Row, Col, PanelGroup, Panel, Pagination } from 'react-bootstrap';
import "./News.css";


let self;

class News extends React.Component {


  constructor(props){
    super(props)
    
    this.state = {
      feed:[],
      activePage: 1,
      itemsPerPage: 10
    }
    self = this;
    this.handleSelect = this.handleSelect.bind(this);
  }

  getFeed() {
    var req = request('http://www.espncricinfo.com/rss/content/story/feeds/5.xml')
    var feedparser = new FeedParser();
     
    req.on('error', function (error) {
    });
     
    req.on('response', function (res) {
      var stream = this; 
     
      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });
     
    feedparser.on('error', function (error) {
    });
     
    
    feedparser.on('readable', function () {
      var stream = this; 
      var meta = this.meta; 
      var item;
      console.log("before while");
      while (item = stream.read()) {
        console.log(item);
        self.setState({ feed: [...self.state.feed, item]});
        console.log("feed is", self.state.feed);
      }
    }); 
  }

  componentDidMount() {
    this.getFeed();
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    
    if (!this.state.feed.length) {
      return (
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      );
    }

    let indexOfLastItem = this.state.activePage * this.state.itemsPerPage;
    console.log("indexOfLastItem ", indexOfLastItem);
    let indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    console.log("indexOfFirstItem ", indexOfFirstItem);
    const currentItems = this.state.feed.slice(indexOfFirstItem, indexOfLastItem);
    console.log("currentItems ", currentItems);
    

    let feed = currentItems.map((feedItem, index) => {
      return (
        <Panel collapsible header={feedItem.title} eventKey={index}>{feedItem.description}</Panel>

        );
    });
    
    console.log("items is ", this.state.feed.length/this.state.itemsPerPage);

    return (
      <Grid>  
        <Row className="show-grid">
          <Col md={6}>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'BLACKCAPS'
              }}
              options={{
                username: 'BLACKCAPS',
                height: '400'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </Col>
          <Col md={6}>
            <PanelGroup>
              {feed}
            </PanelGroup>
            <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              items={Math.ceil(this.state.feed.length/this.state.itemsPerPage)}
              maxButtons={5}
              activePage={this.state.activePage}
              onSelect={this.handleSelect}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
    

  export default News;