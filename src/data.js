import { DiCss3, DiWordpress, DiPhotoshop } from "react-icons/di";
import { TiCogOutline } from "react-icons/ti";
import { 
    FaShopify,
    FaFigma ,
    FaHtml5,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
import grayMe from './images/normal-no-bg.jpg';
import thecobblersImg from './images/thecobblers.jpg';
import cgMobileImg from './images/cg-mobile.jpg';
import loopMobileImg from './images/loopMobile.jpg';
import viazizaImg from './images/viaziza-shop.jpg';
import portfolioImg from './images/portfolio.jpg';

export const services = [
    {
        id:1,
        title: 'wordpress theme',
        desc: 'custom theme development, theme customization',
        icon: <><DiWordpress /><FaPhp/></>,
        delay:100
    },
    {
        id:2,
        title: 'shopify theme',
        desc: 'custom theme development, theme customization',
        icon: <><FaShopify /><FaJsSquare /></>,
        delay:200
    },
    {
        id:3,
        title: 'web pages',
        desc: 'figma to web pages, PSD to web pages',
        icon: <><FaFigma /><FaHtml5 /><DiCss3 /> <FaJsSquare /><DiPhotoshop/></>,
        delay:500
    },
    {
        id:4,
        title: 'shopify app',
        desc: 'shopify custom app development',
        icon: <><FaShopify /><TiCogOutline /></>,
        delay:100
    },
    {
        id:5,
        title: 'wordpress plugins',
        desc: 'wordpress plugins creation',
        icon: <><DiWordpress /><TiCogOutline /></>,
        delay:300
    },
    {
        id:6,
        title: 'Node.js, React',
        desc: 'React static sites, Node Apps ans Api',
        icon: <><FaNodeJs /><FaReact /></>,
        delay:500
    }
]

export const social = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/jean-paul-nyobe-a42109202/',
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        url: 'https://github.com/paul-nyobe',
        icon: <FaGithub />,
    },
]

export const portfolio = [
    {
        id: 1,
        url: 'https://thecobblers.com/',
        img: thecobblersImg,
        name: 'TheCobblers',
        category: 'Shopify, Node.js, php',
        tasks: ['Theme customization', 'Custom app', 'Node.js api'],
        delay: 100
    },
    {
        id: 2,
        url: 'https://cg-mobile.com/',
        img: cgMobileImg,
        name: 'Cg-mobile',
        category: 'shopify',
        tasks: ['Theme customization'],
        delay: 300
    },
    {
        id: 3,
        url: 'https://loopmobile.com.au/',
        img: loopMobileImg,
        name: 'Loop mobile',
        category: 'shopify, Node.js',
        tasks: ['Theme customization', 'Custom app with Node.js'],
        delay: 500
    },
    {
        id: 4,
        url: 'https://viaziza.com/en/shop/',
        img: viazizaImg,
        name: 'Viaziza Tech',
        category: 'wordpress, plugin, woocommerce',
        tasks: ['Custom Woocommerce payments'],
        delay: 100
    },
    {
        id: 5,
        url: 'https://paul-nyobe.github.io/portfolio/',
        img: portfolioImg,
        name: 'Paulfolio',
        category: 'react.js, html, css, js',
        tasks: ['Personal portfolio'],
        delay: 300
    },
]

export const general = {
    name: 'paul nyobe',
    title: 'web developer',
    phone: '+237695423031',
    freelanceText: "I'd be more than happy to offer you my services, so feel free to contact me for an interview. I look forward to hearing from you.",
    email: 'paulnyobe10@gmail.com',
    skills: ['Web Developer', 'Shopify Expert', 'Wordpress Expert'],
    desc: "Hello 👋 I'm Paul,a Cameroonian-based professional developer . I specialize in Shopify and WordPress! My focus is on developing practical business solutions, using a wide array of mature and proven plugins, components and 3rd party solutions to solve common small business website requirements",
    introImg: grayMe,

}
