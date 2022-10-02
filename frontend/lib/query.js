export const PRODUCT_QUERY = `
  query{
  products{
    data{
      attributes{
        Title
        description
        price
        slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`;
export const GET_PRODUCT_QUERY = `
query getProduct($slug:String!) {
 products(filters:{slug:{eq:$slug}}){
   data{
     attributes{
        Title
        description
        price
        slug
       image{
        data{
          attributes{
            formats
          }
        }
       }
     }
   }
 }
  
}`;
