import { certifications } from "@/store/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CertificationDialog = ({ open, onClose, certsId, children }) => {
  const selectedCertificate = certifications.find(
    (item) => item.id === certsId
  );

  const bullets =
    selectedCertificate?.description
      ?.split("\n")
      .map((line) => line.replace(/^\s*•\s?/, "").trim())
      .filter(Boolean) ?? [];

  console.log(selectedCertificate);
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Certificate</DialogTitle>
          <DialogDescription>
            Diterbitkan Oleh: <strong>{selectedCertificate?.by}</strong>
          </DialogDescription>
        </DialogHeader>
        <div>
          <img
            src={selectedCertificate?.image}
            className="rounded-sm"
            alt={selectedCertificate?.by ?? "Sertifikat"}
          />
          {bullets.map((bullet, idx) => (
            <p key={idx}>• {bullet}</p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationDialog;
