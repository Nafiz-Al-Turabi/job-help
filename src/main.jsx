import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import Blog from './components/Blog/Blog';
import { jobDataLocal } from './components/loaders/getLocalData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
