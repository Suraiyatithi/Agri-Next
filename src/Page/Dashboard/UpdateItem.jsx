// import { useLoaderData } from "react-router-dom";

// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

// // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const UpdateItem = () => {
//     const {name, category, recipe, price, _id} = useLoaderData();

//     const { register, handleSubmit } = useForm();
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
//                 name: data.name,
//                 category: data.category,
//                 price: parseFloat(data.price),
//                 recipe: data.recipe,
//                 image: res.data.data.display_url
//             }
//             // 
//             const menuRes = await axiosSecure.patch(`/product/${_id}`, menuItem);
//             console.log(menuRes.data)
//             if(menuRes.data.modifiedCount > 0){
//                 // show success popup
//                 // reset();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `${data.name} is updated to the menu.`,
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
//                             <span className="label-text">Recipe Name*</span>
//                         </label>
//                         <input
//                             type="text"
//                             defaultValue={name}
//                             placeholder="Recipe Name"
//                             {...register('name', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>
//                     <div className="flex gap-6">
//                         {/* category */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Category*</span>
//                             </label>
//                             <select defaultValue={category} {...register('category', { required: true })}
//                                 className="select select-bordered w-full">
//                                 <option disabled value="default">Select a category</option>
//                                 <option value="salad">Salad</option>
//                                 <option value="pizza">Pizza</option>
//                                 <option value="soup">Soup</option>
//                                 <option value="dessert">Dessert</option>
//                                 <option value="drinks">Drinks</option>
//                             </select>
//                         </div>

//                         {/* price */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Price*</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 defaultValue={price}
//                                 placeholder="Price"
//                                 {...register('price', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>

//                     </div>
//                     {/* recipe details */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Recipe Details</span>
//                         </label>
//                         <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
//                     </div>

//                     <div className="form-control w-full my-6">
//                         <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
//                     </div>

//                     <button className="btn">
//                         Update menu Item
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateItem;


import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {
    productName,
    category,
    description,
    price,
    rating,
    authorName,
    authorEmail,
    availableQuantity,
    productImage,
    _id
  } = useLoaderData();

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    let imageURL = productImage; // default to existing image

    if (data.image && data.image[0]) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });

      if (res.data.success) {
        imageURL = res.data.data.display_url;
      }
    }

    const updatedItem = {
      productName: data.productName,
      category: data.category,
      price: parseFloat(data.price),
      rating: parseFloat(data.rating),
      authorName: data.authorName,
      authorEmail: data.authorEmail,
      availableQuantity: parseFloat(data.availableQuantity),
      description: data.description,
      productImage: imageURL
    };

    const menuRes = await axiosSecure.patch(`/product/${_id}`, updatedItem);
    if (menuRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.productName} is updated successfully.`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md rounded-lg">
        {/* Product Name */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Product Name*</span>
          </label>
          <input
            type="text"
            defaultValue={productName}
            {...register("productName", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Category & Price */}
        <div className="flex flex-wrap gap-6">
          <div className="form-control w-full md:w-[48%] mb-4">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">Select a category</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Seeds">Seeds</option>
              <option value="Tools">Tools</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Machinery">Machinery</option>
            </select>
          </div>

          <div className="form-control w-full md:w-[48%] mb-4">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              defaultValue={price}
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Rating & Quantity */}
        <div className="flex flex-wrap gap-6">
          <div className="form-control w-full md:w-[48%] mb-4">
            <label className="label">
              <span className="label-text">Rating*</span>
            </label>
            <input
              type="number"
              step="0.1"
              defaultValue={rating}
              {...register("rating", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full md:w-[48%] mb-4">
            <label className="label">
              <span className="label-text">Available Quantity*</span>
            </label>
            <input
              type="number"
              defaultValue={availableQuantity}
              {...register("availableQuantity", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            defaultValue={description}
            {...register("description")}
            className="textarea textarea-bordered h-24 w-full"
          />
        </div>

        {/* Author Name */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Author Name*</span>
          </label>
          <input
            type="text"
            defaultValue={authorName}
            {...register("authorName", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Author Email */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Author Email*</span>
          </label>
          <input
            type="email"
            defaultValue={authorEmail}
            {...register("authorEmail", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Image File (Optional) */}
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text">Upload New Image (Optional)</span>
          </label>
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;

