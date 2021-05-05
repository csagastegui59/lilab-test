
export default function Card({ post }) {
  return (
    <div className="bg-white shadow-md w-1/2 rounded my-5">
      <div className="block overflow-hidden rounded-t h-60">
        <img
          className="object-cover w-full h-full"
          src={post.image}
          alt="post"
        />
      </div>
      <div className="m-2">
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-500">
          {/* if user photo don't exist */}
          <h1 className="text-xl font-bold text-white uppercase">
            {post.owner.firstName[0]}
          </h1>
          {/* else user photo exist */}
            {/* <img className="object-cover w-full h-full" src="" alt=""  /> */}
          {/* end */}
        </div>
        <p>{post.owner.firstName}</p>
        <p>Fecha</p>
      </div>
      <p className="font-light px-2">
       {post.text}
      </p>
      <div>
        <p>hashtags</p>
        <p># comentarios</p>
      </div>
    </div>
  );
}
