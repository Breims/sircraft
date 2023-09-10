"use client";

const Whatsapp = ({img}) => {
  
    const openWhatsapp = () => {
    const url = `https://wa.me/+573006045248`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={openWhatsapp}>
      {img}
    </button>
  );
};

export default Whatsapp;
