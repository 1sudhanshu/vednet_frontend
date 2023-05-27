import { Facebook, Follower, Google, Like, Post, Twitter, linkedin } from "../../../Constant";

export let SocialMeadiaDatas = [
  {
    icon: <i className="fa fa-facebook font-primary" />,
    tittle: Facebook,
    childrenRow: [
      { number: 6589, colClass: "text-center b-r-light", span: Post },
      { number: 75269, colClass: "text-center", span: Like },
    ],
  },
  {
    icon: <i className="fa fa-twitter font-primary" />,
    tittle: Twitter,
    childrenRow: [
      { number: 6589, colClass: "text-center b-r-light", span: Post },
      { number: 75269, colClass: "text-center", span: Follower },
    ],
  },
  {
    icon: <i className="fa fa-linkedin font-primary" />,
    tittle: linkedin,
    childrenRow: [
      { number: 1234, colClass: "text-center b-r-light", span: Post },
      { number: 4369, colClass: "text-center", span: linkedin },
    ],
  },
  {
    icon: <i className="fa fa-google-plus font-primary" />,
    tittle: Google ,
    childrenRow: [
      { number: 369, colClass: "text-center b-r-light", span: Post },
      { number: 3458, colClass: "text-center", span: Follower },
    ],
  },
];
