import { LucideProps, MessageSquare, User } from 'lucide-react'

export const Icons = {
  user: User,
  
  notifs: (props: LucideProps) => (<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_569_1845)">
  <path d="M21.9536 16.8835L17.4935 10.9356L17.5125 7.54021C17.5273 4.69064 14.9892 2.37092 11.8418 2.35754C8.69446 2.34417 6.13234 4.64216 6.11757 7.49174L6.09986 10.8008L1.5399 16.799C1.02614 17.4716 1.5572 18.3949 2.4657 18.3963L21.0218 18.4736C21.9288 18.4801 22.4675 17.559 21.9607 16.8798L21.9536 16.8835Z" fill="#3F3F3F"/>
  </g>
  <path d="M14.5405 19.4738L8.0186 19.4525C8.30699 20.8421 9.65038 21.8938 11.2682 21.9015C12.886 21.9092 14.2372 20.8627 14.5405 19.4738Z" fill="#3F3F3F"/>
  <defs>
  <clipPath id="clip0_569_1845">
  <rect width="25.5384" height="23.1221" fill="white" transform="translate(0.0878906 0.673828)"/>
  </clipPath>
  </defs>
  </svg>
  
  
  ),
  events: (props: LucideProps) => (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.06055 8.85064C2.06055 7.33167 2.06055 6.57219 2.53243 6.1003C3.00431 5.62842 3.7638 5.62842 5.28277 5.62842H18.938C20.4569 5.62842 21.2164 5.62842 21.6883 6.1003C22.1602 6.57219 22.1602 7.33167 22.1602 8.85064V9.68611C22.1602 10.0659 22.1602 10.2557 22.0422 10.3737C21.9243 10.4917 21.7344 10.4917 21.3546 10.4917H2.8661C2.48636 10.4917 2.29649 10.4917 2.17852 10.3737C2.06055 10.2557 2.06055 10.0659 2.06055 9.68611V8.85064Z" fill="#3F3F3F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.06055 18.9413C2.06055 20.4603 2.06055 21.2197 2.53243 21.6916C3.00431 22.1635 3.7638 22.1635 5.28277 22.1635H18.938C20.4569 22.1635 21.2164 22.1635 21.6883 21.6916C22.1602 21.2197 22.1602 20.4603 22.1602 18.9413V13.2426C22.1602 12.8628 22.1602 12.673 22.0422 12.555C21.9243 12.437 21.7344 12.437 21.3546 12.437H2.8661C2.48636 12.437 2.29649 12.437 2.17852 12.555C2.06055 12.673 2.06055 12.8628 2.06055 13.2426V18.9413ZM7.08504 15.1879C7.08504 14.8081 7.08504 14.6182 7.20301 14.5003C7.32098 14.3823 7.51086 14.3823 7.8906 14.3823H10.2994C10.6792 14.3823 10.869 14.3823 10.987 14.5003C11.105 14.6182 11.105 14.8081 11.105 15.1879V15.5221C11.105 15.9018 11.105 16.0917 10.987 16.2096C10.869 16.3276 10.6792 16.3276 10.2994 16.3276H7.8906C7.51086 16.3276 7.32098 16.3276 7.20301 16.2096C7.08504 16.0917 7.08504 15.9018 7.08504 15.5221V15.1879ZM7.20301 18.3909C7.08504 18.5089 7.08504 18.6987 7.08504 19.0785V19.4127C7.08504 19.7924 7.08504 19.9823 7.20301 20.1002C7.32098 20.2182 7.51086 20.2182 7.8906 20.2182H10.2994C10.6792 20.2182 10.869 20.2182 10.987 20.1002C11.105 19.9823 11.105 19.7924 11.105 19.4127V19.0785C11.105 18.6987 11.105 18.5089 10.987 18.3909C10.869 18.2729 10.6792 18.2729 10.2994 18.2729H7.8906C7.51086 18.2729 7.32098 18.2729 7.20301 18.3909ZM13.1149 15.1879C13.1149 14.8081 13.1149 14.6182 13.2329 14.5003C13.3509 14.3823 13.5407 14.3823 13.9205 14.3823H16.3293C16.709 14.3823 16.8989 14.3823 17.0169 14.5003C17.1348 14.6182 17.1348 14.8081 17.1348 15.1879V15.5221C17.1348 15.9018 17.1348 16.0917 17.0169 16.2096C16.8989 16.3276 16.709 16.3276 16.3293 16.3276H13.9205C13.5407 16.3276 13.3509 16.3276 13.2329 16.2096C13.1149 16.0917 13.1149 15.9018 13.1149 15.5221V15.1879ZM13.2329 18.3909C13.1149 18.5089 13.1149 18.6987 13.1149 19.0785V19.4127C13.1149 19.7924 13.1149 19.9823 13.2329 20.1002C13.3509 20.2182 13.5407 20.2182 13.9205 20.2182H16.3293C16.709 20.2182 16.8989 20.2182 17.0169 20.1002C17.1348 19.9823 17.1348 19.7924 17.1348 19.4127V19.0785C17.1348 18.6987 17.1348 18.5089 17.0169 18.3909C16.8989 18.2729 16.709 18.2729 16.3293 18.2729H13.9205C13.5407 18.2729 13.3509 18.2729 13.2329 18.3909Z" fill="#3F3F3F"/>
  <path d="M7.08594 3.68311L7.08594 6.60106" stroke="#3F3F3F" stroke-width="1.61111" stroke-linecap="round"/>
  <path d="M17.1367 3.68311L17.1367 6.60106" stroke="#3F3F3F" stroke-width="1.61111" stroke-linecap="round"/>
  </svg>
  
  ),
  inbox: (props: LucideProps) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.05078 6.61297C2.05078 5.10447 2.05078 4.35022 2.51941 3.88159C2.98804 3.41296 3.74229 3.41296 5.25078 3.41296H18.1679C19.6764 3.41296 20.4307 3.41296 20.8993 3.88159C21.3679 4.35022 21.3679 5.10447 21.3679 6.61296V7.42166C21.3679 8.17591 21.3679 8.55303 21.1336 8.78734C20.8993 9.02166 20.5222 9.02166 19.7679 9.02166H3.65078C2.89653 9.02166 2.51941 9.02166 2.2851 8.78734C2.05078 8.55303 2.05078 8.17591 2.05078 7.42166V6.61297Z" fill="#3F3F3F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75372 19.3492C2.05078 18.6463 2.05078 17.5149 2.05078 15.2522V10.7043H21.1747V15.2522C21.1747 17.5149 21.1747 18.6463 20.4718 19.3492C19.7689 20.0522 18.6375 20.0522 16.3747 20.0522H6.85078C4.58804 20.0522 3.45667 20.0522 2.75372 19.3492ZM9.22227 14.5782C8.78044 14.5782 8.42227 14.9364 8.42227 15.3782C8.42227 15.8201 8.78044 16.1782 9.22227 16.1782H14.0033C14.4451 16.1782 14.8033 15.8201 14.8033 15.3782C14.8033 14.9364 14.4451 14.5782 14.0033 14.5782H9.22227Z" fill="#3F3F3F"/>
  </svg>
  ),
  groups: (props: LucideProps) => (<svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="16.262" cy="11.5776" rx="5.31668" ry="5.14563" fill="#3F3F3F"/>
  <ellipse cx="22.9074" cy="11.5777" rx="3.98751" ry="3.85922" fill="#3F3F3F"/>
  <ellipse cx="9.61642" cy="11.5777" rx="3.98751" ry="3.85922" fill="#3F3F3F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.664 23.1553H27.3319C27.8095 23.1553 28.1755 22.7449 28.0762 22.2777C27.7021 20.5175 26.4813 16.7233 22.9083 16.7233C21.7306 16.7233 20.8084 17.1355 20.0879 17.7512C22.092 19.0096 23.1282 21.2131 23.664 23.1553Z" fill="#3F3F3F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4384 17.7513C11.7179 17.1355 10.7957 16.7233 9.61791 16.7233C6.04487 16.7233 4.82406 20.5175 4.44995 22.2777C4.35065 22.7449 4.71664 23.1553 5.19428 23.1553H8.86247C9.39823 21.2131 10.4344 19.0097 12.4384 17.7513Z" fill="#3F3F3F"/>
  <path d="M16.263 18.0096C21.2261 18.0096 22.4828 22.3142 22.801 24.4941C22.8497 24.8275 22.874 24.9942 22.8145 25.1746C22.7531 25.3609 22.5849 25.5555 22.4094 25.6432C22.2394 25.7281 22.0491 25.7281 21.6683 25.7281H10.8577C10.477 25.7281 10.2866 25.7281 10.1167 25.6432C9.94118 25.5555 9.77293 25.3609 9.71154 25.1746C9.65208 24.9942 9.67641 24.8275 9.72508 24.4941C10.0433 22.3142 11.3 18.0096 16.263 18.0096Z" fill="#3F3F3F"/>
  </svg>
  
  ),
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 497 497'>
      <g>
        <path
          d='m392 30c-71.75 0-71.75-30-143.5-30l128.5 497h30c33.137 0 60-26.863 60-60v-228.526c18.555-18.938 30-44.867 30-73.474 0-57.99-47.01-105-105-105z'
          fill='#c87044'
        />
        <path
          d='m437 437-45-377c-41.895 0-63.904-18.405-83.322-34.644-16.942-14.167-30.323-25.356-60.178-25.356-71.75 0-71.75 30-143.5 30-57.99 0-105 47.01-105 105 0 28.607 11.445 54.537 30 73.474v228.526c0 33.137 26.863 60 60 60h287c33.137 0 60-26.863 60-60z'
          fill='#db905a'
        />
        <path
          d='m392 60-15 407h30c16.542 0 30-13.458 30-30v-228.526c0-7.851 3.077-15.388 8.571-20.996 13.819-14.103 21.429-32.74 21.429-52.478 0-41.355-33.645-75-75-75z'
          fill='#ffd185'
        />
        <path
          d='m407 437v-228.526c0-15.796 6.088-30.708 17.143-41.991 8.291-8.462 12.857-19.643 12.857-31.483 0-41.355-20.187-75-45-75-41.895 0-63.904-9.203-83.322-17.322-16.942-7.083-30.323-12.678-60.178-12.678-29.856 0-43.236 5.595-60.177 12.678-19.419 8.119-41.429 17.322-83.323 17.322-41.355 0-75 33.645-75 75 0 19.738 7.61 38.375 21.429 52.479 5.494 5.607 8.571 13.145 8.571 20.995v228.526c0 16.542 13.458 30 30 30h287c16.542 0 30-13.458 30-30z'
          fill='#ffe8c2'
        />
        <g fill='#ffd185'>
          <circle cx='392' cy='135' r='7.5' />
          <circle cx='362' cy='165' r='7.5' />
          <circle cx='105' cy='377' r='7.5' />
          <circle cx='135' cy='407' r='7.5' />
          <circle cx='105' cy='135' r='7.5' />
        </g>
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 24 24'>
      <path
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
        fill='#4285F4'
      />
      <path
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
        fill='#34A853'
      />
      <path
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
        fill='#FBBC05'
      />
      <path
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
        fill='#EA4335'
      />
      <path d='M1 1h22v22H1z' fill='none' />
    </svg>
  ),
  commentReply: MessageSquare,
}