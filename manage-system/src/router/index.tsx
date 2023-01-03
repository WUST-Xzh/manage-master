import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'


const Layout = lazy(()=>import('../view/Home/index'))
const Custom = lazy(()=>import('../view/Custom/index'))
const Produce = lazy(()=>import('../view/Produce/index'))
const Money = lazy(()=>import('../view/Money/index'))
const People = lazy(()=>import('../view/People/index'))

const withLoading = (component:JSX.Element)=>{
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    {component}
  </React.Suspense>
  )
}

const routes = [
  {
    path: "/",
    element: <Navigate to={'/custom'}/>,
  },
  {
    path: "/",
    element: withLoading(<Layout/>),
    children: [
      {
        path: "/custom",
        element: withLoading(<Custom/>),
      },
      {
        path: "/produce",
        element: withLoading(<Produce/>),
      },
      {
        path: "/money",
        element: withLoading(<Money/>),
      },
      {
        path: "/people",
        element: withLoading(<People/>),
      },
    ]
  }
]


export default routes





