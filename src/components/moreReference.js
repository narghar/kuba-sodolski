import Link from "next/link";
import Button from "./button";

const MoreReference = () => {
  return (
    <div className="text-center mt-20">
      <Link href="/opinie" passHref>
        <Button size="normal">Zobacz więcej referencji</Button>
      </Link>
    </div>
  );
}

export default MoreReference

