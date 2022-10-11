import { useEffect } from "react";
// import BlogList from "./BlogList";

const Home = () => {
	// const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			});
	}, []);

	// const handleDelete = (id) => {
	// 	const newBlog = blogs.filter((blog) => blog.id !== id);
	// 	setBlogs(newBlog);
	// };

	return (
		<div className="home">
			{/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
			{/* <BlogList
				blogs={blogs.filter((blog) => blog.author === "Tony")}
				title="Tony's Blogs!"
				handleDelete={handleDelete}
			/> */}
		</div>
	);
};

export default Home;
