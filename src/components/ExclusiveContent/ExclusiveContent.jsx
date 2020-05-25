import React, {Component} from "react";
import { Container } from "../../../node_modules/@material-ui/core";
import './ExclusiveContent.module.css'

export default class ExclusiveContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
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

            this.setState({data: 
                {
                    title: data.querySelectorAll('title'),
                    link: data.querySelectorAll('link')
                }
            })

            
            // THIS DISPLAYS THE TITLE ON THE CONSOLE
            console.log(this.state.data.title[0].innerHTML);

            this.state.data.title.forEach( x => {

                // console.log(x.innerHTML)
                this.state.news.push(
                    x.innerHTML
                )

            })

            
        });

    }

    render(){
        const {title, link} = this.state.data;
        
        console.log(this.state.news)

        const { news } = this.state;
        console.log(news)


        return(
            
            <div>
                
                <ul>
                    {
                         news.map(x => <li key={x}>{x}</li>) //byt this we are getting news in list format and i tried map data too
                                  //but it is showing title and link is missing i think your having that code of 
                                  //you runned for jquery after mounting that code here in componendidmount i am sure that will work if 
                                  // not then we will work out 
                    }
                </ul>
                
            </div>
        );
    }
}
