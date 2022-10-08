"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons/faGithub"
const faGithub_namespaceObject = require("@fortawesome/free-brands-svg-icons/faGithub");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/cyclic-logo.tsx



const CyclicLogo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: "w-full h-full",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M6.35291 10.0588H11.9288L14.647 11.8235H9.14084L6.35291 10.0588Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.85",
      d: "M6.88232 7.41177H12.1023L14.647 11.8235H9.49231L6.88232 7.41177Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.75",
      d: "M7.58823 4.76468H12.3337L14.647 11.8235H9.96094L7.58823 4.76468Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.5",
      d: "M8.47058 2.29411H12.6228L14.6471 11.8235H10.5467L8.47058 2.29411Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.25",
      d: "M9.35291 0.176453H12.912L14.647 11.8235H11.1324L9.35291 0.176453Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M17.647 14.1176H12.0712L9.35291 12.3529H14.8591L17.647 14.1176Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.85",
      d: "M17.1176 16.7647H11.8976L9.35291 12.3529H14.5076L17.1176 16.7647Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.75",
      d: "M16.4117 19.4117H11.6663L9.35291 12.3529H14.039L16.4117 19.4117Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.5",
      d: "M15.5294 21.8823H11.3771L9.35291 12.3529H13.4533L15.5294 21.8823Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.25",
      d: "M14.647 24H11.0879L9.35291 12.3529H12.8675L14.647 24Z",
      fill: "currentColor"
    })]
  });
};

/* harmony default export */ const cyclic_logo = (CyclicLogo);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: ./components/app-header.tsx






const AppHeader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "px-4 py-3 shadow-md",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-6xl mx-auto flex items-center justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: "font-bold",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-primary-500",
          children: "Bikes API"
        }), " \u2715 Cyclic"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "block w-6 h-6 hover:text-primary-500",
            title: "Cyclic Docs",
            href: "https://docs.cyclic.sh/tutorials/rest-api-and-dynamodb/part-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(cyclic_logo, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "block w-6 h-6 hover:text-primary-500",
            title: "Github Repo",
            href: "https://github.com/eludadev/bikes-api",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
              icon: faGithub_namespaceObject.faGithub
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const app_header = (AppHeader);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/api-route.tsx





const ApiRoute = ({
  method,
  route,
  description
}) => {
  const methodColor = (0,external_react_.useMemo)(() => {
    switch (method) {
      case 'GET':
        return '#2563eb';

      case 'POST':
        return '#22c55e';

      case 'PUT':
        return '#ea580c';

      case 'PATCH':
        return '#ea580c';

      case 'DELETE':
        return '#dc2626';
    }
  }, [method]); // Splits /bikes/<ID> into /bikes/ and <ID>, for example.
  // ASSUMING: placeholder, if it exists, is the FINAL part of url.

  const routeParts = (0,external_react_.useMemo)(() => {
    const matches = route.match(/(.*)(\<.*\>)/);
    return matches && matches.length == 3 ? {
      fixed: matches[1],
      placeholder: matches[2]
    } : {
      fixed: route,
      placeholder: ''
    };
  }, [route]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
      className: "text-white font-bold",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "block w-fit rounded-md px-2 py-.5",
        style: {
          backgroundColor: methodColor
        },
        children: method
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
      className: "",
      children: [routeParts.fixed, routeParts.placeholder && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-red-500 font-bold",
        children: routeParts.placeholder
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      className: "",
      children: description
    })]
  });
};

/* harmony default export */ const api_route = (ApiRoute);
;// CONCATENATED MODULE: ./components/cyclic-deploy.tsx



