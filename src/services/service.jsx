import products_cms from "../assets/images/products/cms.png";
import products_digital from "../assets/images/products/digital.png";
import products_maintenance from "../assets/images/products/maintenance.png";
import products_mobile from "../assets/images/products/mobile.png";
import products_payment from "../assets/images/products/payment.png";
import products_website from "../assets/images/products/website.png";

import tools_aws from "../assets/images/tools/aws.png";
import tools_cloud from "../assets/images/tools/cloud.png";
import tools_angular from "../assets/images/tools/angular.png";
import tools_css from "../assets/images/tools/css.png";
import tools_html from "../assets/images/tools/html.png";
import tools_js from "../assets/images/tools/js.png";
import tools_php from "../assets/images/tools/php.png";
import tools_phyton from "../assets/images/tools/phyton.png";
import tools_react from "../assets/images/tools/react.png";
import tools_ruby from "../assets/images/tools/ruby.png";
import tools_mongo from "../assets/images/tools/mongo.png";
import tools_mysql from "../assets/images/tools/mysql.png";
import tools_postgres from "../assets/images/tools/postgres.png";
import tools_sqlserver from "../assets/images/tools/sqlserver.png";

import portfolio_ilios from "../assets/images/portfolio/illios.png";
import portfolio_homeAndLiving from "../assets/images/portfolio/homeAndLiving.png";
import portfolio_hippo from "../assets/images/portfolio/hippo.png";

import testimonials_mark from "../assets/images/testimonials/mark.jpeg";
import testimonials_elon from "../assets/images/testimonials/elon.jpeg";

import logo_dio from "../assets/images/clients/dio.png";
import logo_hippo from "../assets/images/clients/hippo.png";
import logo_homeaAndLiving from "../assets/images/clients/homeaAndLiving.png";
import logo_ilios from "../assets/images/clients/ilios.png";
import logo_melandas from "../assets/images/clients/melandas.png";

const postRegister = async (data) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
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
    title: "Website Development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_website,
  },
  {
    title: "Mobile Apps Development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_mobile,
  },
  {
    title: "Digital Product Design",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_digital,
  },
  {
    title: "Maintenance",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_maintenance,
  },
  {
    id: 5,
    title: "CMS development",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_cms,
  },
  {
    id: 6,
    title: "Intergrated payment gateway",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: products_payment,
  },
];

const getTools = [
  tools_aws,
  tools_cloud,
  tools_angular,
  tools_css,
  tools_html,
  tools_js,
  tools_php,
  tools_phyton,
  tools_react,
  tools_ruby,
  tools_mongo,
  tools_mysql,
  tools_postgres,
  tools_sqlserver,
];

const getWorks = [
  {
    ammount: 1000,
    title: "designs",
  },
  {
    ammount: 30,
    title: "products",
  },
  {
    ammount: 58,
    title: "website development",
  },
];

const getPortfolios = [
  {
    product: "Mobile Apps",
    title: "Illios App (B2B E-commerance)",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: portfolio_ilios,
  },
  {
    product: "Website Development",
    title: "Home and Living",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: portfolio_homeAndLiving,
  },
  {
    product: "Website Development",
    title: "Hippo",
    description: "High performance bla bla bla bla bla bla bla bla bla",
    image: portfolio_hippo,
  },
];

const getTestimonials = [
  {
    type: "primary",
    title: "Amazing People",
    comment:
      "They are the people who bla bla bla bla, They are the people who bla bla bla bla",
    image: testimonials_mark,
    name: "Steve Jobs",
    status: "CEO of Apple",
  },
  {
    type: "secondary",
    title: "Amazing People",
    comment: "They are the people who bla bla bla bla",
    image: "",
    name: "Steve Jobs",
    status: "CEO of Apple",
  },
  {
    type: "secondary",
    title: "Amazing People",
    comment: "They are the people who bla bla bla bla",
    image: "",
    name: "Steve Jobs",
    status: "CEO of Apple",
  },
  {
    type: "primary",
    title: "Partnership Approach",
    comment:
      "We felt we have a true bla bllabma sfas dasdd, They are the people who bla bla bla bla",
    image: testimonials_elon,
    name: "Steve Jobs",
    status: "CEO of Apple",
  },
  {
    type: "secondary",
    title: "Amazing People",
    comment: "They are the people who bla bla bla bla",
    image: "",
    name: "Steve Jobs",
    status: "CEO of Apple",
  },
];

const getClients = [
  logo_dio,
  logo_hippo,
  logo_homeaAndLiving,
  logo_ilios,
  logo_melandas,
];

const post = {
  postRegister,
};

const get = {
  getProducts,
  getTools,
  getWorks,
  getPortfolios,
  getTestimonials,
  getClients
};

export { post, get };
