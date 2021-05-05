
export default function Card({ post }) {
  console.log(post)
  return (
    <div className="bg-white shadow-md w-1/2 rounded my-5">
      <div className="block overflow-hidden rounded-t h-60">
        <img
          className="object-cover w-full h-full"
          src={post.image}
          alt="post"
        />
      </div>
      <div className="m-2 flex">
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-500">
          { post.owner.picture ? 
            <img className="object-cover w-full h-full" src={post.owner.picture} alt={`Foto de ${post.owner.firstName}`}  />
          :
            <h1 className="text-xl font-bold text-white uppercase">
              {post.owner.firstName[0]}
            </h1>
          }
        </div>
        <div className="mx-4 text-sm">
          <p className="inline-block font-bold">{post.owner.firstName}&nbsp;{post.owner.firstName}</p>
          <br/>
          <p className="inline-block opacity-75">{post.owner.email}</p>
        </div>
      </div>
      <p className="m-2 font-light px-2">
       {post.text}
      </p>
      <div className="m-2">
        {post.tags.map((tag,i) => (
          <span key={`tag#${i}`} className="inline-block text-sm bg-green-100 rounded px-1 m-1">{`#${tag}`}</span>
        ))}
        <p># comentarios</p>
      </div>
    </div>
  );
}