const CyclicDeploy = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: "h-full",
    viewBox: "0 0 161 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "161",
      height: "35",
      rx: "4.8",
      fill: "#2E59C7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16 15.8815H20.4433L22.6094 17.2889H18.2216L16 15.8815Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.85",
      d: "M16.4219 13.7704H20.5815L22.6094 17.2889H18.5017L16.4219 13.7704Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.75",
      d: "M16.9844 11.6593H20.7659L22.6094 17.2889H18.8751L16.9844 11.6593Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.5",
      d: "M17.6875 9.68889H20.9963L22.6094 17.2889H19.3419L17.6875 9.68889Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.25",
      d: "M18.3906 8H21.2268L22.6094 17.2889H19.8087L18.3906 8Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M25 19.1185H20.5567L18.3906 17.7111H22.7784L25 19.1185Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.85",
      d: "M24.5781 21.2296H20.4185L18.3906 17.7111H22.4983L24.5781 21.2296Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.75",
      d: "M24.0156 23.3407H20.2341L18.3906 17.7111H22.1249L24.0156 23.3407Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.5",
      d: "M23.3125 25.3111H20.0037L18.3906 17.7111H21.6581L23.3125 25.3111Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: "0.25",
      d: "M22.6094 27H19.7732L18.3906 17.7111H21.1913L22.6094 27Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M37.9025 22.5H34.5845V12.91H37.9025C39.3772 12.91 40.3852 13.2833 40.9265 14.03C41.4678 14.7767 41.7385 15.948 41.7385 17.544C41.7385 18.356 41.6825 19.0467 41.5705 19.616C41.4678 20.176 41.2812 20.6847 41.0105 21.142C40.4785 22.0473 39.4425 22.5 37.9025 22.5ZM40.1285 17.544C40.1285 16.3867 39.9838 15.5513 39.6945 15.038C39.4052 14.5247 38.8078 14.268 37.9025 14.268H36.1385V21.128H37.9025C38.8265 21.128 39.4425 20.7873 39.7505 20.106C39.8998 19.7607 39.9978 19.392 40.0445 19C40.1005 18.608 40.1285 18.1227 40.1285 17.544ZM43.5533 22.5V12.91H49.6013V14.268H45.1073V16.984H48.7613V18.328H45.1073V21.128H49.6013V22.5H43.5533ZM54.8055 19.518H52.8455V22.5H51.2915V12.91H54.8055C56.9802 12.91 58.0675 13.9833 58.0675 16.13C58.0675 17.2313 57.7922 18.0713 57.2415 18.65C56.7002 19.2287 55.8882 19.518 54.8055 19.518ZM52.8455 18.174H54.7915C55.9115 18.174 56.4715 17.4927 56.4715 16.13C56.4715 15.4767 56.3362 15.0007 56.0655 14.702C55.7949 14.4033 55.3702 14.254 54.7915 14.254H52.8455V18.174ZM64.939 22.5H59.563V12.91H61.117V21.114H64.939V22.5ZM67.7095 20.47C68.0268 21.0207 68.6335 21.296 69.5295 21.296C70.4255 21.296 71.0275 21.0253 71.3355 20.484C71.6528 19.9427 71.8115 19.0373 71.8115 17.768C71.8115 16.4893 71.6482 15.5607 71.3215 14.982C71.0042 14.4033 70.4068 14.114 69.5295 14.114C68.6522 14.114 68.0502 14.4033 67.7235 14.982C67.3968 15.5607 67.2335 16.4847 67.2335 17.754C67.2335 19.014 67.3922 19.9193 67.7095 20.47ZM72.5535 21.478C71.9842 22.262 70.9762 22.654 69.5295 22.654C68.0828 22.654 67.0702 22.262 66.4915 21.478C65.9128 20.6847 65.6235 19.4433 65.6235 17.754C65.6235 16.0647 65.9128 14.8093 66.4915 13.988C67.0795 13.1667 68.0922 12.756 69.5295 12.756C70.9668 12.756 71.9748 13.1667 72.5535 13.988C73.1322 14.8 73.4215 16.0553 73.4215 17.754C73.4215 19.4527 73.1322 20.694 72.5535 21.478ZM78.3625 22.5H76.7945V18.552L73.7845 12.91H75.5345L77.5645 17.026L79.6085 12.91H81.3445L78.3625 18.552V22.5ZM84.6703 14.296V12.91H91.6703V14.296H88.9683V22.5H87.4003V14.296H84.6703ZM94.4654 20.47C94.7827 21.0207 95.3894 21.296 96.2854 21.296C97.1814 21.296 97.7834 21.0253 98.0914 20.484C98.4087 19.9427 98.5674 19.0373 98.5674 17.768C98.5674 16.4893 98.404 15.5607 98.0774 14.982C97.76 14.4033 97.1627 14.114 96.2854 14.114C95.408 14.114 94.806 14.4033 94.4794 14.982C94.1527 15.5607 93.9894 16.4847 93.9894 17.754C93.9894 19.014 94.148 19.9193 94.4654 20.47ZM99.3094 21.478C98.74 22.262 97.732 22.654 96.2854 22.654C94.8387 22.654 93.826 22.262 93.2474 21.478C92.6687 20.6847 92.3794 19.4433 92.3794 17.754C92.3794 16.0647 92.6687 14.8093 93.2474 13.988C93.8354 13.1667 94.848 12.756 96.2854 12.756C97.7227 12.756 98.7307 13.1667 99.3094 13.988C99.888 14.8 100.177 16.0553 100.177 17.754C100.177 19.4527 99.888 20.694 99.3094 21.478ZM108.283 22.654C106.883 22.654 105.931 22.2667 105.427 21.492C104.932 20.7173 104.685 19.4433 104.685 17.67C104.685 15.8967 104.937 14.6367 105.441 13.89C105.945 13.134 106.892 12.756 108.283 12.756C109.114 12.756 110.028 12.8727 111.027 13.106L110.971 14.366C110.131 14.2167 109.291 14.142 108.451 14.142C107.611 14.142 107.042 14.394 106.743 14.898C106.444 15.3927 106.295 16.3307 106.295 17.712C106.295 19.084 106.44 20.022 106.729 20.526C107.018 21.0207 107.583 21.268 108.423 21.268C109.263 21.268 110.112 21.198 110.971 21.058L111.013 22.346C110.052 22.5513 109.142 22.654 108.283 22.654ZM116.206 22.5H114.638V18.552L111.628 12.91H113.378L115.408 17.026L117.452 12.91H119.188L116.206 18.552V22.5ZM123.213 22.654C121.813 22.654 120.861 22.2667 120.357 21.492C119.862 20.7173 119.615 19.4433 119.615 17.67C119.615 15.8967 119.867 14.6367 120.371 13.89C120.875 13.134 121.822 12.756 123.213 12.756C124.043 12.756 124.958 12.8727 125.957 13.106L125.901 14.366C125.061 14.2167 124.221 14.142 123.381 14.142C122.541 14.142 121.971 14.394 121.673 14.898C121.374 15.3927 121.225 16.3307 121.225 17.712C121.225 19.084 121.369 20.022 121.659 20.526C121.948 21.0207 122.513 21.268 123.353 21.268C124.193 21.268 125.042 21.198 125.901 21.058L125.943 22.346C124.981 22.5513 124.071 22.654 123.213 22.654ZM132.984 22.5H127.608V12.91H129.162V21.114H132.984V22.5ZM134.252 22.5V12.91H135.806V22.5H134.252ZM141.232 22.654C139.832 22.654 138.88 22.2667 138.376 21.492C137.882 20.7173 137.634 19.4433 137.634 17.67C137.634 15.8967 137.886 14.6367 138.39 13.89C138.894 13.134 139.842 12.756 141.232 12.756C142.063 12.756 142.978 12.8727 143.976 13.106L143.92 14.366C143.08 14.2167 142.24 14.142 141.4 14.142C140.56 14.142 139.991 14.394 139.692 14.898C139.394 15.3927 139.244 16.3307 139.244 17.712C139.244 19.084 139.389 20.022 139.678 20.526C139.968 21.0207 140.532 21.268 141.372 21.268C142.212 21.268 143.062 21.198 143.92 21.058L143.962 22.346C143.001 22.5513 142.091 22.654 141.232 22.654Z",
      fill: "white"
    })]
  });
};

