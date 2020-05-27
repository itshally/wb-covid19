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

            this.setState({ data: 
                {
                    title: data.querySelectorAll('title'),
                    link: data.querySelectorAll('link'),
                    description: data.querySelectorAll('description'),
                    items: data.querySelectorAll('item')
                }
            })

            console.log(this.state.data.description)
            
            // THIS DISPLAYS THE TITLE ON THE CONSOLE
            console.log(this.state.data.title[0].innerHTML);
            console.log(this.state.whoInfo.description)
            
            // this.state.whoInfo.forEach((x) => {
                // this.setState({
                //     whoInfo: this.state.whoInfo.push(x)
                // })
                // this.state.data
                
            // })
            const WHOINFO = this.state.data;
            this.setState({ whoInfo: 
                {
                    title: WHOINFO.title[0].innerHTML,
                    description: WHOINFO.description[0].innerHTML
                }
            })

            console.log(this.state.whoInfo.description)
            // console.log(this.state.whoInfo)
            // this.state.news.forEach( x => {

            //     // console.log(x.innerHTML)
            //     this.state.news.push(
            //         x.innerHTML
            //     )

            // })
            
        });


    }

    render(){
        // const {title, link} = this.state.data;
        
        // console.log(this.state.news)

        const { data, whoInfo } = this.state;
        console.log(whoInfo)
        return(

            <div>
                {/* this will be displayed as the WHO's web iformation */}
                <Container>
                    {/* { */}
                        <h1>{whoInfo.title}</h1>
                        <p>{whoInfo.description}</p>
                    {/* } */}
                </Container>


                <ul>
                    {
                          //byt this we are getting news in list format and i tried map data too
                                  //but it is showing title and link is missing i think your having that code of 
                                  //you runned for jquery after mounting that code here in componendidmount i am sure that will work if 
                                  // not then we will work out 

                                //   whoInfo.map(x => <li key={x.title}>{x.title}</li>)

                                // whoInfo.map((x,i) => console.log( x.link[i]))
                    }
                </ul>
                
            </div>
        );
    }
}
