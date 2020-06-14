import React, {Component} from "react";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './ExclusiveContent.module.css'


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
        });
    }

   
    render(){
    
        const { whoInfo, news } = this.state;

        return(
            
            <div className={styles.newsContainer}>
                {/* this will be displayed as the WHO's web iformation */}
                    <div className={styles.newsHeader}>
                        <h2>{whoInfo.title}</h2>
                        <p>{whoInfo.description}</p>
                        <p>For more information, please visit their official website on this <a href={whoInfo.link}>here</a>. </p>
                    </div>

                <hr/>

                {/* below this line will show the result of thew news articles */}
                <ul className={styles.newsList}>
                    {
                        news.map(x => 
                            
                            <div key={x.id} className={styles.newsArticleContainer}>
                                <li>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <div className={styles.PanelSummary}>
                                            <h3 className={styles.newsTitle}>{x.title}</h3> {/* news title */}
                                            <p>{x.pubDate}</p> {/* published date and time */}    
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={styles.expandedPanel}>
                                    <div className={styles.contentContainer}>
                                        <p>Original Source: Click <a href={x.link}>Here</a></p>
                                        {/* news contents */}
                                        <div className={styles.newsContent} dangerouslySetInnerHTML={{__html: x.description}}></div>
                                    </div>
                                    </ExpansionPanelDetails>
                                    
                                </ExpansionPanel>
                                </li>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}