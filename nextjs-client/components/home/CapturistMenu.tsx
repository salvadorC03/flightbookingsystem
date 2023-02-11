import Image from "next/image";
import Link from "next/link";
import CustomerPicture from "../../public/customer.png";

const CapturistMenu: React.FC = () => {
  return (
    <div>
      <Link href="/home/customer">
        <Image src={CustomerPicture} alt="Clientes" width={100} height={100} />
      </Link>
    </div>
  );
};

export default CapturistMenu;
