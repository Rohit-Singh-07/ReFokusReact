import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      link: "https://www.arqitel.com/"
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      link: "https://www.cula.tech/"
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      link: "https://university.webflow.com/interactive-learning/layout-land/"
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      link: "https://www.timetorefokus.com/?_gl=1*7xp33j*_ga*MjA4MzA3MDM5OS4xNzEwNzM5ODEz*_ga_BM6YS9KGKJ*MTcxMDczOTgxMy4xLjEuMTcxMDczOTgxNC4wLjAuMA.."
    },
    {
      title: "Summon",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      link: "https://summon-backup.webflow.io/"
    },
  ];

  const [position, setPosition] = useState(0);

  const [idx, setIdx] = useState(1);

  const mover = (val) => {
    setPosition(val * 14);
    setIdx(val);
  };

  return (
    <div className="my-32 relative">
      {products.map((elem, index) => {
        return (
          <a key={index} href={elem.link} target="blank">
            <Product
            title={elem.title}
            mover={mover}
            description={elem.description}
            live={elem.live}
            case={elem.case}
            index={index}
          />
          </a>
        );
      })}

      <div className="h-full w-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + "vw" }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.7 }}
          className="h-[23vw] w-[30vw] rounded-xl left-[45%] top-[-5%] absolute overflow-hidden"
        >
          <motion.div
            animate={{ y: -position - 9 * idx+ "vw" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.1 }}
            className="h-[23vw] w-[30vw] bg-red-100 rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src="https://cdn.landingpage.love/images/arqitel-02.jpg"
              alt=""
            />
            <video
              className="h-full w-full z-20 object-cover absolute top-0"
              src="http://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position - 9 * idx+ "vw" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.1 }}
            className="h-[23vw] w-[30vw] bg-red-200 rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets-global.website-files.com/651309ab2c6e146a99437841/6571d3c2e2cb4add9814c8ef_opengraph.jpg"
              alt=""
            />
            <video
              className="h-full w-full z-20 object-cover absolute top-0"
              src="http://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y:-position - 9 * idx+ "vw" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.1 }}
            className="h-[23vw] w-[30vw] bg-red-300 rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src="https://www.cssdesignawards.com/cdasites/2024/202402/20240227233934.jpg"
              alt=""
            />
            <video
              className="h-full w-full z-20 object-cover absolute top-0"
              src="http://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position - 9 * idx+ "vw" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.1 }}
            className="h-[23vw] w-[30vw] bg-red-400 rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets.awwwards.com/awards/avatar/1146610/648986bd883c4089355682.png"
              alt=""
            />
            <video
              className="h-full w-full z-20 object-cover absolute top-0"
              src="http://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position - 9 * idx+ "vw" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.1 }}
            className="h-[23vw] w-[30vw] bg-red-500 rounded-xl"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets-global.website-files.com/6368c10664bdf4fb19499ec9/6368dc801a07d754d984d2d8_homepage-versions-4.webp"
              alt=""
            />
            <video
              className="h-full w-full z-20 object-cover absolute top-0"
              src="http://cdn.refokus.com/website/2022/videos/summon.webm"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
