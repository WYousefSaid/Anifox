export const ssr = true;
export const load = ({ url }) => {
  const { pathname } = url

  return {
    pathname
  }
}