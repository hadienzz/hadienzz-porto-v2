import { useState } from "react";

const useViewCertificate = () => {
  const [certsId, setCertsId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (id) => {
    setIsOpen(true);
    setCertsId(id);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCertsId(null);
  };

  return {
    certsId,
    isOpen,
    handleOpen,
    handleClose,
  };
};

export default useViewCertificate;
