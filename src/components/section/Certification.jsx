import { motion } from "framer-motion";
import Marquee from "../custom/Marquee";
import { certifications } from "@/store/data";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import CertificationDialog from "../custom/CertificationDialog";
import useViewCertificate from "@/hooks/useVIewCertificate";

const CertificateSection = () => {
  const { certsId, handleClose, handleOpen, isOpen } = useViewCertificate();

return (
    <section className="">
        <div className="my-8">
            <Marquee letter={"MY • CERTIFICATE"} />
        </div>
        <div className={"max-w-6xl mx-auto relative px-2"}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {certifications.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.id / 3, type: "keyframes" }}
                        className="relative group cursor-pointer"
                        onClick={() => handleOpen(item.id)}
                    >
                        <Card className="max-h-72">
                            <div>
                                <img src={item.image} alt={item.title} />
                                <Badge className={"absolute top-0 hidden group-hover:block"}>
                                    By: {item.by}
                                </Badge>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>

        <CertificationDialog
            open={isOpen}
            onClose={handleClose}
            certsId={certsId}
        />

        {/* New section indicator */}
        <div className="flex items-center justify-center mt-8">
            <span className="px-4 py-2 rounded bg-yellow-100 text-yellow-800 font-semibold border border-yellow-300 animate-pulse">
                🚧 New section is in process!
            </span>
        </div>
    </section>
);
};

export default CertificateSection;