/* harmony default export */ const cyclic_deploy = (CyclicDeploy);
;// CONCATENATED MODULE: ./components/app-hero.tsx





const AppHero = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "grid place-items-center py-12 px-8 md:py-24 xl:py-32 bg-cogs",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        className: "text-2xl font-bold",
        children: ["Welcome to the ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-primary-500",
          children: "Bikes API"
        }), "."]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "A demonstrative API built to teach you all about the RESTful standard."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
        className: "grid grid-auto-rows grid-cols-[auto_1fr] grid-rows-2 gap-x-4 gap-y-.5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
          className: "after:content-[':'] font-bold",
          children: "Hosting"
        }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "flex items-center gap-1 underline hover:text-primary-500",
            href: "https://www.cyclic.sh/",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "block w-5 h-5",
              children: /*#__PURE__*/jsx_runtime_.jsx(cyclic_logo, {})
            }), "Cyclic."]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
          className: "after:content-[':'] font-bold",
          children: "Database"
        }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
          children: "AWS DynamoDB."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "block h-8 mt-1",
        href: "https://deploy.cyclic.sh/eludadev/bikes-api",
        title: "Deploy to Cyclic",
        children: /*#__PURE__*/jsx_runtime_.jsx(cyclic_deploy, {})
      })]
    })
  });
};

