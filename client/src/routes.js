import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { DashboardLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import SignUp from "./views/SignUp.component";

export default [
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: BlogOverview
  },
  {
    path: "/merchants",
    layout: DashboardLayout,
    component: BlogOverview
  },
  {
    path: "/users",
    layout: DashboardLayout,
    component: BlogOverview
  },
  {
    path: "/deliveries",
    layout: DashboardLayout,
    component: BlogOverview
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: SignUp
  },


  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DashboardLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
