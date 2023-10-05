// Without a defined matcher, this one line applies next-auth to the
// entire project

export { default } from 'next-auth/middleware'


//Applies next-auth to matching routes
export const config = { matcher: ["/profile", "/dashboard"] }