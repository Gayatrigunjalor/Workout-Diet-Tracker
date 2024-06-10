function Feedback(){

return(
    <>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-6 relative">
    <div class="absolute bottom-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
    
    </div>
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 class="text-2xl font-bold text-orange-400 mb-4">Submit your feedback</h1>
        <p class="text-gray-400 mb-6">Take a movment to fill this form to review our 
            Workout and diet site- your feedback is greatly appreciated .</p>
        <form>
            <input className="block w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             placeholder="Your Name" />
             
            <input className="block w-full p-3 mb-6 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your email" />

            <button className="w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
            NEXT</button>
        </form>
    </div>
</div>







    </>
)

}

export default Feedback