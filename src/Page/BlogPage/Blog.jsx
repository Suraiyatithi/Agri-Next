import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; 

const BlogPage = () => {
  const axiosSecure = useAxiosSecure();
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '', description: '', image: '', authorName: '', authorEmail: ''
  });

  // Fetch all blogs
  useEffect(() => {
    axiosSecure.get('/blog')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, [axiosSecure]);

  // Add new blog
  const handleAddBlog = async () => {
    try {
      const res = await axiosSecure.post('/blog', newBlog);
      if (res?.data?.insertedId || res?.data?._id) {
        setBlogs([res.data, ...blogs]);
        setNewBlog({
          title: '', description: '', image: '', authorName: '', authorEmail: ''
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Like a blog
  const handleLike = async (id) => {
    try {
      const res = await axiosSecure.patch(`/blog/${id}/like`);
      setBlogs(blogs.map(blog => blog._id === id ? res.data : blog));
    } catch (err) {
      console.error(err);
    }
  };

  // Add comment
  const handleComment = async (id) => {
    const commenterName = prompt("Your name:");
    const commentText = prompt("Your comment:");
    if (!commenterName || !commentText) return;

    try {
      const res = await axiosSecure.patch(`/blog/${id}/comment`, {
        commenterName,
        commentText
      });
      setBlogs(blogs.map(blog => blog._id === id ? res.data : blog));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">


      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="border p-4 rounded mb-4 bg-white shadow">
          <img src={blog.image} alt="Blog" className="w-full h-64 object-cover mb-2 rounded" />
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p>{blog.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            By {blog.authorName} ({blog.authorEmail})
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleLike(blog._id)}
              className="text-blue-600 hover:underline"
            >
              ❤️ {blog.likes}
            </button>
            <button
              onClick={() => handleComment(blog._id)}
              className="text-green-600 hover:underline"
            >
              💬 Comment
            </button>
          </div>
          <div className="mt-2 pl-2 border-l text-sm">
            {blog.comments?.map((c, i) => (
              <p key={i}><strong>{c.commenterName}:</strong> {c.commentText}</p>
            ))}
          </div>
        </div>
      ))}

      
      <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
      <div className="space-y-2 mb-8">
        {Object.keys(newBlog).map((key) => (
          <input
            key={key}
            className="w-full p-2 border rounded"
            placeholder={key}
            value={newBlog[key]}
            onChange={e => setNewBlog({ ...newBlog, [key]: e.target.value })}
          />
        ))}
        <button
          onClick={handleAddBlog}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Blog
        </button>
      </div>

    
    </div>
  );
};

export default BlogPage;
