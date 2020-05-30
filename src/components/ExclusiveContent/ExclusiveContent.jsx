import React, {Component} from "react";
import { Container } from "../../../node_modules/@material-ui/core";
import './ExclusiveContent.module.css'

export default class ExclusiveContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            whoInfo: [],
            news: [],
            newsData: 
                {
                    title: []
                }
            
        }
    }

    componentDidMount(){
        const settings = {
            "url": "https://www.who.int/rss-feeds/news-english.xml",
            "method": "GET",
            "timeout": 0,
          };
        const RSS_URL = settings.url;

        fetch(RSS_URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {

            // used to web scrape the information needed
            this.setState({ data: 
                {
                    title: data.querySelectorAll('title'),
                    link: data.querySelectorAll('link'),
                    description: data.querySelectorAll('description'),
                    items: data.querySelectorAll('item')
                }
            })

            
            // setting an array to be used and displayed on the web page as WHO's web information
            const DATA = this.state.data;
            this.setState({ whoInfo: 
                {
                    title: DATA.title[0].innerHTML,
                    description: DATA.description[0].innerHTML,
                    link: DATA.link[0].innerHTML
                }
            })


            console.log(DATA.items[0].querySelector('title').innerHTML) //shows the first title
            console.log(DATA.items.length) //shows 25

            const NEWS = DATA.items;
                this.setState({ news:
                    {
                        id: data.querySelectorAll('item guid'),
                        title: data.querySelectorAll('item title'),
                        pubDate: data.querySelectorAll('item pubDate'),
                        link: data.querySelectorAll('item link'),
                        description: data.querySelectorAll('item description'),
                        content: data.querySelectorAll('item content')
                    }
                })  
            
            // console.log(this.state.news.title)
            const NEWSTITLE = this.state.news.title;
            [...this.state.news.title].map(x => this.state.newsData.title.push(x.innerHTML))
            // this.state.news = ;
            
            // this.state.news.title
            

            // console.log(this.state.newsData.title)
            // console.log(this.state.news.title)

        });


    }

    render(){

        const { whoInfo, news, newsData } = this.state;
        console.log(newsData.title)
        return(

            <div>
                {/* this will be displayed as the WHO's web iformation */}
                <Container>
                    <h1>{whoInfo.title}</h1>
                    <p>{whoInfo.description}</p>
                    <p>For more information, please visit their official website on this <a href={whoInfo.link}>here</a>. </p>
                

                <hr/>
                {/* below should display all the items, which is the news */}

                <ul>
                    {
                        // news.map(x => console.log(x))
                          //byt this we are getting news in list format and i tried map data too
                                  //but it is showing title and link is missing i think your having that code of 
                                  //you runned for jquery after mounting that code here in componendidmount i am sure that will work if 
                                  // not then we will work out 
                                    
                    

                        newsData.title.map(x => <li key={x}>{x}</li>)
                    }
                </ul>
                </Container>
            </div>
        );
    }
}
