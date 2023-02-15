import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";


const serviceOdvoz = () => {

    const streets1 = ["⪢Domovinskog rata",
                            "⪢Lička",
                            "⪢Gundulićeva",
                            "⪢Starčevićeva",
                            "⪢Ujevićeva"];
    const [filteredList1, setFilteredList1] = new useState(streets1);

    const streets2 = ["⪢Put Skalica",
                        "⪢Table"];
    const [filteredList2, setFilteredList2] = new useState(streets2);

    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList1 = [...streets1];
        var updatedList2 = [...streets2];

        updatedList1 = updatedList1.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });
        updatedList2 = updatedList2.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });

        setFilteredList1(updatedList1);
        setFilteredList2(updatedList2);
      };
    

  return(
    <>
    <Header/>
    <div className="odvoz-title">
          <h1 className="font-bold text-6xl odvoz-title-component">Raspored odvoza </h1>
          <h1 className="font-bold text-6xl text-[#1D7110] odvoz-title-component">komunalnog otpada </h1>
          <h1 className="font-bold text-6xl odvoz-title-component">po blokovima</h1>
        </div>
    <Link  className="education-return" href='/service'>← Povratak na usluge</Link>
  
    <div className="education-subpage--wrapper">
        <div className="odvoz--link-wrapper">
            <a className="odvoz--link" href="#varos">↓ Varoš-Meje</a>
            <a className="odvoz--link" href="#lucac">↓ Lučac-Manuš</a>
            <a className="odvoz--link" href="#pujanke">↓ Pujanke-Sućidar</a>
        </div>
    </div>

    <div className="odvoz--search-wrapper">
        <div className="odvoz--search-text">Unesite svvoju ulicu za filtriranje:&nbsp;</div>
        <input id="odvoz--search-box" onChange={filterBySearch} />
    </div>

    <div className="odvoz-table-wrapper">
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
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList2.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
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
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList2.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2 puta tjedno (ponedjeljak, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
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
                    <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  class="odvoz--table-body">
                    <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {filteredList2.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr class="bg-[#1D711020] border-b">
                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    </div>


    <Footer/>
    </>
  )
}

export default serviceOdvoz;