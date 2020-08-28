/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPage
// ====================================================

export interface getPage_page_metadata_sections {
  _id: string | null;
}

export interface getPage_page_metadata {
  sections: (getPage_page_metadata_sections | null)[] | null;
}

export interface getPage_page {
  slug: string | null;
  metadata: getPage_page_metadata | null;
}

export interface getPage_ctas_nodes_metadata {
  color: string | null;
  title: string | null;
  subtitle: string | null;
  cta_text: string | null;
  goto: string | null;
}

export interface getPage_ctas_nodes {
  id: string;
  slug: string | null;
  type_slug: string | null;
  metadata: getPage_ctas_nodes_metadata | null;
}

export interface getPage_ctas {
  nodes: getPage_ctas_nodes[];
}

export interface getPage_testimonials_nodes_metadata_avatar {
  url: string | null;
}

export interface getPage_testimonials_nodes_metadata {
  author: string | null;
  text: string | null;
  avatar: getPage_testimonials_nodes_metadata_avatar | null;
}

export interface getPage_testimonials_nodes {
  id: string;
  slug: string | null;
  type_slug: string | null;
  metadata: getPage_testimonials_nodes_metadata | null;
}

export interface getPage_testimonials {
  nodes: getPage_testimonials_nodes[];
}

export interface getPage {
  page: getPage_page | null;
  ctas: getPage_ctas;
  testimonials: getPage_testimonials;
}

export interface getPageVariables {
  slug: string;
  ctaIds?: (string | null)[] | null;
  testimonialIds?: (string | null)[] | null;
}
