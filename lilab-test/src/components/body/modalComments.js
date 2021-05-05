export default function ModalComments({ 
  handleComments,
  modalComments
 }) {

  return (
    <div className={`${modalComments ? 'absolute' : 'hidden'} top-0 left-0 flex items-center`}>
      <div
        className={`absolute h-screen w-screen z-10 bg-black bg-opacity-25`}
        onClick={() => handleComments(false)}
      >
      </div> 
      
      <div className="bg-white">
        <h1>Hola</h1>
        {/* <img src={data.photo} className=""/> */}
      </div>
    </div>
  )
}
