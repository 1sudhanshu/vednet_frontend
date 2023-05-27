import { Award, Edit, Globe, Headphones, Heart, Share2 } from "react-feather";
import { Awards, Likes, Posts, Shares, Songs, Visits } from "../../../../Constant";

export let SocialProfileData = [
    {
      fontClass: <Heart className="font-primary" />,
      tittle: Likes,
      increase: 15,
    },
    {
      fontClass: <Edit className="font-secondary" />,
      tittle: Posts,
      increase: 10,
    },
    {
      fontClass: <Share2 className="font-success" />,
      tittle: Shares,
      increase: 38,
    },
    {
      fontClass: <Globe className="font-info" />,
      tittle: Visits,
      increase: 38,
    },
    {
      fontClass: <Headphones className="font-warning" />,
      tittle: Songs,
      increase: 27,
    },
    {
      fontClass: <Award className="font-danger" />,
      tittle: Awards,
      increase: 12,
    },
  ];