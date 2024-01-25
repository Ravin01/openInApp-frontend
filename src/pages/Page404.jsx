import { Link } from "react-router-dom"


const Page404 = () => {
  return (
    <div>
        <h2>Page 404</h2>
        <h4>Page not found</h4>
        <button>
        <Link to={'/'} >Go to Home</Link>
        </button>
    </div>
  )
}

export default Page404