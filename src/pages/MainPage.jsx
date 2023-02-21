import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from "../Api";
import axios from "axios";

export default function MainPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(api + "country");
        setData(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <Container>
      <nav>
        <svg
          width="146"
          height="46"
          viewBox="0 0 146 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7173 0.234412C25.3569 1.04759 25.0671 1.81385 24.6832 2.53319C24.2837 3.26818 23.5943 3.44801 22.7797 3.4011C22.3096 3.36982 21.7926 3.4011 21.3696 3.58094C20.8448 3.79987 20.8839 4.29247 21.4009 4.55831C21.6516 4.68341 21.9336 4.73815 22.2078 4.80852C23.1165 5.05091 23.3672 5.38712 23.1948 6.30194C22.952 7.61553 22.6935 8.9213 22.388 10.2193C22.1843 11.0715 22.2626 11.658 22.999 12.3538C24.1975 13.4876 24.9887 14.981 25.4039 16.6308C25.5997 17.4205 25.8426 18.2103 26.1638 18.9609C26.3361 19.3675 26.6651 19.7506 27.0176 20.0164C27.9342 20.7202 28.2005 21.2206 27.7383 22.3074C27.2605 23.4333 26.6729 24.528 25.9993 25.5523C25.3647 26.5218 25.4509 27.4445 25.8739 28.3906C26.2734 29.3054 27.1508 29.4149 28.0125 29.4852C29.2189 29.5791 30.4722 29.5869 31.4514 30.3922C31.9058 30.7675 32.2896 31.354 32.462 31.9169C32.7988 32.9803 32.979 34.0984 33.1983 35.2009C33.3002 35.7248 33.3237 36.2721 33.4412 36.7882C33.5038 37.0775 33.6762 37.5388 33.8407 37.5544C34.201 37.5935 34.718 37.5153 34.9295 37.2808C36.0811 35.9437 37.0681 34.4659 38.2823 33.1914C40.178 31.2054 40.8752 28.633 42.0268 26.2716C42.9198 24.4342 44.0478 22.714 45.0897 20.9469C45.2542 20.6732 45.5284 20.4621 45.7791 20.1885C47.0089 26.4671 44.3925 36.3112 35.9792 41.9565C27.002 47.985 15.8469 47.1249 8.02119 40.3614C-0.439083 33.0507 -2.13897 21.4864 2.60035 12.4086C7.66084 2.75213 18.0952 -1.02445 25.7173 0.234412ZM20.9936 31.87C19.3642 31.9248 18.6905 31.4009 18.3537 29.8371C18.1657 28.9379 17.8915 28.6877 16.8575 28.633C15.5258 28.5548 14.1862 28.547 12.8467 28.461C12.2122 28.4219 11.5541 28.3437 10.9509 28.156C10.6533 28.0622 10.2851 27.7025 10.2303 27.4054C9.99525 26.256 9.97175 26.2482 8.75754 26.1309C8.24836 26.084 7.43367 25.826 7.3475 25.5054C7.21433 25.0206 7.4885 24.3247 7.80185 23.8634C8.05252 23.4959 8.68704 23.0737 9.03955 23.1597C9.94041 23.3786 10.9823 23.6288 11.0293 24.9189C11.0371 25.1222 11.2878 25.3099 11.4288 25.5054C11.6246 25.3334 11.9223 25.2004 12.0006 24.9815C12.3297 24.0901 12.5568 23.1675 12.878 22.2761C13.0347 21.8305 13.2384 21.3613 13.5517 21.0173C14.6092 19.8288 16.0271 19.3909 17.5625 19.344C19.1449 19.2893 20.2572 18.2415 20.2729 16.7012C20.2886 15.2234 18.9882 13.8473 17.5547 13.7925C16.0898 13.7378 15.0322 14.5744 13.9982 15.4189C13.2305 16.0366 12.4002 15.9584 11.6011 15.6691C11.327 15.5674 10.9744 14.9732 11.045 14.723C11.609 12.8308 12.1652 10.8995 14.1235 9.8674C15.3456 9.22625 15.7843 9.33571 16.458 10.532C16.881 11.2826 18.1108 11.5563 18.8472 11.0637C19.325 10.7509 19.3094 9.75794 18.8237 9.10114C18.7454 8.99949 18.6592 8.90567 18.5652 8.81966C16.2386 6.62252 12.1965 6.59907 9.92475 8.84311C9.14139 9.60938 8.52254 10.5398 7.84885 11.4156C6.44664 13.2296 5.4361 15.2625 4.99742 17.4909C4.68408 19.0625 4.62925 20.6967 4.56658 22.3074C4.46474 25.0284 5.89829 26.8424 8.20919 28.0622C8.75754 28.3515 9.3294 28.5704 9.89341 28.8284C10.7629 29.2272 11.2643 29.9075 11.3505 30.8536C11.4288 31.6667 11.4523 32.4877 11.4836 33.3087C11.515 34.1375 11.7421 34.896 12.408 35.4277C13.2384 36.0845 13.4812 36.9445 13.4107 37.9532C13.3872 38.2738 13.3715 38.696 13.5517 38.9071C14.7267 40.252 16.1603 41.159 18.0325 41.0495C18.338 41.0339 18.8159 40.7055 18.8785 40.4475C19.231 38.9775 20.2337 38.1096 21.4871 37.4762C22.858 36.7804 23.1792 35.6466 23.0068 34.2548C22.9755 33.9968 22.9285 33.7466 22.8972 33.4886C22.7327 32.1202 22.3801 31.8231 20.9936 31.87Z"
            fill="#004098"
          />
          <path
            d="M36.2927 25.4587C33.1201 21.3225 30.3 17.2175 28.3807 12.5417C26.1325 7.08409 29.8613 0.954001 35.7521 0.437948C40.6168 0.00790335 45.1916 3.74538 45.2856 9.03102C45.3091 10.3133 44.9253 11.6895 44.4239 12.8936C42.8494 16.6623 40.4523 19.9463 38.0317 23.2068C37.4755 23.9262 36.9115 24.6455 36.2927 25.4587ZM36.5355 5.4421C34.4596 5.39519 32.7519 7.06063 32.7205 9.16394C32.697 11.15 34.4048 12.9014 36.4258 12.9405C38.5096 12.9874 40.2565 11.2594 40.2721 9.1483C40.2956 7.13882 38.6349 5.48901 36.5355 5.4421Z"
            fill="#B71415"
          />
          <path
            d="M68.6981 25.9737C68.4896 26.618 67.705 26.9253 66.9007 26.9253C66.1161 26.9253 65.2919 26.618 65.1429 25.9737L63.7923 20.1353L62.4218 25.9737C62.2729 26.618 61.4486 26.9253 60.6641 26.9253C59.8597 26.9253 59.0553 26.618 58.8666 25.9737L54.6857 12.364C54.6659 12.2947 54.646 12.1955 54.646 12.1063C54.646 11.4818 55.6192 10.9763 56.4038 10.9763C56.8308 10.9763 57.2082 11.125 57.3075 11.5413L60.6442 23.2676L62.4417 15.7342C62.5708 15.1891 63.1766 14.9512 63.7923 14.9512C64.3881 14.9512 64.9939 15.1891 65.123 15.7342L66.9205 23.2676L70.2573 11.5413C70.3665 11.1349 70.7439 10.9763 71.161 10.9763C71.9455 10.9763 72.9187 11.4719 72.9187 12.1063C72.9187 12.1955 72.8989 12.3046 72.879 12.364L68.6981 25.9737Z"
            fill="#004098"
          />
          <path
            d="M74.0906 21.9691V15.9325C74.0906 12.3145 76.2456 10.9763 79.0361 10.9763C81.8267 10.9763 84.0016 12.3145 84.0016 15.9325V21.9691C84.0016 25.5871 81.8267 26.9253 79.0361 26.9253C76.2456 26.9253 74.0906 25.5871 74.0906 21.9691ZM81.2507 15.9325C81.2507 14.2276 80.4066 13.4445 79.0361 13.4445C77.6458 13.4445 76.8414 14.2276 76.8414 15.9325V21.9691C76.8414 23.674 77.6458 24.4571 79.0361 24.4571C80.4066 24.4571 81.2507 23.674 81.2507 21.9691V15.9325Z"
            fill="#004098"
          />
          <path
            d="M86.2168 11.8485C86.2168 11.3925 86.5743 10.9861 87.1006 10.9861H91.2815C94.0522 10.9861 96.2867 12.0665 96.2867 15.5061C96.2867 17.9941 95.1049 19.3323 93.516 19.8378L96.2867 25.0913C96.3761 25.2004 96.3959 25.3491 96.3959 25.4383C96.3959 26.152 95.4922 26.9053 94.6878 26.9053C94.3104 26.9053 93.9529 26.6674 93.7345 26.2313L90.7353 20.264H88.9577V25.9141C88.9577 26.4989 88.2824 26.8062 87.5873 26.8062C86.912 26.8062 86.2168 26.4989 86.2168 25.9141V11.8485V11.8485ZM88.9577 13.4443V18.0536H91.2815C92.652 18.0536 93.5458 17.4688 93.5458 15.7638C93.5458 14.0589 92.6619 13.4443 91.2815 13.4443H88.9577Z"
            fill="#004098"
          />
          <path
            d="M99.3349 26.7963C98.7192 26.7963 98.1333 26.489 98.1333 25.9042V11.8485C98.1333 11.2438 98.8086 10.9861 99.5038 10.9861C100.179 10.9861 100.874 11.2438 100.874 11.8485V24.338H106.028C106.575 24.338 106.853 24.9427 106.853 25.5671C106.853 26.1718 106.575 26.7963 106.028 26.7963H99.3349Z"
            fill="#004098"
          />
          <path
            d="M113.169 10.9763C115.96 10.9763 118.134 12.3145 118.134 15.9325V21.8402C118.134 25.4582 115.96 26.7964 113.169 26.7964H109.425C108.71 26.7964 108.223 26.39 108.223 25.934V11.8486C108.223 11.3926 108.71 10.9862 109.425 10.9862L113.169 10.9763ZM110.974 13.4445V24.3282H113.169C114.559 24.3282 115.384 23.5253 115.384 21.8402V15.9325C115.384 14.2474 114.559 13.4445 113.169 13.4445H110.974Z"
            fill="#004098"
          />
          <path
            d="M122.524 25.4581C122.524 26.2412 121.868 26.9251 121.104 26.9251C120.279 26.9251 119.664 26.2313 119.664 25.4581C119.664 24.6552 120.279 23.9911 121.104 23.9911C121.868 23.9812 122.524 24.6552 122.524 25.4581Z"
            fill="#004098"
          />
          <path
            d="M131.421 11.8485C131.421 11.2438 132.096 10.9861 132.792 10.9861C133.467 10.9861 134.162 11.2438 134.162 11.8485V21.969C134.162 25.587 131.928 26.9251 129.087 26.9251C126.237 26.9251 124.013 25.587 124.013 21.969V11.8485C124.013 11.2438 124.688 10.9861 125.383 10.9861C126.058 10.9861 126.754 11.2438 126.754 11.8485V21.969C126.754 23.654 127.618 24.4569 129.077 24.4569C130.537 24.4569 131.401 23.654 131.401 21.969V11.8485H131.421Z"
            fill="#004098"
          />
          <path
            d="M139.049 24.3282H145.136C145.682 24.3282 146 24.9725 146 25.5574C146 26.1422 145.682 26.7865 145.136 26.7865H136.367C135.801 26.7865 135.543 26.4594 135.543 26.0034C135.543 25.7259 135.652 25.3591 135.841 25.032L142.117 13.4346H136.774C136.228 13.4346 135.93 12.8498 135.93 12.2054C135.93 11.6008 136.188 10.9763 136.774 10.9763H144.798C145.345 10.9763 145.623 11.3034 145.623 11.7297C145.623 12.0369 145.514 12.374 145.305 12.7506L139.049 24.3282Z"
            fill="#004098"
          />
          <path
            d="M58.8678 37.5612C58.5897 37.5612 58.3315 37.4225 58.3315 37.1648V30.8902C58.3315 30.6226 58.6295 30.5037 58.9473 30.5037C59.2452 30.5037 59.563 30.6226 59.563 30.8902V36.461H61.8669C62.1152 36.461 62.2344 36.7286 62.2344 37.0161C62.2344 37.2837 62.1152 37.5712 61.8669 37.5712H58.8678V37.5612V37.5612Z"
            fill="#B71415"
          />
          <path
            d="M64.0608 33.5368H65.4909C65.7392 33.5368 65.8782 33.7747 65.8782 34.0423C65.8782 34.2604 65.759 34.528 65.4909 34.528H64.0608V36.4708H66.7322C66.9805 36.4708 67.1195 36.7286 67.1195 37.0358C67.1195 37.2936 67.0004 37.581 66.7322 37.581H63.3756C63.0976 37.581 62.8394 37.4422 62.8394 37.1845V30.9199C62.8394 30.6622 63.1075 30.5234 63.3756 30.5234H66.7322C67.0004 30.5234 67.1195 30.801 67.1195 31.0686C67.1195 31.366 66.9805 31.6237 66.7322 31.6237H64.0608V33.5368Z"
            fill="#B71415"
          />
          <path
            d="M67.2988 37.0452C67.2988 37.0254 67.3088 36.9857 67.3187 36.9461L69.136 30.8698C69.2254 30.5824 69.573 30.4436 69.9206 30.4436C70.2781 30.4436 70.6257 30.5824 70.715 30.8698L72.5324 36.9461C72.5423 36.9857 72.5522 37.0155 72.5522 37.0452C72.5522 37.3426 72.1054 37.5706 71.7776 37.5706C71.5691 37.5706 71.4102 37.5012 71.3605 37.3228L71.003 36.0342H68.848L68.4905 37.3228C68.4409 37.5111 68.282 37.5706 68.0734 37.5706C67.7358 37.5607 67.2988 37.3525 67.2988 37.0452ZM70.7349 35.0429L69.9106 32.0791L69.0864 35.0429H70.7349Z"
            fill="#B71415"
          />
          <path
            d="M73.1374 30.8902C73.1374 30.692 73.2963 30.5037 73.5346 30.5037H75.4016C76.633 30.5037 77.636 30.9894 77.636 32.5258C77.636 33.636 77.1097 34.2307 76.4046 34.4587L77.636 36.8079C77.6758 36.8575 77.6857 36.9269 77.6857 36.9665C77.6857 37.2837 77.2785 37.6207 76.921 37.6207C76.7522 37.6207 76.5933 37.5117 76.494 37.3233L75.1533 34.6569H74.3589V37.1747C74.3589 37.4324 74.0609 37.5712 73.7432 37.5712C73.4452 37.5712 73.1274 37.4324 73.1274 37.1747L73.1374 30.8902ZM74.3688 31.6039V33.6657H75.4016C76.0173 33.6657 76.4146 33.408 76.4146 32.6447C76.4146 31.8815 76.0173 31.6138 75.4016 31.6138H74.3688V31.6039Z"
            fill="#B71415"
          />
          <path
            d="M81.7078 37.1647L79.6819 33.2791V37.1647C79.6819 37.4225 79.374 37.5612 79.0661 37.5612C78.7583 37.5612 78.4504 37.4225 78.4504 37.1647V30.9002C78.4504 30.6325 78.7484 30.5037 79.0661 30.5037C79.513 30.5037 79.6918 30.6028 79.9798 31.1678L81.7971 34.766V30.8902C81.7971 30.6226 82.0951 30.5037 82.4128 30.5037C82.7108 30.5037 83.0286 30.6226 83.0286 30.8902V37.1647C83.0286 37.4225 82.7207 37.5612 82.4128 37.5612C82.1248 37.5612 81.8666 37.4621 81.7078 37.1647Z"
            fill="#B71415"
          />
          <path
            d="M85.5713 35.5388C85.5713 34.6467 86.1274 33.9231 86.7531 33.5762C86.3956 33.1598 86.0976 32.7237 86.0976 32.0893C86.0976 30.9791 86.9815 30.3447 88.0739 30.3447C89.2159 30.3447 89.921 31.0188 89.921 31.4747C89.921 31.7622 89.633 32.0496 89.345 32.0496C88.918 32.0496 88.8485 31.3459 88.0838 31.3459C87.6071 31.3459 87.2496 31.6333 87.2496 32.1488C87.2496 32.7237 87.8256 33.2689 88.2228 33.6951L89.7422 35.3405C89.9508 34.8449 89.921 34.379 89.9508 34.0519C89.9806 33.8041 90.07 33.6654 90.497 33.6654C90.924 33.6654 91.0134 33.8735 91.0134 34.2403C91.0134 34.726 90.8644 35.4694 90.4871 36.1137L91.2517 36.9265C91.3113 36.9959 91.3312 37.0752 91.3312 37.1347C91.3312 37.3924 91.0531 37.6501 90.7651 37.6501C90.6658 37.6501 90.5764 37.6204 90.4672 37.5014L89.8813 36.8869C89.4145 37.3428 88.7789 37.66 87.9547 37.66C86.4849 37.66 85.5713 36.6688 85.5713 35.5388ZM89.1365 36.1236L87.4383 34.3097C87.1205 34.5476 86.8027 34.8945 86.8027 35.4298C86.8027 36.0641 87.2595 36.5697 88.0739 36.5697C88.5605 36.5697 88.9081 36.3813 89.1365 36.1236Z"
            fill="#B71415"
          />
          <path
            d="M94.9861 33.5368H96.4162C96.6645 33.5368 96.8035 33.7747 96.8035 34.0423C96.8035 34.2604 96.6843 34.528 96.4162 34.528H94.9861V36.4708H97.6575C97.9058 36.4708 98.0448 36.7286 98.0448 37.0358C98.0448 37.2936 97.9257 37.581 97.6575 37.581H94.3009C94.0229 37.581 93.7646 37.4422 93.7646 37.1845V30.9199C93.7646 30.6622 94.0328 30.5234 94.3009 30.5234H97.6575C97.9257 30.5234 98.0448 30.801 98.0448 31.0686C98.0448 31.366 97.9058 31.6237 97.6575 31.6237H94.9861V33.5368V33.5368Z"
            fill="#B71415"
          />
          <path
            d="M101.947 37.1647L99.9209 33.2791V37.1647C99.9209 37.4225 99.613 37.5612 99.3052 37.5612C98.9973 37.5612 98.6895 37.4225 98.6895 37.1647V30.9002C98.6895 30.6325 98.9874 30.5037 99.3052 30.5037C99.7521 30.5037 99.9308 30.6028 100.219 31.1678L102.036 34.766V30.8902C102.036 30.6226 102.334 30.5037 102.652 30.5037C102.95 30.5037 103.268 30.6226 103.268 30.8902V37.1647C103.268 37.4225 102.96 37.5612 102.652 37.5612C102.364 37.5612 102.106 37.4621 101.947 37.1647Z"
            fill="#B71415"
          />
          <path
            d="M106.137 31.6039C105.889 31.6039 105.75 31.3462 105.75 31.0488C105.75 30.7911 105.859 30.5037 106.137 30.5037H107.786C108.064 30.5037 108.322 30.6424 108.322 30.9002V35.4103C108.322 37.026 107.339 37.6207 106.157 37.6207C104.846 37.6207 103.903 36.8971 103.903 35.6977C103.903 35.212 104.101 35.0931 104.519 35.0931C104.836 35.0931 105.104 35.1823 105.134 35.4896C105.154 35.9753 105.343 36.5204 106.107 36.5204C106.753 36.5204 107.11 36.1636 107.11 35.4103V31.6039H106.137Z"
            fill="#B71415"
          />
          <path
            d="M109.296 35.4103V32.7141C109.296 31.0984 110.259 30.5037 111.501 30.5037C112.742 30.5037 113.715 31.0984 113.715 32.7141V35.4103C113.715 37.026 112.742 37.6207 111.501 37.6207C110.259 37.6207 109.296 37.026 109.296 35.4103ZM112.484 32.7141C112.484 31.9509 112.106 31.6039 111.491 31.6039C110.865 31.6039 110.507 31.9509 110.507 32.7141V35.4103C110.507 36.1735 110.865 36.5204 111.491 36.5204C112.106 36.5204 112.484 36.1735 112.484 35.4103V32.7141Z"
            fill="#B71415"
          />
          <path
            d="M116.108 34.7364C116.108 34.6868 116.098 34.6373 116.079 34.6075L114.132 31.1481C114.112 31.0985 114.102 31.049 114.102 31.0192C114.102 30.712 114.579 30.4939 114.917 30.4939C115.115 30.4939 115.205 30.5732 115.294 30.7417L116.724 33.537L118.164 30.7417C118.253 30.5732 118.333 30.4939 118.531 30.4939C118.859 30.4939 119.346 30.7021 119.346 31.0192C119.346 31.049 119.346 31.0985 119.316 31.1481L117.37 34.6075C117.35 34.6373 117.33 34.6868 117.33 34.7364V37.1649C117.33 37.4226 117.032 37.5614 116.714 37.5614C116.416 37.5614 116.098 37.4226 116.098 37.1649V34.7364H116.108Z"
            fill="#B71415"
          />
        </svg>
        <div className="menu">Menu</div>
      </nav>
      <div className="countries">
        <div className="search-bar-button">
          <input
            type="search"
            placeholder="search"
            className="search"
            onChange={(event) => setQuery(event.target.value)}
          />
          {/* <div className="addButton" onClick={toggleModal}>
            <AiOutlineUserAdd />
          </div> */}
        </div>
        {data
          .filter((i) => {
            if (query === "") {
              return i;
            } else if (i.mame.toLowerCase().includes(query.toLowerCase())) {
              return i;
            }
          })
          .map((i) => {
            return (
              <Link
                to={`countries/${i.id}/university`}
                className="country background "
                style={{ backgroundImage: `url('${i.image}')` }}
              >
                <h1>{i.mame}</h1>
              </Link>
            );
          })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap");
  @media screen and (max-width: 480px) {
    margin: 10px;
    nav {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .search{
      height: 30px;
      width: 100%;
      border-radius: 10px;
      border: none;
      padding: 10px;
      background-color: var(--tg-theme-bg-color);
      margin-bottom: 20px;
      }
    a {
      text-decoration: none;
    }
    .menu {
      font-size: 20px;
      margin: 10px;
      color: var(--tg-theme-text-color);
    }
    .country {
      background-color: red;
      height: 120px;
      border-radius: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "DM Sans", sans-serif;
    }
    .background {
      background-position: center;
      background-size: cover;
    }
    h1 {
      color: white;
    }
  }
`;
