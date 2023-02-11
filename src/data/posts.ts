import theresaProfilePic from "../assets/images/theresa.png";
import marvinProfilePic from "../assets/images/marvin.png";
import { IPost } from "../models/post";

export const posts: IPost[] = [
  {
    author: {
      name: "Theresa Webb",
      profilePic: theresaProfilePic,
    },
    createdAt: "5mins ago",
    updatedAt: null,
    emotion: "👋",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
  },
  {
    author: {
      name: "Marvin McKinney",
      profilePic: marvinProfilePic,
    },
    createdAt: "8mins ago",
    updatedAt: "2mins ago",
    emotion: "😞",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 50,
  },
];
