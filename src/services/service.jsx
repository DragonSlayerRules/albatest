import cms from "../assets/images/products/cms.png";
import digital from "../assets/images/products/digital.png";
import maintenance from "../assets/images/products/maintenance.png";
import mobile from "../assets/images/products/mobile.png";
import payment from "../assets/images/products/payment.png";
import website from "../assets/images/products/website.png";

const postRegister = async (data) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    });
    const response_1 = response.json();
    return response_1;
  } catch (error) {
    console.error(error);
  }
};

const getProducts = [
  {
    id: 1,
    title: "Website Development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: website,
  },
  {
    id: 2,
    title: "Mobile Apps Development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: mobile,
  },
  {
    id: 3,
    title: "Digital Product Design",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: digital,
  },
  {
    id: 4,
    title: "Maintenance",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: maintenance,
  },
  {
    id: 5,
    title: "CMS development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: cms,
  },
  {
    id: 6,
    title: "Intergrated payment gateway",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image_path: payment,
  },
];

const getPortfolio = [
  {
    "product": "Mobile Apps",
    "title": "Illios App (B2B E-commerance)",
    "description": "High performance bla bla bla bla bla bla bla bla bla",
    "image_path": "Illios"
  },
  {
    "product": "Website Development",
    "title": "Home and Living",
    "description": "High performance bla bla bla bla bla bla bla bla bla",
    "image_path": "homeAndLiving"
  },
  {
    "product": "Hippo",
    "title": "Hippo",
    "description": "High performance bla bla bla bla bla bla bla bla bla",
    "image_path": "hippo"
  }    
]

const post = {
  postRegister,
};

const get = {
  getProducts,
  getPortfolio
}



export { post, get };
