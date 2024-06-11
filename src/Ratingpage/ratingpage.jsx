function Rating( { totalStars = 7 } ){

 



  return(

<>

<div className="flex flex-col items-center justify-center min-h-screen  bg-blue-100 p-">
<div className="w-full max-w-lg  bg-white p-8 rounded-lg shadow-lg">



     
  <h2 className=" text-3xl font-bold mb-4 text-center text-yellow-400 ">Rate here </h2>

  <div className="flex space-x-2">
  </div>



  <h2 className="text-2xl font-bold mb-4">How much you satisfied with our plan ? </h2>
  <h2 className="text-2xl font-bold mb-4">How would you rate the expertise of our workout instruction ?</h2>
  <h2 className="text-2xl font-bold mb-4">Any suggestions for improving our workout and diet plan  program?</h2>

  <textarea
          name="comments"
          className="w-full p-3 mb-4 bg-gray-200 rounded"
          placeholder="Type your comments here"
         
        />

<button
          className="w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          
        >
          Submit
        </button>






</div>
</div>
</>





  )
}
export default Rating