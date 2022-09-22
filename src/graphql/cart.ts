import { gql } from "graphql-tag";

const GET_CART = gql`
  query GET_CART {
    id:string
    imageUrl:string
    price: number
    title: string
    createAt:string
  }
`