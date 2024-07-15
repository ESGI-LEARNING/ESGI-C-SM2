import { Component } from '../Component.js'

export class Cards extends Component {
    constructor(props) {
         super(props)
    }

   render() {
       return {
           type: 'li',
           props: {
               class: 'card',
           },
           children: [
               {
                   type: 'a',
                   props: {
                       href: this.props.url,
                   },
                   events: {
                       click: [
                           function (event) {
                               event.preventDefault();
                               history.pushState(null, null, '/events/:1');
                           },
                       ],
                   },
                   children: [
                       {
                           type: 'img',
                           props: {
                               src: this.props.image,
                               alt: '',
                           },
                       },
                       {
                           type: 'div',
                           props: {
                               class: 'content',
                           },
                           children: [
                               {
                                   type: 'span',
                                   props: {
                                       class: 'pill',
                                   },
                                   children: [
                                       {
                                           type: 'TEXT_NODE',
                                           content: 'FootBall',
                                       },
                                   ],
                               },
                               {
                                   type: 'h3',
                                   children: [
                                       {
                                           type: 'TEXT_NODE',
                                           content: this.props.title,
                                       },
                                   ],
                               },
                               {
                                   type: 'p',
                                   children: [
                                       {
                                           type: 'TEXT_NODE',
                                           content: this.props.description
                                       },
                                   ],
                               },
                               {
                                   type: 'time',
                                   children: [
                                       {
                                           type: 'TEXT_NODE',
                                           content: '12/12/2021',
                                       },
                                   ],
                               },
                           ],
                       },
                   ],
               },
           ],
       }
   }
}
