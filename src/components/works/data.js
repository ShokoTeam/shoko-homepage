import BlogIcon from "./components/blog-icon"
import { FaReact } from 'react-icons/fa';
import * as DevIcon from "react-icons/di"

export const works = [
  {
    id: 1,
    image: '/assets/fores.jpg',
    github: "https://github.com/terrnit",
    title: 'Fores',
    info: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia ',
    tools: [
      {
        id: 1,
        icon: <BlogIcon><FaReact /></BlogIcon>,
      },
      {
        id: 2,
        icon: <BlogIcon> <DevIcon.DiHtml5 /></BlogIcon>,
      },
      {
        id: 3,
        icon: <BlogIcon><DevIcon.DiCss3 /></BlogIcon>,
      },


    ]
  },
]




