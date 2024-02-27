import { useTheme } from "@mui/material";

const Notification = () => {
  const theme = useTheme();
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6827 4.06039C12.8695 3.59878 13.1898 3.20347 13.6027 2.92511C14.0156 2.64675 14.5022 2.49805 15.0002 2.49805C15.4981 2.49805 15.9848 2.64675 16.3977 2.92511C16.8106 3.20347 17.1309 3.59878 17.3177 4.06039C19.1661 4.56875 20.7966 5.66984 21.9586 7.19456C23.1207 8.71929 23.7501 10.5833 23.7502 12.5004V18.3716L26.0402 21.8066C26.1658 21.9949 26.2379 22.2137 26.2489 22.4397C26.2599 22.6658 26.2093 22.8906 26.1025 23.0901C25.9958 23.2896 25.8368 23.4564 25.6427 23.5727C25.4486 23.689 25.2265 23.7504 25.0002 23.7504H19.3314C19.1809 24.7918 18.6603 25.7441 17.8648 26.4328C17.0694 27.1216 16.0524 27.5007 15.0002 27.5007C13.948 27.5007 12.931 27.1216 12.1356 26.4328C11.3401 25.7441 10.8194 24.7918 10.6689 23.7504H5.00019C4.77388 23.7504 4.55182 23.689 4.35768 23.5727C4.16354 23.4564 4.00461 23.2896 3.89784 23.0901C3.79108 22.8906 3.74049 22.6658 3.75147 22.4397C3.76245 22.2137 3.83459 21.9949 3.96019 21.8066L6.25019 18.3716V12.5004C6.25019 8.47039 8.97519 5.07539 12.6827 4.06039ZM13.2327 23.7504C13.3618 24.1162 13.6012 24.433 13.9178 24.657C14.2345 24.8811 14.6129 25.0014 15.0008 25.0014C15.3887 25.0014 15.7671 24.8811 16.0838 24.657C16.4005 24.433 16.6398 24.1162 16.7689 23.7504H13.2314H13.2327ZM15.0002 6.25039C13.3426 6.25039 11.7529 6.90887 10.5808 8.08098C9.40867 9.25308 8.75019 10.8428 8.75019 12.5004V18.7504C8.75024 18.9973 8.67717 19.2387 8.54019 19.4441L7.33644 21.2504H22.6627L21.4589 19.4441C21.3224 19.2386 21.2498 18.9972 21.2502 18.7504V12.5004C21.2502 10.8428 20.5917 9.25308 19.4196 8.08098C18.2475 6.90887 16.6578 6.25039 15.0002 6.25039Z"
        fill={theme.palette.mode === "light" ? "#221835" : "#dedede"}
      />
      <circle
        cx="21.25"
        cy="7.5"
        r="4.375"
        fill="#FF0000"
        stroke="#EBEBEB"
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default Notification;