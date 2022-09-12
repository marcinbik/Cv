export default function () {
    return(
            <form action="/send-data-here" method="post">
                <label className="block text-white text-sm font-bold mb-2" for="first">Imię:</label>
                <input type="text" id="first" name="first" className='class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"' />
                <label className="block text-white text-sm font-bold mb-2" for="last">Nazwisko:</label>
                <input type="text" className='class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"' id="last" name="last" />
                <label className="block text-white text-sm font-bold mb-2" for="info">Treść</label>
                <textarea type="text"  id="info" className='class="shadow appearance-none border h-[12vh]  border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"' name="last" />
                <button className=' focus:outline-none text-white bg-[#b12c2c] hover:bg-green-800 focus:ring-4 focus:bg-[#b12c2c] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '  type="submit">Submit</button>
            </form>
  )
    
}