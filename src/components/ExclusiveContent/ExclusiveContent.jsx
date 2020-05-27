import React, {Component} from "react";
import { Container } from "../../../node_modules/@material-ui/core";
import './ExclusiveContent.module.css'

export default class ExclusiveContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            whoInfo: [],
            news: []
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
            // for(var x = 0; x <= DATA.items.length; x++){
                this.setState({ news:
                    {
                        title: data.querySelectorAll('item title')
                    }
                })  
    
            // }
            
            console.log(this.state.news.title[0].innerHTML)

        });


    }

    render(){

        const { whoInfo, news } = this.state;
        // console.log(news.title[0])
        return(

            <div>
                {/* this will be displayed as the WHO's web iformation */}
                <Container>
                    <h1>{whoInfo.title}</h1>
                    <p>{whoInfo.description}</p>
                    <p>For more information, please visit their official website on this <a href={whoInfo.link}>here</a>. </p>
                </Container>

                <hr/>
                {/* below should display all the items, which is the news */}

                <ul>
                    {
                          //byt this we are getting news in list format and i tried map data too
                                  //but it is showing title and link is missing i think your having that code of 
                                  //you runned for jquery after mounting that code here in componendidmount i am sure that will work if 
                                  // not then we will work out 
                                //   news.map(x => <li key={x}>{x}</li>)
                                    
                                // whoInfo.map((x,i) => console.log( x.link[i]))
                    }
                </ul>
                
            </div>
        );
    }
}
