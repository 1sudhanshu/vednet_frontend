import {
  Airplay,
  BarChart,
  Box,
  Cloud,
  Command,
  FileText,
  FolderPlus,
  Grid,
  Home,
  Layers,
  Server,
  Users,
} from "react-feather";

const MENUITEMS = [
  {
    title: "Dashboard",
    icon: <Home />,
    url:`${process.env.PUBLIC_URL}/dashboard/enterprise`,
    // menu: [
    //   {
    //     title: "Business",
    //     url: `${process.env.PUBLIC_URL}/dashboard/business`,
    //     type:"link"
    //   },
    //   {
    //     type:"link",
    //     title: "Helpdesk",
    //     url: `${process.env.PUBLIC_URL}/dashboard/help-desk`,
    //   },
    //   {
    //     type:"link",
    //     title: "Social",
    //     url: `${process.env.PUBLIC_URL}/dashboard/social`,
    //   },
    //   {
    //     type:"link",
    //     title: "Enterprise",
    //     url: ``,
    //   },
    // ],
  },
  // {
  //   title: "Widgets",
  //   icon: <Airplay />,
  //   menu: [
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/widgets/general-widgets`,
  //       title: "General",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/widgets/chart-widget`,
  //       type:"link",
  //       title: "Chart",
  //     },
  //   ],
  // },
  // {
  //   title: "UI Kits",
  //   icon: <Box />,
  //   menu: [
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/typography`,
  //       title: "Typography",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/avatars`,
  //       type:"link",
  //       title: "Avatars",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/helper-classes`,
  //       type:"link",
  //       title: "Helper Classes",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/grid`,
  //       type:"link",
  //       title: "Grid",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/tag&pills`,
  //       type:"link",
  //       title: "Tag & Pills",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/progress`,
  //       title: "Progress",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/modal`,
  //       title: "Modal",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/alert`,
  //       title: "Alert",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/popover`,
  //       title: "Popover",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/tooltip`,
  //       title: "Tooltip",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/spinners`,
  //       type:"link",
  //       title: "Spinners",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
  //       type:"link",
  //       title: "Dropdown",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
  //       type:"link",
  //       title: "Accordion",
  //     },
  //     {
  //       title: "Tabs",
  //       menu: [
  //         {
  //           title: "Bootstrap Tabs",
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/ui-kits/tabs/bootstrap-tabs`,
  //         },
  //         {
  //           type:"link",
  //           title: "Line Tabs",
  //           url: `${process.env.PUBLIC_URL}/ui-kits/tabs/line-tabs`,
  //         },
  //       ],
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/navs`,
  //       type:"link",
  //       title: "Navs",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/shadow`,
  //       type:"link",
  //       title: "Shadow",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/ui-kits/lists`,
  //       type:"link",
  //       title: "Lists",
  //     },
  //   ],
  // },
  // {
  //   title: "Bonus UI",
  //   icon: <FolderPlus />,
  //   badge: true,
  //   menu: [
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
  //       type:"link",
  //       title: "Scrollable",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/tree-view`,
  //       type:"link",
  //       title: "Tree View",
        
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`,
  //       title: "Bootstrap Notify",
  //       type: "link",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
  //       title: "Rating",
  //       type:"link",
        
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
  //       title: "Dropzone",
  //       type:"link",
        
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/tour`,
  //       type:"link",
  //       title: "Tour",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/sweet-alert2`,
  //       type:"link",
  //       title: "Sweet Alert2",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/owl-carousel`,
  //       type:"link",
  //       title: "Owl Carousel",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
  //       type:"link",
  //       title: "Ribbons",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
  //       title: "Pagination",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/steps`,
  //       type:"link",
  //       title: "Steps",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
  //       type:"link",
  //       title: "Breadcrumb",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/range-slider`,
  //       type:"link",
  //       title: "Range Slider",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/image-cropper`,
  //       title: "Image Cropper",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/sticky`,
  //       type:"link",
  //       title: "Sticky",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/basic-card`,
  //       type:"link",
  //       title: "Basic Card",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/creative-card`,
  //       type:"link",
  //       title: "Creative Card",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/tabbed-card`,
  //       title: "Tabbed Card",
  //     },
  //     {
  //       title: "Timeline",
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/bonus-ui/timeline`,
  //     },
  //   ],
  // },
  // {
  //   title: "Icons",
  //   icon: <Command />,
  //   menu: [
  //     {
  //       url: `${process.env.PUBLIC_URL}/icons/flag-icons`,
  //       type:"link",
  //       title: "Flag Icons",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/icons/font-awesome-icon`,
  //       type:"link",
  //       title: "Font Awesome Icon",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/icons/ico-icon`,
  //       type:"link",
  //       title: "ICO Icon",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/icons/themify-icon`,
  //       type:"link",
  //       title: "Themify Icon",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/icons/feather-icons`,
  //       title: "Feather Icons",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/icons/whether-icons`,
  //       title: "Whether Icons",
  //     },
  //   ],
  // },

  // {
  //   title: "Buttons",
  //   type:"link",
  //   icon: <Cloud />,
  //   bookmark: true,
  //   url: `${process.env.PUBLIC_URL}/buttons`,
  // },
  {
    title: "Forms",
    icon: <FileText />,
    url: `${process.env.PUBLIC_URL}/form-layout/form-default`,
    type:"link",
    // menu: [
      // {
      //   title: " Form Controls ",
      //   menu: [
      //     {
      //       title: "Form Validation",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/forms-control/form-validation`,
      //     },
      //     {
      //       title: "Basic Input",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/forms-control/base-input`,
      //     },
      //     {
      //       title: "Checkbox & Radio",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/forms-control/radio-checkbox`,
      //     },
      //     {
      //       title: "Input Groups",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/forms-control/input-group`,
      //     },
      //     {
      //       title: "Mega Option",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/forms-control/mega-options`,
      //     },
      //   ],
      // },
      // {
      //   title: "Form Widgets",
      //   menu: [
      //     {
      //       title: "Date picker",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/form-widget/date-picker`,
      //     },
      //     {
      //       type:"link",
      //       title: "Type head",
      //       url: `${process.env.PUBLIC_URL}/form-widget/type-ahead`,
      //     },
      //     {
      //       type:"link",
      //       title: "Date Time Picker",
      //       url: `${process.env.PUBLIC_URL}/form-widget/date-time-picker`,
      //     },
      //     {
      //       title: "Date Rangepicker",
      //       type:"link",
      //       url: `${process.env.PUBLIC_URL}/form-widget/range-picker`,
      //     },
      //     {
      //       type:"link",
      //       title: "TouchSpin",
      //       url: `${process.env.PUBLIC_URL}/form-widget/touch-spin`,
      //     },
      //     {
      //       type:"link",
      //       title: "Select 2",
      //       url: `${process.env.PUBLIC_URL}/form-widget/select-two`,
      //     },
      //     {
      //       type:"link",
      //       title: "Switch",
      //       url: `${process.env.PUBLIC_URL}/form-widget/switch`,
      //     },
      //     {
      //       type:"link",
      //       title: "ClipBoard",
      //       url: `${process.env.PUBLIC_URL}/form-widget/clip-board`,
      //     },
      //   ],
      // },
      // {
      //   title: "Form Layout",
      //   menu: [
      //     {
      //       url: `${process.env.PUBLIC_URL}/form-layout/form-default`,
      //       type:"link",
      //       title: "Form Default",
            
      //     },
      //     {
      //       url: `${process.env.PUBLIC_URL}/form-layout/form-wizard`,
      //       type:"link",
      //       title: "Form Wizard",
      //     },
      //   ],
      // },
    //],
  },
  // {
  //   title: "Tables",
  //   icon: <Server />,
  //   menu: [
  //     {
  //       title: " Reactstrap Tables",
  //       menu: [
  //         {
  //           title: "Basic Tables",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/react-strap-tables/basic-tables`,
  //         },
  //         {
  //           title: "Sizing Tables",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/react-strap-tables/sizing-tables`,
  //         },
  //         {
  //           title: "Border Tables",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/react-strap-tables/border-tables`,
  //         },
  //         {
  //           title: "Styling Tables",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/react-strap-tables/styling-tables`,
  //         },
  //       ],
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/tables/data-table`,
  //       type:"link",
  //       title: "Data Tables",
  //     },
  //   ],
  // },
  // {
  //   title: "Charts",
  //   icon: <BarChart />,
  //   menu: [
  //     {
  //       url: `${process.env.PUBLIC_URL}/charts/apex-chart`,
  //       type:"link",
  //       title: "Apex Chart",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/charts/google-charts`,
  //       type:"link",
  //       title: "Google Charts",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/charts/chat-js`,
  //       title: "ChatJS",
  //     },
  //   ],
  // },
  // {
  //   title: "Sample page",
  //   badge: true,
  //   icon: <Grid />,
  //   url: `${process.env.PUBLIC_URL}/sample-page`,
  // },
  // {
  //   title: "Apps",
  //   icon: <Users />,
  //   menu: [
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/bookmarks`,
  //       type:"link",
  //       title: "Bookmarks",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/contacts`,
  //       type:"link",
  //       title: "Contacts",
  //     },
  //     {
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/apps/tasks`,
  //       title: "Tasks",
  //     },

  //     {
  //       title: "Maps",
  //       menu: [
  //         {
  //           title: "Google Maps",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/maps/Google-maps`,
  //         },
  //         {
  //           title: "Leaflet map",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/maps/leaflet-map`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Email",
  //       menu: [
  //         {
  //           title: "Email App",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/email/email-app`,
  //         },
  //         {
  //           title: "Email Compose",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/email/email-compose`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "ECommerce",
  //       menu: [
  //         {
  //           title: "Product",
  //           bookmark: true,
  //           type:"link",

  //           url: `${process.env.PUBLIC_URL}/ECommerce/Product`,
  //         },
  //         {
  //           title: "Product Page",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/ProductPage/1`,
  //         },
  //         {
  //           title: "Product List",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/ProductList`,
  //         },
  //         {
  //           title: "Payment Details",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/PaymentDetails`,
  //         },
  //         {
  //           title: "Order History",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/OrderHistory`,
  //         },
  //         {
  //           title: "Invoice",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/Invoice`,
  //         },
  //         {
  //           title: "Cart",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/Cart`,
  //         },
  //         {
  //           title: "Wishlist",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/ECommerce/Wishlist`,
  //         },
  //         {
  //           title: "Checkout",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/ECommerce/Checkout`,
  //         },
  //         {
  //           title: "Pricing",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/ECommerce/Pricing`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Gallery",
        
  //       menu: [
  //         {
  //           title: "Gallery",
  //           bookmark: true,
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/gallery/gallery-grid`,
  //         },
  //         {
  //           title: "Gallery Grid With Des",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/gallery/gallery-grid-with-description`,
  //         },
  //         {
  //           title: "Masonry Gallery",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/gallery/masonry-gallery`,
  //         },
  //         {
  //           title: "Masonry With Des",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/gallery/masonry-with-description`,
  //         },
  //         {
  //           title: "Hover Effects",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/gallery/hover-effects`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Blog",
        
  //       menu: [
  //         {
  //           title: "Blog Details",
  //           bookmark: true,
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/apps/blog/blog-details`,
  //         },
  //         {
  //           title: "Blog Single",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/apps/blog/blog-single`,
  //         },
  //         {
  //           title: "Add Post",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/apps/blog/add-post`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Job Search",
  //       menu: [
  //         {
  //           title: "Cards View",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/job/cards-view`,
  //         },
  //         {
  //           title: "List View",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/job/list-view`,
  //         },
  //         {
  //           title: "Job Details",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/job/job-details`,
  //         },
  //         {
  //           title: "Apply",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/job/apply`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Learning",
  //       menu: [
  //         {
  //           title: "Learning List",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/learning/learning-list`,
  //         },
  //         {
  //           title: "Detailed Course",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/apps/learning/detailed-course`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Chat",
  //       menu: [
  //         {
  //           title: "Chat App",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/chat/chat-app`,
  //         },
  //         {
  //           title: "Video Chat",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/chat/video-chat`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Calender",
  //       type:"link",
  //       url: `${process.env.PUBLIC_URL}/apps/calendar`,
  //     },
  //     {
  //       title: "Users",
  //       menu: [
  //         {
  //           title: "User Profile",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/user/user-profile`,
  //         },
  //         {
  //           title: "User Edit",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/user/user-edit`,
  //         },
  //         {
  //           title: "User Cards",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/user/user-cards`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Editors",
  //       menu: [
  //         {
  //           title: "Ck Editor",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/editor/ck-editor`,
  //         },
  //         {
  //           title: "MDE Editor",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/editor/mde-editor`,
  //         },
  //         {
  //           title: "ACE Code Editor",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/editor/ace-code-editor`,
  //         },
  //       ],
  //     },

  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/social-app`,
  //       type:"link",
  //       title: "SocialApp",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/todo`,
  //       type:"link",
  //       title: "To-do",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/FAQ`,
  //       type:"link",
  //       title: "FAQ",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/knowledge-base`,
  //       type:"link",
  //       title: "Knowledgebase",
  //     },
  //     {
  //       url: `${process.env.PUBLIC_URL}/apps/support-ticket`,
  //       type:"link",
  //       title: "Support Ticket",
  //     },
  //   ],
  // },

  // {
  //   title: "Others",
  //   icon: <Layers />,
  //   menu: [
  //     {
  //       title: "Search Pages",
  //       menu: [
  //         {
  //           type:"link",
  //           title: "Search Website",
  //           url: `${process.env.PUBLIC_URL}/others/search-website`,
  //         },
  //         {
  //           title: "Search images",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/others/search-images`,
  //         },
  //         {
  //           title: "Search Video",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/others/search-video`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Error Page",
  //       menu: [
  //         {
  //           title: "Error 400",
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/Others/Error400`,
  //         },
  //         {
  //           title: "Error 401",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/Error401`,
  //         },
  //         {
  //           title: "Error 403",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/Error403`,
  //         },
  //         {
  //           title: "Error 404",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/Error404`,
  //         },
  //         {
  //           title: "Error 500",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/Error500`,
  //         },
  //         {
  //           title: "Error 503",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/Error503`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Authentication",
  //       menu: [
  //         {
  //           title: "Login Sample",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/login`,
  //         },
  //         {
  //           title: "Login With Bg image",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/login-bg-img`,
  //         },
  //         {
  //           title: "Login With Bg Video",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/login-bg-video`,
  //         },
  //         {
  //           title: "Register Simple ",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/register-simple`,
  //         },
  //         {
  //           title: "Register with bg image",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/register-with-bg-image`,
  //         },
  //         {
  //           title: "Register With bg Video ",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/register-With-bg-video`,
  //         },
  //         {
  //           title: "Unlock User",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/unlock-user`,
  //         },
  //         {
  //           title: "Forget Password",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/forget-password`,
  //         },
  //         {
  //           title: "Reset Password ",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/auth/reset-password`,
  //         },
  //         {
  //           title: "Maintence ",
            
  //           type:"link",
  //           url: `${process.env.PUBLIC_URL}/auth/maintenance`,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Coming Soon",
        
  //       menu: [
  //         {
  //           title: "Coming Simple",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/ComingSimple`,
  //         },
  //         {
  //           title: "Coming with Bg Video",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/ComingwithBgVideo`,
  //         },
  //         {
  //           title: "Coming With Bg Image",
  //           type:"link",
            
  //           url: `${process.env.PUBLIC_URL}/Others/ComingWithBgImage`,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default MENUITEMS;
