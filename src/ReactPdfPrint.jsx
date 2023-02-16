import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { AiFillPrinter } from "react-icons/ai";
import { SiYamahamotorcorporation } from "react-icons/si";
import { data } from "./data";

const ReactPdfPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "invoice",
    onAfterPrint: () => alert("Print success!"),
  });

  return (
    <div className="p-10">
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight, margin: "0 auto" }}
        className="border px-10"
      >
        <SiYamahamotorcorporation size={50} className="float-right" />
        <div className="flex justify-between mx-8 mt-16">
          <div>
            <p className="text-3xl font-semibold tracking-widest">INVOICE</p>
            <p>No. 1234-5678-9876</p>
          </div>
          <div>
            <p className="mb-3">KEPADA</p>
            <p className="font-semibold">CLAUDIA ALVES</p>
            <p>+123-456-6789</p>
            <p>123 Anywhere St.Any City</p>
          </div>
        </div>
        <table className="table-auto border-collapse border border-slate-400 w-full my-5">
          <thead>
            <tr className="bg-cyan-100">
              <th className="border border-slate-300 p-2">Deskripsi Barang</th>
              <th className="border border-slate-300 p-2">Harga</th>
              <th className="border border-slate-300 p-2">Jumlah</th>
              <th className="border border-slate-300 p-2">Total</th>
            </tr>
          </thead>
          {data.map((item) => {
            return (
              <tbody>
                <tr key={item.id}>
                  <td className="border border-slate-300 p-2">
                    <p className="font-semibold">{item.type_job}</p>
                    {item.job_desc}{" "}
                  </td>
                  <td className="border border-slate-300 p-2 text-center">
                    Rp. {item.harga}
                  </td>
                  <td className="border border-slate-300 p-2 text-center">
                    {item.jumlah}
                  </td>
                  <td className="border border-slate-300 p-2 text-center">
                    Rp. {item.total}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <div className="w-full px-2">
          <div className="flex justify-between px-2 tracking-wide">
            <div className="font-semibold">TOTAL</div>
            <p className="font-semibold">Rp. 44400</p>
          </div>
          <div className="flex justify-between px-2">
            <p>PAJAK 10%</p>
            <p>Rp. 4400</p>
          </div>
          <div className="bg-cyan-100 flex justify-between mt-2 text-gray-700 tracking-wide">
            <p className="font-semibold  p-2">TOTAL KESELURUHAN</p>
            <p className="font-semibold p-2">Rp. 39960</p>
          </div>
        </div>
        <div className="text-left mt-32 px-2">
          <p className="mb-4">DIBAYARKAN KEPADA:</p>
          <p className="font-semibold">JALLONA SMITH</p>
          <p className="text-gray-700">
            Pembayaran Menggunakan Bank Internasional
          </p>
        </div>
      </div>
      <button
        className="bg-blue-400 rounded px-3 py-1 text-white mt-10 flex items-center gap-4"
        onClick={handlePrint}
      >
        Print this out <AiFillPrinter />
      </button>
    </div>
  );
};

export default ReactPdfPrint;
