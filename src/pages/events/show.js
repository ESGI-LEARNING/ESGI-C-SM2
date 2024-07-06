import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';
import { FormFilter } from '../../components/form/formFilter.js';
import { Component } from '../../componennts/Component.js';
export class EventDetails extends Component {
    render() {
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    props: {
                        class: 'main-show',
                    },
                    children: [
                        {
                            type: 'div',
                            props: {
                                class: 'content-show',
                            },
                            children: [
                                {
                                    type: 'div',
                                    children: [
                                        {
                                            type: 'h2',
                                            children: [
                                                {
                                                    type: 'TEXT_NODE',
                                                    content:
                                                        'Arena paris sud 6',
                                                },
                                            ],
                                        },
                                        {
                                            type: 'p',
                                            children: [
                                                {
                                                    type: 'TEXT_NODE',
                                                    content:
                                                        "Le football, littéralement \"le jeu de ballon au pied\", est un sport d'origine britannique codifié au XIXe siècle et devenu le plus populaire au monde. Plus qu'un simple jeu, il prône des valeurs de camaraderie, de respect et de persévérance. Le football est un sport complet alliant technique, endurance physique et stratégie mentale. Les joueurs doivent maîtriser diverses compétences tout en travaillant en équipe et en s'adaptant aux tactiques adverses",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'div',
                                    children: [
                                        {
                                            type: 'time',
                                            children: [
                                                {
                                                    type: 'TEXT_NODE',
                                                    content: '12/12/2021',
                                                },
                                            ],
                                        },
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
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'div',
                            props: {
                                id: 'map',
                            },
                            children: [],
                        },
                    ],
                },
                Footer,
            ],
            events: {
                mounted: [
                    async function () {
                        await Leaflet();
                    },
                ],
            },
        };
    }
}
