import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ImArrowDown2, ImArrowLeft2 } from "react-icons/im";


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
    <Link  className="education-return" href='/service'><ImArrowLeft2/> Povratak na usluge</Link>
  
    <div className="education-subpage--wrapper">
        <div className="odvoz--link-wrapper">
            <a className="odvoz--link" href="#varos"><ImArrowDown2/> Varoš-Meje</a>
            <a className="odvoz--link" href="#lucac"><ImArrowDown2/> Lučac-Manuš</a>
            <a className="odvoz--link" href="#pujanke"><ImArrowDown2/> Pujanke-Sućidar</a>
        </div>
    </div>

    <div className="odvoz--search-wrapper">
        <div className="odvoz--search-text">Unesite svoju ulicu za filtriranje:&nbsp;</div>
        <input id="odvoz--search-box" onChange={filterBySearch} />
    </div>

    <div className="odvoz-table-wrapper">
    <h2 className="odvoz--table-title" id="varos">Varoš-Meje</h2>
    <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead className="odvoz--table-head">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  className="odvoz--table-body">
                    <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr className="bg-[#1D711020] border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
    <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead className="odvoz--table-head">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  className="odvoz--table-body">
                    <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList1.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr className="bg-[#1D711020] border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {filteredList2.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2 puta tjedno (ponedjeljak, petak)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
    <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead className="odvoz--table-head">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                        Dana u tjednu
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                        Ulice
                    </th>
                    </tr>
                </thead>
                <tbody  className="odvoz--table-body">
                    <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        7 puta tjedno (svakodnevno)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {filteredList2.map((item, index) => (
                        <div key={index}>{item}</div>
                        ))}
                    </td>
                    </tr>
                    <tr className="bg-[#1D711020] border-b">
                    <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        3 puta tjedno (ponedjeljak, srijeda, petak)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
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