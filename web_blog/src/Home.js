import useFetch from './usefetch';
import List from './List'
const Home = () => {
    const {blogs,IsPending,error}=useFetch('http://localhost:8000/blogs')
    return (
        <div className="homepage">
            
          {error && <div>{error}</div>}
          {IsPending&&<div>Loading...</div>}
      {blogs&& <List blogs={blogs} title="All blogs"/>}
        
        </div>
      );
}
 
export default Home;