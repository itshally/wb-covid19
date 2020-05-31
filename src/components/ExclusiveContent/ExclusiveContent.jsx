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
            newsData: []
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


            // this.setState({ news:
            //     [{
            //         id: data.querySelectorAll('item guid'),
            //         title: data.querySelectorAll('item title'),
            //         pubDate: data.querySelectorAll('item pubDate'),
            //         link: data.querySelectorAll('item link'),
            //         description: data.querySelectorAll('item description'),
            //         content: data.querySelectorAll('item content')
            //     }]
            // })  

            // console.log(this.state.data.items);
            
                // this.state.news.forEach(
                    this.setState({ news: [...this.state.data.items].map( x => 
                        ({
                            id: x.querySelector('guid').innerHTML,
                            title: x.querySelector('title').innerHTML,
                            pubDate: x.querySelector('pubDate').innerHTML,
                            link: x.querySelector('link').innerHTML,
                            description: x.querySelector('description').textContent
                        })
                        
                        )
                    })  
                // )
            
            
            // console.log(this.state.news)
            

            // this.setState({ newsData: {
            //     id: [...this.state.news.id].filter(x => this.state.newsData.id.push(x)),
            //     title: [...this.state.news.title].filter(x => this.state.newsData.title.push(x)),
            //     pubDate: [...this.state.news.pubDate].filter(x => this.state.newsData.pubDate.push(x))
            // }})

            console.log(this.state.newsData.id)
            console.log(this.state.news[0].description.textContent)
        });


    }

   
    render(){
    
        const { whoInfo, news } = this.state;
        let parser = new DOMParser();

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
                                    
                    
                        // title now shows on the first load of app
                        
                    news.map(x => <li key={x.id}>
                        
                        <a href={x.link}><h2>{x.title}</h2></a> - {x.pubDate}
                                {/* {x.description} */}
                                {/* {console.log(x.description)} */}
                                <div dangerouslySetInnerHTML={{__html: x.description}}>
                                </div>
                        </li>)
                    }
                </ul>
                </Container>
            </div>
        );
    }
}
