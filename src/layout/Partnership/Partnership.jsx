import React from "react";

const PartnershipContent = [
  {
    image: "/PartnershipLogo/SunStar.png",
    name: "PT. SUN STAR PRIMA PRIMA BOGOR",
  },

  {
    image: "/PartnershipLogo/BOGOR.png",
    name: "DINAS KOMINFO KABUPATEN BOGOR",
  },

  {
    image: "/PartnershipLogo/TELKOM.png",
    name: "MANAGER SS dan GS PT. TELKOM",
  },

  {
    image: "/PartnershipLogo/DPRD.png",
    name: "SEKRETARIS DPRD KAB. BOGOR",
  },

  {
    image: "/PartnershipLogo/BRI.png",
    name: "BANK BRI KC CIBINONG",
  },

  {
    image: "/PartnershipLogo/DEPTECH.png",
    name: "PT. DEPTECH DIGITAL INDONESIA",
  },

  {
    image: "/PartnershipLogo/SALAM.png",
    name: "PT. AMA SALAM INDONESIA",
  },

  {
    image: "/PartnershipLogo/VIRUS.png",
    name: "PT. VIRUS MEDIA INVESTERA",
  },

  {
    image: "/PartnershipLogo/MARVATEL.png",
    name: "PT. MARVA CIPTA INDONESIA",
  },

  {
    image: "/PartnershipLogo/TNI.png",
    name: "PUSINFOLAHTA TNI",
  },

  {
    image: "/PartnershipLogo/ALUS.png",
    name: "PT. ASTECH ALUS TECHNOLOGY",
  },

  {
    image: "/PartnershipLogo/TITIAN.png",
    name: "PT. LINGKAR SEMBILAN TITAN MEDIA",
  },

  {
    image: "/PartnershipLogo/WANTEK.png",
    name: "PT. WAN TEKNOLOGI INTERNASIONAL",
  },

  {
    image: "/PartnershipLogo/UI.png",
    name: "FAKULTAS PSIKOLOGI UNIVERSITAS INDONESIA",
  },

  {
    image: "/PartnershipLogo/GILLAND.png",
    name: "PT. GILLAND GANESHA",
  },

  {
    image: "/PartnershipLogo/BIONIC.png",
    name: "PT. BIONIC TEKNOLOGI INDONESIA",
  },
];

const Partnership = () => {
  return (
    <div className="">
      <p className="px-16 font-bold text-3xl lg:text-4xl text-center">
        RELATIONSHIP / PARTNERSHIP
      </p>
      <div className="flex flex-wrap mb-28">
      
      <div className="flex flex-wrap">
        {PartnershipContent.map((content, index) => (
          <div key={index} className="w-1/4 p-2 font-bold">
            <div className="h-44 flex items-center ">
              <img
                src={content.image}
                alt={`Partnership ${index + 1}`}
                className="mx-auto"
              />
            </div>
            <h2 className="text-center hidden lg:block">{content.name}</h2>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Partnership;