/* harmony default export */ const app_hero = (AppHero);
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons/faBook"
const faBook_namespaceObject = require("@fortawesome/free-solid-svg-icons/faBook");
;// CONCATENATED MODULE: ./components/nav-menu.tsx







const NavMenu = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "flex items-center gap-2 overflow-x-auto px-3 md:block md:space-y-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "flex items-center md:gap-2 font-bold md:text-primary-500 md:rounded-none md:bg-transparent md:p-0 md:border-none  rounded-full gap-1 bg-primary-500 text-white px-4 py-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "md:w-10 md:h-10 md:rounded-md md:p-2.5 md:bg-primary-500 md:text-white md:grid md:place-items-center block w-4 h-4 p-0 bg-transparent",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
            icon: faBook_namespaceObject.faBook
          })
        }), "Documentation"]
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "flex items-center md:gap-2 underline hover:text-primary-500 md:rounded-none md:bg-transparent md:p-0  md:border-none rounded-full gap-1 border-1 border-black/10 px-4 py-1",
          href: "https://docs.cyclic.sh/tutorials/rest-api-and-dynamodb/part-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "md:w-10 md:h-10 md:rounded-md md:p-2 md:border-1 md:border-black/20 md:grid md:place-items-center block w-4 h-4 p-0 border-transparent bg-transparent",
            children: /*#__PURE__*/jsx_runtime_.jsx(cyclic_logo, {})
          }), "Tutorial"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "flex items-center md:gap-2 underline hover:text-primary-500 md:rounded-none md:bg-transparent md:p-0  md:border-none rounded-full gap-1 border-1 border-black/10 px-4 py-1",
          href: "https://github.com/eludadev/bikes-api",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "md:w-10 md:h-10 md:rounded-md md:p-2 md:border-1 md:border-black/20 md:grid md:place-items-center block w-4 h-4 p-0 border-transparent bg-transparent",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
              icon: faGithub_namespaceObject.faGithub
            })
          }), "Github"]
        })
      })]
    })
  });
};

/* harmony default export */ const nav_menu = (NavMenu);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./lib/api-routes.ts


function getApiRoutesData() {
  const apiRoutesDirectory = external_path_default().join(process.cwd(), "lib");
  const fullPath = external_path_default().join(apiRoutesDirectory, "api-routes.json");
  const fileContents = external_fs_default().readFileSync(fullPath, "utf-8");
  return JSON.parse(fileContents);
}
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = ({
  apiRoutes
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Bikes API"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(app_header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "mt-1 mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx(app_hero, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "md:grid md:grid-cols-[18rem_auto] pt-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:px-8 sticky top-0 pt-4 md:pt-8 bg-white self-start",
          children: /*#__PURE__*/jsx_runtime_.jsx(nav_menu, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-8 px-2 md:mt-0 overflow-x-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "font-bold text-2xl",
            children: "Documentation"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: "table-auto  border-separate border-spacing-4 w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  className: "text-start",
                  children: "Method"
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  className: "text-start",
                  children: "Route"
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  className: "text-start",
                  children: "Description"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: apiRoutes.map(({
                method,
                route,
                description
              }) => /*#__PURE__*/jsx_runtime_.jsx("tr", {
                className: "ring-0 hover:ring-2 ring-offset-2 rounded-md ring-black/5",
                children: /*#__PURE__*/jsx_runtime_.jsx(api_route, {
                  method: method,
                  route: route,
                  description: description
                })
              }, method + route))
            })]
          })]
        })]
      })]
    })]
  });
};

const getStaticProps = async context => {
  const apiRoutesData = getApiRoutesData();
  return {
    props: {
      apiRoutes: apiRoutesData
    }
  };
};
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(908));
module.exports = __webpack_exports__;

})();