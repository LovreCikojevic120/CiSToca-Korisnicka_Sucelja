import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const serviceOdvoz = () => {
  return(
    <>
    <Header/>
    <div className="odvoz-title">
          <h1 className="font-bold text-6xl odvoz-title-component">Raspored odvoza </h1>
          <h1 className="font-bold text-6xl text-[#1D7110] odvoz-title-component">komunalnog otpada </h1>
          <h1 className="font-bold text-6xl odvoz-title-component">po blokovima</h1>
        </div>
    <Link  className="education-return" href='/servicePage'>🡸 Povratak na usluge</Link>
    {/* <div className="w-[95%] p-2 education-subpage-background mx-10px absolute bg-[#9DEC8F] -z-10 rounded-tr-[20%] rounded-tl-[5px] rounded-br-[20%] rounded-bl-[5px]"></div> */}
    
    <div className="education-subpage--wrapper">
        <div className="odvoz--link-wrapper">
            <a className="odvoz--link" href="#varos">🡻 Varoš-Meje</a>
            <a className="odvoz--link" href="#lucac">🡻 Lučac-Manuš</a>
            <a className="odvoz--link" href="#pujanke">🡻 Pujanke-Sućidar</a>
        </div>
    </div>
    
    <h2 className="odvoz--table-title" id="varos">Varoš-Meje</h2>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                <thead class="odvoz--table-head">
                    <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  class="odvoz--table-body">
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Domovinskog rata <br/> ⪢ Lička <br/> ⪢ Gundulićeva <br/> ⪢ Starčevićeva <br/> ⪢ Ujevićeva
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Put Skalica <br/> ⪢ Table
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>

    <h2 className="odvoz--table-title" id="lucac">Lučac-Manuš</h2>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                <thead class="odvoz--table-head">
                    <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  class="odvoz--table-body">
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Domovinskog rata <br/> ⪢ Lička <br/> ⪢ Gundulićeva <br/> ⪢ Starčevićeva <br/> ⪢ Ujevićeva
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Put Skalica <br/> ⪢ Table
                    </td>
                    </tr>
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2 puta tjedno (ponedjeljak, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Zajčeva <br/> ⪢ Manuš
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>

    <h2 className="odvoz--table-title" id="pujanke">Pujanke-Sućidar</h2>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                <thead class="odvoz--table-head">
                    <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  class="odvoz--table-body">
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Domovinskog rata <br/> ⪢ Ujevićeva
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ⪢ Put Skalica <br/> ⪢ Table
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>



    <Footer/>
    </>
  )
}

export default serviceOdvoz;