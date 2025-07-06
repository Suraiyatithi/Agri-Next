// import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;




// const AddItems = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const axiosPublic = useAxiosPublic();
//     const axiosSecure = useAxiosSecure();
//     const onSubmit = async (data) => {
//         console.log(data)
//         // image upload to imgbb and then get an url
//         const imageFile = { image: data.image[0] }
//         const res = await axiosPublic.post(image_hosting_api, imageFile, {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         });
//         if (res.data.success) {
//             // now send the menu item data to the server with the image url
//             const menuItem = {
//                 productName: data.productName,
//                 category: data.category,
//                 price: parseFloat(data.price),
//                authorEmail: data.authorEmail,
//                rating:parseFloat(data.rating),
//                description: data.description,
//                availableQuantity :parseFloat(data.availableQuantity),
//                 authorName:data.authorName,
//                  productImage: res.data.data.display_url
//             }
//             // 
//             const menuRes = await axiosSecure.post('/product', menuItem);
//             console.log(menuRes.data)
//             if(menuRes.data.insertedId){
//                 // show success popup
//                 reset();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `${data.productName} is added to the menu.`,
//                     showConfirmButton: false,
//                     timer: 1500
//                   });
//             }
//         }
//         console.log( 'with image url', res.data);
//     };

//     return (
//         <div>
         
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">Product Name*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Product Name"
//                             {...register('productName', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>
//                     <div className="flex gap-6">
//                         {/* category */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Category*</span>
//                             </label>
//                             <select defaultValue="default" {...register('category', { required: true })}
//                                 className="select select-bordered w-full">
//                                 <option disabled value="default">Select a category</option>
//                                 <option value="Fertilizer">Fertilizer</option>
//                                 <option value="Seeds">Seeds</option>
//                                 <option value="Tools">Tools</option>
//                                 <option value="Pesticides">Pesticides</option>
//                                 <option value="Machinery">Machinery</option>
//                             </select>
//                         </div>

//                         {/* price */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Price*</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="Price"
//                                 {...register('price', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">rating*</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="rating"
//                                 {...register('rating', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>

//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">availableQuantity *</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="availableQuantity "
//                                 {...register('availableQuantity ', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>

//                     </div>
//                     {/* recipe details */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Description</span>
//                         </label>
//                         <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
//                     </div>

//  <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">authorName*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="authorName"
//                             {...register('authorName', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>
//                      <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">authorEmail*</span>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="authorEmail"
//                             {...register('authorEmail', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>

//                     <div className="form-control w-full my-6">
//                         <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
//                     </div>

//                     <button className="btn">
//                         Add Item <FaUtensils className="ml-4"></FaUtensils>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddItems;
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    if (res.data.success) {
      const menuItem = {
        productName: data.productName,
        category: data.category,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        availableQuantity: parseFloat(data.availableQuantity),
        description: data.description,
        authorName: data.authorName,
        authorEmail: data.authorEmail,
        productImage: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post('/product', menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.productName} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">Product Name*</label>
            <input
              type="text"
              placeholder="Enter product name"
              {...register('productName', { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Category*</label>
            <select {...register('category', { required: true })} className="select select-bordered w-full">
              <option disabled value="default">Select a category</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Seeds">Seeds</option>
              <option value="Tools">Tools</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Machinery">Machinery</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium">Price*</label>
            <input
              type="number"
              placeholder="Enter price"
              {...register('price', { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Rating*</label>
            <input
              type="number"
              step="0.1"
              placeholder="e.g. 4.5"
              {...register('rating', { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Available Quantity*</label>
            <input
              type="number"
              {...register('availableQuantity', { required: true })}
              placeholder="e.g. 100"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Image*</label>
            <input
              type="file"
              {...register('image', { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-medium">Description</label>
          <textarea
            {...register('description')}
            placeholder="Enter product description"
            className="textarea textarea-bordered w-full h-24"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-medium">Author Name*</label>
            <input
              type="text"
              {...register('authorName', { required: true })}
              placeholder="Your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Author Email*</label>
            <input
              type="email"
              {...register('authorEmail', { required: true })}
              placeholder="Your email"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
            <FaUtensils className="mr-2" /> Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
