import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { App } from './app';
import { Person } from './person/person';
import { NotFound } from './not-found/not-found';
import { About } from './about/about';

export const routes: Routes = [

  {
    path:"",
    redirectTo: "/people",
    pathMatch: "full"
  },
  {
    path: "people",
    component: Person
  },
  {
    path: "about",
    component: About
  },
  {
    path:"**",
    component: NotFound
  }

];
