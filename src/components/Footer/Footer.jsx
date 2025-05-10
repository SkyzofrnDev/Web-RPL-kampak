import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-[#272727] text-white px-4 pb-5 lg:pb-0 lg:px-20 pt-11">
    <div className="flex flex-col sm:flex-row justify-between">
      <div>
        <div className=" flex items-end pb-5 ">
          <div className="border-b-white flex border-b-4 justify-end pb-2 l:pb-0">
            <p className="text-lg lg:text-2xl font-semibold mt-2">
              SMKN 1 CIBINONG <br />
              REKAYASA PERANGKAT LUNAK (RPL)
            </p>
            <div className="flex items-center w-20 ml-24">
              <img src="/Assets/SMKN_1_Cibinong.png" alt="Logo-Kamvak" srcset="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mb-16 text-sm">
          <div className="">
            <p className="font-semibold text-base mb-1 lg:text-xl lg:mb-2">
              Kontak Jurusan
            </p>
            <p className="">08xxxxxxxx ( Alfi Rahman Hakim )</p>
            <p className="mb-2 lg:mb-5">08xxxxxxxx ( Yusrizhal )</p>
            <p className="">rplsmkn1cibinong@gmail.com</p>
          </div>

          <div className="font-medium mt-5 lg:mx-16 lg:mt-0">
            <p className="font-semibold text-xl mb-1 lg:mb-2">Kelas RPL</p>
            <div className="flex ">
              <div>
                <p className="">X RPL 1</p>
                <p className="">XI RPL 1</p>
                <p className="">XII RPL 1</p>
              </div>

              <div className="ml-7">
                <p className="">X RPL 2</p>
                <p className="">XI RPL 2</p>
                <p className="">XII RPL 2</p>
              </div>
            </div>
          </div>
          <div className="font-medium">
            <p className="font-semibold text-xl mb-1 mt-5 lg:mb-2 lg:mt-0">
              Lab RPL
            </p>
            <p>Self Access</p>
            <p>Database</p>
            <p>Software</p>
            <p>Workshop</p>
            <p>Ruang Guru RPL</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-80">
          <div class="mapouter ">
            <div class="gmap_canvas" className="p-0">
              <iframe
                width="320"
                height="192"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Smkn+1+cibinong&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <style className="relative text-right h-192 w-320 "></style>
              <style className="overflow-hidden bg-none h-192 w-320"></style>
            </div>
          </div>
          <div className="font-medium text-center mt-2 text-sm lg:text-base lg:mt-0">
            <p>
              SMK NEGERI 1 CIBINONG
              <br />
              Kab. Bogor, Jawa Barat, Indonesia
            </p>
            <p className="font-semibold mt-5">
              This work was created by{" "}
              <a
                href="/bosmuda"
                className="text-[#CC00FF] border-b border-b-white	 hover:text-[#A20000] ease-in-out duration-300"
              >
                Bos Muda
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer