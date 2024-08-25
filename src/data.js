import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", social: "twitter" },
    { id: 2, href: "https://www.twitter.com", social: "facebook" },
    { id: 3, href: "https://www.twitter.com", social: "squarespace" },
]

export const services = [
    {
        id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'china',
        duration: 6,
        cost: 2100,
    },
    {
        id: 2,
        image: tour2,
        date: 'October 1th, 2020',
        title: 'best of java',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'indonesia',
        duration: 11,
        cost: 1400,
    },
    {
        id: 3,
        image: tour3,
        date: 'September 15th, 2020',
        title: 'explore hong kong',
        info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        location: 'hong kong',
        duration: 8,
        cost: 5000,
    }
]