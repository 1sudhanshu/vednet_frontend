import { Progress } from "reactstrap";
import { dynamicImage } from "../../../Service/index";
import { Image } from "../../../AbstractElements";

export const TicketData = [
  {
    id: 1,
    title: "Order",
    num: 2563,
    class: "progress-bar bg-primary",
  },
  {
    id: 2,
    title: "Pending",
    num: 8943,
    class: "progress-bar bg-secondary",
  },
  {
    id: 3,
    title: "Running",
    num: 2500,
    class: "progress-bar bg-warning",
  },
  {
    id: 4,
    title: "Smooth",
    num: 2060,
    class: "progress-bar bg-info",
  },
  {
    id: 5,
    title: "Done",
    num: 5600,
    class: "progress-bar bg-success",
  },
  {
    id: 6,
    title: "Cancel",
    num: 2560,
    class: "progress-bar bg-danger",
  },
];

export const supportData = [
  {
    id: 1,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/5.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 alig n-self-center">
          <div>Airi Satou</div>
        </div>
      </div>
    ),
    name: "Airi Satou",
    position: "Accountant",
    salary: "$162,700",
    office: "Tokyo",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "55%" }}
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    ),
    extn: 5407,
    email: "a.satou@datatables.net",
    experience: "1 Year",
  },
  {
    id: 2,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/7.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Ashton Cox</div>
        </div>
      </div>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    salary: "$86,000",
    office: "San Francisco",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={60} color="danger" />
      </div>
    ),
    extn: 1562,
    email: "a.cox@datatables.net",
    experience: "1 Year",
  },
  {
    id: 3,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/6.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Bradley Greer</div>
        </div>
      </div>
    ),
    name: "Bradley Greer",
    position: "Software Engineer",
    salary: "$132,000",
    office: "London",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={30} color="primary" />
      </div>
    ),
    extn: 2558,
    email: "b.greer@datatables.net",
    experience: "4 Year",
  },
  {
    id: 4,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/11.png")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Brielle Williamson</div>
        </div>
      </div>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    salary: "$372,000",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={55} color="info" />
      </div>
    ),
    extn: 4804,
    email: "b.williamson@datatables.net",
    experience: "2 Months",
  },
  {
    id: 5,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/4.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Caesar Vance</div>
        </div>
      </div>
    ),
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    salary: "$106,450",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={20} color="success" />
      </div>
    ),
    extn: 8330,
    email: "c.vance@datatables.net",
    experience: "5 Years",
  },

  {
    id: 6,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/1.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Cedric Kelly</div>
        </div>
      </div>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    salary: "$433,060",
    office: "Edinburgh",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={50} color="success" />
      </div>
    ),
    extn: 6224,
    email: "c.kelly@datatables.net",
    experience: "1 Year",
  },

  {
    id: 7,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/9.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Charde Marshall</div>
        </div>
      </div>
    ),
    name: "Charde Marshall",
    position: "Regional Director	",
    salary: "$470,600",
    office: "San Francisco",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={80} color="secondary" />
      </div>
    ),
    extn: 6741,
    email: "c.marshall@datatables.net",
    experience: "3 Year",
  },

  {
    id: 8,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/8.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Colleen Hurst</div>
        </div>
      </div>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    salary: "$205,500",
    office: "San Francisco",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={100} color="info" />
      </div>
    ),
    extn: 6224,
    email: "c.hurst@datatables.net",
    experience: "2 Year",
  },

  {
    id: 9,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/2.png")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Dai Rios</div>
        </div>
      </div>
    ),
    name: "Dai Rios",
    position: "Personnel Lead",
    salary: "$217,500",
    office: "Edinburgh",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={24} color="success" />
      </div>
    ),
    extn: 2290,
    email: "d.rios@datatables.net",
    experience: "4 Year",
  },

  {
    id: 10,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/11.png")}
          alt="Generic placeholder image"
        />
        <div className="align-self-center">
          <div>Garrett Winters</div>
        </div>
      </div>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    office: "Tokyo",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={40} color="warning" />
      </div>
    ),
    extn: 8422,
    email: "g.winters@datatables.net",
    experience: "1 Year",
  },

  {
    id: 11,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/6.jpg")}
          alt="Generic placeholder image"
        />
        <div className="align-self-center">
          <div>Gloria Little</div>
        </div>
      </div>
    ),
    name: "Gloria Little",
    position: "Systems Administrator",
    salary: "$237,500",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={40} color="secondary" />
      </div>
    ),
    extn: 1721,
    email: "g.little@datatables.net",
    experience: "4 Year",
  },

  {
    id: 12,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/2.png")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Haley Kennedy</div>
        </div>
      </div>
    ),
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    salary: "$313,500",
    office: "London",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={15} color="success" />
      </div>
    ),
    extn: 3597,
    email: "h.kennedy@datatables.net",
    experience: "3 Year",
  },

  {
    id: 13,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/7.jpg")}
          alt="Generic placeholder image"
        />
        <div className="align-self-center">
          <div>Herrod Chandler</div>
        </div>
      </div>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    salary: "$137,500",
    office: "San Francisco",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={50} color="success" />
      </div>
    ),
    extn: 9608,
    email: "h.chandler@datatables.net",
    experience: "2 Year",
  },

  {
    id: 14,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/11.png")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Jena Gaines</div>
        </div>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    salary: "$90,560",
    office: "London",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={80} color="warning" />
      </div>
    ),
    extn: 3814,
    email: "j.gaines@datatables.net",
    experience: "2 Year",
  },
  {
    id: 15,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/9.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Jenette Caldwell</div>
        </div>
      </div>
    ),
    name: "Jenette Caldwell",
    position: "Development Lead",
    salary: "$345,000",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={80} color="warning" />
      </div>
    ),
    extn: 1937,
    email: "j.caldwell@datatables.net",
    experience: "4 Year",
  },

  {
    id: 16,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/4.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Michael Silva</div>
        </div>
      </div>
    ),
    name: "Michael Silva",
    position: "Marketing Designer",
    salary: "$198,500",
    office: "London",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={20} color="primary" />
      </div>
    ),
    extn: 1581,
    email: "m.silva@datatables.net",
    experience: "3 Year",
  },
  {
    id: 17,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/5.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Paul Byrd</div>
        </div>
      </div>
    ),
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    salary: "$725,000",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={20} color="primary" />
      </div>
    ),
    extn: 3059,
    email: "p.byrd@datatables.net",
    experience: "4 Year",
  },
  {
    id: 18,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/12.png")}
          alt="Generic placeholder image"
        />
        <div className=" flex-grow-1 align-self-center">
          <div>Quinn Flynn</div>
        </div>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    salary: "$342,000",
    office: "Edinburgh",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={10} color="success" />
      </div>
    ),
    extn: 9497,
    email: "q.flynn@datatables.net",
    experience: "3 Year",
  },
  {
    id: 19,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/8.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Rhona Davidson</div>
        </div>
      </div>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    salary: "$327,900",
    office: "Tokyo",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={10} color="success" />
      </div>
    ),
    extn: 6200,
    email: "r.davidson@datatables.net",
    experience: "2 Year",
  },
  {
    id: 20,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/10.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grpw-1 align-self-center">
          <div>Sonya Frost</div>
        </div>
      </div>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    salary: "$103,600",
    office: "Edinburgh",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={10} color="primary" />
      </div>
    ),
    extn: 1667,
    email: "s.frost@datatables.net",
    experience: "2 Year",
  },
  {
    id: 21,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/7.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Tatyana Dens</div>
        </div>
      </div>
    ),
    name: "Tatyana Dens",
    position: "Regional Director",
    salary: "$385,750",
    office: "London",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-primary"
            style={{ width: "80%" }}
            role="progressbar"
          ></div>
        </div>
      </div>
    ),
    extn: 1667,
    email: "t.fitzpatrick@datatables.net",
    experience: "3 Year",
  },
  {
    id: 22,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/1.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Tiger Nixon</div>
        </div>
      </div>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    office: "Edinburgh",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={30} color="primary" />
      </div>
    ),
    extn: 5421,
    email: "t.nixon@datatables.net",
    experience: "1 Year",
  },
  {
    id: 23,
    image: (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage("user/10.jpg")}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>Yuri Berry</div>
        </div>
      </div>
    ),
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    salary: "$675,000",
    office: "New York",
    skill: (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progress className="sm-progress-bar" value={60} color="danger" />
      </div>
    ),
    extn: 6154,
    email: "y.berry@datatables.net",
    experience: "5 Year",
  },
];

export interface supportDataType {
  id: number;
  image: JSX.Element;
  position: string;
  salary: string;
  office: string;
  skill: any;
  extn: number;
  email: string;
  name: string;
}

export const supportColumns = [
  {
    name: "Image",
    selector: (row: supportDataType) => row["image"],
    sortable: true,
    center: false,
  },
  {
    name: "Position",
    selector: (row: supportDataType) => row["position"],
    sortable: true,
    center: true,
  },
  {
    name: "Salary",
    selector: (row: supportDataType) => row["salary"],
    sortable: true,
    center: true,
  },
  {
    name: "Office",
    selector: (row: supportDataType) => row["office"],
    sortable: true,
    center: true,
  },
  {
    name: "Skill",
    selector: (row: supportDataType) => row["skill"],
    sortable: true,
    center: true,
  },
  {
    name: "Extn",
    selector: (row: supportDataType) => row["extn"],
    sortable: true,
    center: true,
  },
  {
    name: "Email",
    selector: (row: supportDataType) => row["email"],
    sortable: true,
    center: true,
  },
];
