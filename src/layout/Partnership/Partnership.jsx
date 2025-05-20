import React from "react";

const PartnershipContent = [
  {
    image: "/assets/PartnershipLogo/SunStar.png",
    name: "PT. SUN STAR PRIMA PRIMA BOGOR",
  },

  {
    image: "/assets/PartnershipLogo/Bogor.png",
    name: "DINAS KOMINFO KABUPATEN BOGOR",
  },

  {
    image: "/assets/PartnershipLogo/TELKOM.png",
    name: "MANAGER SS dan GS PT. TELKOM",
  },

  {
    image: "/assets/PartnershipLogo/DPRD.png",
    name: "SEKRETARIS DPRD KAB. BOGOR",
  },

  {
    image: "/assets/PartnershipLogo/BRI.png",
    name: "BANK BRI KC CIBINONG",
  },

  {
    image: "/assets/PartnershipLogo/DEPTECH.png",
    name: "PT. DEPTECH DIGITAL INDONESIA",
  },

  {
    image: "/assets/PartnershipLogo/SALAM.png",
    name: "PT. AMA SALAM INDONESIA",
  },

  {
    image: "/assets/PartnershipLogo/VIRUS.png",
    name: "PT. VIRUS MEDIA INVESTERA",
  },

  {
    image: "/assets/PartnershipLogo/MARVATEL.png",
    name: "PT. MARVA CIPTA INDONESIA",
  },

  {
    image: "/assets/PartnershipLogo/TNI.png",
    name: "PUSINFOLAHTA TNI",
  },

  {
    image: "/assets/PartnershipLogo/ALUS.png",
    name: "PT. ASTECH ALUS TECHNOLOGY",
  },

  {
    image: "/assets/PartnershipLogo/TITIAN.png",
    name: "PT. LINGKAR SEMBILAN TITAN MEDIA",
  },

  {
    image: "/assets/PartnershipLogo/WANTEK.png",
    name: "PT. WAN TEKNOLOGI INTERNASIONAL",
  },

  {
    image: "/assets/PartnershipLogo/UI.png",
    name: "FAKULTAS PSIKOLOGI UNIVERSITAS INDONESIA",
  },

  {
    image: "/assets/PartnershipLogo/GILLAND.png",
    name: "PT. GILLAND GANESHA",
  },

  {
    image: "/assets/PartnershipLogo/BIONIC.png",
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
